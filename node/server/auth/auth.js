const jwt = require("jwt-simple");
const moment = require("moment");
const config = require("../../setups/myurl")

module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).send({ message: "Authentication failed" });
        }
        var token = req.headers.authorization.split(' ')[1];
        var payload = null;
        try {
            payload = jwt.decode(token, config.TOKEN_SECRET);
        } catch (err) {
            return res.status(401).send({ message: err.message });
        }
        if (payload.exp <= moment.unix()) {
            return res.status(401).send({ message: "Token has expired" });
        }
        req.user = payload.sub;
        next();
    },
    createJWT: function (user) {
        var payload = {
            sub: user._id,
            iat: moment().unix(),
            exp: moment().add(14, 'days').unix()
        };
        return jwt.encode(payload, config.TOKEN_SECRET);
    }
}