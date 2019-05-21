import bcrypt from 'bcrypt';

const User = ({
    id: {
        type: Number,
        increment: true, 
        unique: true,
    },
    userName: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: Number,
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
    isAdmin: {
        type: Boolean,
    },
    createdOn: Date,
    updatedOn: Date,
});

export default User;