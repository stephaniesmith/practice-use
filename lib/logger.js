
module.exports = function createLogger(log = console.log) {
    return function logger(req, res, next) {
        log(`${req.method} ${req.url}`);
        next();
    };
};