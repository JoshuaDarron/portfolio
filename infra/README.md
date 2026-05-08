# Infra: joshuadarron.com

Terraform module that provisions:

- **S3 bucket** `joshuadarron-com-site` (private, BPA on, versioning on, SSE).
- **CloudFront distribution** with OAC, the URL-rewrite/redirect Function, ACM cert, and the apex/`www` aliases.
- **ACM certificate** in `us-east-1` for `joshuadarron.com` and `www.joshuadarron.com`, DNS-validated.
- **Route 53** alias records (A and AAAA) for both names.
- **GitHub OIDC provider + IAM role** scoped to `repo:joshuadarron/portfolio:ref:refs/heads/master` and `environment:production`.

Edge logic for clean URLs lives in `cf-redirects.js` (CloudFront Function, runtime `cloudfront-js-2.0`).

## One-time bootstrap

The Terraform backend (state bucket + lock table) lives outside this module. Create them once with the AWS CLI:

```bash
aws s3api create-bucket --bucket joshuadarron-tfstate --region us-east-1
aws s3api put-bucket-versioning --bucket joshuadarron-tfstate \
    --versioning-configuration Status=Enabled
aws dynamodb create-table --table-name terraform-locks \
    --attribute-definitions AttributeName=LockID,AttributeType=S \
    --key-schema AttributeName=LockID,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST --region us-east-1
```

Route 53 must already host the `joshuadarron.com` zone; this module reads it via `data "aws_route53_zone"`.

## Apply

```bash
cd infra
terraform init
terraform fmt -check
terraform validate
terraform plan
terraform apply
```

After apply, copy the outputs into GitHub repo secrets:

- `S3_BUCKET` → `s3_bucket`
- `CLOUDFRONT_DIST_ID` → `cloudfront_distribution_id`
- `AWS_DEPLOY_ROLE_ARN` → `deploy_role_arn`

Also create a GitHub repo Environment named `production` (Settings → Environments).

## Smoke-test before DNS cutover

The Route 53 records swing the apex/`www` to CloudFront immediately. To test before that, point a browser at the CloudFront default domain (`<dist>.cloudfront.net`, value of `cloudfront_domain_name`). Note: the SSL cert there is the AWS default cert, not the ACM one, so the browser will warn — but content and rewrites work.

## Editing the redirect function

Change `cf-redirects.js`, then `terraform apply`. The `aws_cloudfront_function` resource publishes a new version; CloudFront propagates within ~1 minute. No invalidation is needed for function changes.
