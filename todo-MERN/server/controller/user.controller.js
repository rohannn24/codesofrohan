import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import createError from '../error.js';
import jwt from 'jsonwebtoken';


export const register = async (req, res, next) => {
    try {
        const existed = await User.findOne({username: req.body.username});
        if(existed) return next(res.json(createError(404, "user already exist...")));
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const user = User({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        });
        await user.save();
        res.status(200).send('User has been created sucessfully...');        
    } catch (error) {
        next(res.json(createError(404, "Something went wrong while registering...")));
    }
}
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return next(res.status(403).json({username: req.body.username, message: "Bakchod ho kya pelhe account to create karo bhosrike...."}));
        
        const matchpass = bcrypt.compareSync(req.body.password, user.password);
        if (!matchpass) return next(res.status(403).json({username: req.body.username, message: "Gajab harami hai pehle account nhi create kiya ab password galat dalta hai bhosriwala...."}));

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY);
        const {_id, password, ...others} = user._doc;
        res.cookie("token", token, {
            httpOnly: true
        }).status(200).json({others,"userId": user._id, "token": token});
    } catch (error) {
        res.send(error);
    }
}
export const deleteUser = async (req, res, next) => {
    const user = await User.findOne({_id: req.params.id});
    if(!user) return next(res.status(404).json({"username": "null", "status": "user dosen't exist"}))
    await User.deleteOne({_id: req.params.id});
    return next(res.status(200).json({"status": "deleted"}))
} 
export const updateUser = async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    const user = await User.updateOne({username:req.params.username}, {...req.body, password: hash});
    res.json({"status":"User Updated..."});    
} 
export const getUserData = async (req, res) => {
     try {
        const userData = await User.findOne({_id: req.user.id});
        const {_id, password, createdAt, updatedAt, __v, ...others} = userData._doc;
        console.log(others)
        res.status(200).json({fullname: others.fullname,username: others.usename,email: others.email, userId: _id, accountCreatedAt: createdAt});
     } catch (error) {
        console.log('Error in geting user....');
     }
}