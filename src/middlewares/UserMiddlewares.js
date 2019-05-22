class UserMiddlewares {
    static validateUsername (req, res, next) {
        const { username } = req.params;
        const regex = /\d+/;
        if (regex.test(username)) {
            return res.status(400).json({
                success: false,
                message: "You cannot use digits in your username",
            });
        }
        return next();
    }
}

export default UserMiddlewares;