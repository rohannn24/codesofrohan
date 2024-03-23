import jwt from 'jsonwebtoken';
import createError from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if(!token) return next(res.json(createError(401, "you are not authenticated...")));
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) return (res.json(createError(403, "Session Expired!")));
        req.user = user;
        next();
    })
}