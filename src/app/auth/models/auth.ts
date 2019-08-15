export class AuthErrorRes {
  error: Error;
}

export class Error {
  accountTypeId: any;
  message: string;
  mustChangePassword: boolean;
  success: boolean;
  token: any;
}
