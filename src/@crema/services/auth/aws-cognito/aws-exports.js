// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

export const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_identity_pool_id:
    'us-east-1:e7ff8039-eaba-4b54-acde-d2d17edb2dce',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_p7i7U9Clu',
  aws_user_pools_web_client_id: '2dcf4mqkp8kvuqb087ies5ls6r',
  oauth: {
    domain: 'cremawork.auth.us-east-1.amazoncognito.com',
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/',
    responseType: 'code',
  },
  federationTarget: 'COGNITO_USER_POOLS',
};