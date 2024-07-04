import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/db')
.then(() => {
    console.log('db is connected');
})


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String
});

export default mongoose.model('user', userSchema);

