exports.errorHandler = (error, req, res, next) => { 
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ success: false, error: message });
  };
  