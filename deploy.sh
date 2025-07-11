#!/bin/bash
set -e

# Load environment variables from .env file
export $(grep -v '^#' .env | xargs)

# Build the project
yarn build

# Sync build output to S3
aws s3 sync ./out "s3://$S3_BUCKET/" --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*"