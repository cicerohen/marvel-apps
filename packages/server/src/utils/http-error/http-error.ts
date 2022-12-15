enum StatusCode {
  UNATHORIZED = 402,
  FORBIDDEN = 403
}

type Status = keyof typeof StatusCode;

type Options = {
  status: Status;
  message: string;
  extendedInfo?: string;
};

export class HttpError extends Error {
  public readonly name: string;
  public readonly status: Options['status'];
  public readonly statusCode: StatusCode;
  public readonly message: string;
  public readonly extendedInfo: Options['extendedInfo'];

  constructor(options: Options) {
    super(options.message);
    this.name = this.constructor.name;
    this.statusCode = StatusCode[options.status];
    this.message = options.message;
    this.extendedInfo = options.extendedInfo;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class Unathorized extends HttpError {
  constructor(options?: Partial<Pick<Options, 'extendedInfo' | 'message'>>) {
    super({ status: 'UNATHORIZED', message: 'Not authorized', ...options });
  }
}

export class Forbidden extends HttpError {
  constructor(options?: Partial<Pick<Options, 'extendedInfo' | 'message'>>) {
    super({ status: 'FORBIDDEN', message: 'Not authorized', ...options });
  }
}
