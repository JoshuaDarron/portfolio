terraform {
  required_version = ">= 1.6.0"

  backend "s3" {
    bucket         = "joshuadarron-tfstate"
    key            = "portfolio/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.50"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# CloudFront, ACM, and the OIDC provider must live in us-east-1; the default
# provider above already targets it. The us_east_1 alias is kept for clarity in
# case the default region is ever changed.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

locals {
  domain      = "joshuadarron.com"
  www_domain  = "www.joshuadarron.com"
  bucket_name = "joshuadarron-com-site"
  github_repo = "joshuadarron/portfolio"
  github_ref  = "refs/heads/master"

  tags = {
    Project   = "joshuadarron-portfolio"
    ManagedBy = "terraform"
  }
}
