const asyncHandler = (fn) => (req, res, next) => {
    //has to remove files
    Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
