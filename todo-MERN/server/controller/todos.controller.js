import todosModel from "../models/todos.model.js"
import userModel from "../models/user.model.js"
export const update = (req, res) => {
    
}

export const deleteTodos = async (req, res) => {
    try {
        const todo = await todosModel.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" }); 
        }
        console.log('Deleted...') 
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const addtodos = async (req, res) => {
    const newTodo = todosModel({...req.body});
    await newTodo.save();
    const user = await userModel.findOne({_id: req.user.id});
    user.createdtodos.push(newTodo._id);  
    await user.save();
    res.status(200).json({newTodo, user});
}
export const getdata = async (req, res) => {
    const user = await userModel.findOne({_id: req.user.id}).populate('createdtodos');
    res.status(200).json(user.createdtodos);
}
export const getSingleData = async (req, res) => {
    const todo = await todosModel.findOne({_id: req.headers.id});
    if(!todo) res.json({"code": "404", "message": "Not found"})  
    res.status(200).json(todo);
}
