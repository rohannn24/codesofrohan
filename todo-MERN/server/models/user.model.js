import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdtodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }] 
}, {timestamps: true});

export default mongoose.model('User', userSchema);