exports.throwHttpError = ({ message, status }) => {
    const error = new Error(message);
    // @ts-ignore
    error.statusCode = status;
    throw error;
  };
  