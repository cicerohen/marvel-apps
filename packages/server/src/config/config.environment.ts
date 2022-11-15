export const environment = Object.freeze({
  port: process.env.PORT || 4000,
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1'
  },
  secret: process.env.SECRET || ''
});
