output "s3_bucket" {
  description = "Site bucket name. Set as the GitHub repo secret S3_BUCKET."
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID. Set as the GitHub repo secret CLOUDFRONT_DIST_ID."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront default domain. Use to smoke-test before DNS cutover."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "deploy_role_arn" {
  description = "IAM role ARN for GitHub Actions OIDC. Set as the GitHub repo secret AWS_DEPLOY_ROLE_ARN."
  value       = aws_iam_role.github_deploy.arn
}
