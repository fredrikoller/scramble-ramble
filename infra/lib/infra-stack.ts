import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as cognito from "aws-cdk-lib/aws-cognito";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, "scramble-userpool", {
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_AND_PHONE_WITHOUT_MFA,
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
      },
      selfSignUpEnabled: true,
    });

    const appClient = userPool.addClient('scramble-cognito-client', {
      userPoolClientName: 'scramble-cognito-client',
      authFlows: {
        userPassword: true,
      },
    })
  }
}
