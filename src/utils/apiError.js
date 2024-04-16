class ApiError extends Error {
  constructor(statusCode, message = "something went wrong", Error = []) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = Error;
    this.data = null;
    this.success = false;
  }
}

export default ApiError;
