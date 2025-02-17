class ApiError extends Error {
  constructor(
    status,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super();
    this.status = status;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    }
  }
}

export default ApiError;
