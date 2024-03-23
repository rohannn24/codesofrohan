import mongoose from 'mongoose';

const todosSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    heading:{
        type: String,
        required: true
    },
    todoBody:{
        type: String,
        required: true
    },
    currStatus:{
        type: String,
        default: 'Pending'
    }
}, {timestamps: true});

export default mongoose.model('Todo', todosSchema);