class UserMiddlewares {
    static validateUsername (req, res, next) {
        const { userName } = req.body;
        const regex = /\d+/;
        if (regex.test(userName)) {
            return res.status(400).json({
                success: false,
                message: "You cannot use digits in your username",
            });
        }
        return next();
    }
    static validatePhoneNumber (req, res, next) {
        const { phoneNumber } = req.body;
        const regex = /^\d{10}$/;
        if (regex.test(phoneNumber)) {
            return res.status(400).json({
                success: false,
                message: "Your phone number should be 11 digits",
            });
        }
        return next();
    }
    // static validatePassword (req, res, next) {
    //     const { password, confirmPassword } = req.body;
    //     const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
    //     if (regex.test(password)) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Your password must be between 6 and 15 characters in length and contain at least one digit and one special character",
    //         });
    //     }
    //     if (password !== confirmPassword) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Your passwords don't match",
    //         });
    //     }
    //     return next();
    // }
}

export default UserMiddlewares;
