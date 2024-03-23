const createError = (code, message) => {
    const err = new Error();
    err.code = code;
    err.message = message; 
    return err; 
}

export default createError;