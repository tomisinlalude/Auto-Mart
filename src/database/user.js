import bcrypt from 'bcrypt';

const user = {
    userName: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        unique: true,
    },
    email: {
        index: true,
        type: String,
        lowercase: true,
        trim: true,
        match: /^[a-zA-Z0-9._`-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
        unique: true,
    },
    password: {
        type: String,
        set: v => bcrypt.hashSync(v, 10),
    },
    createdOn: Date,
    updatedOn: Date,
};

export default user;