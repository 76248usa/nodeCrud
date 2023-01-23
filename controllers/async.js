const asyncwrapper = (fn) => { //take controller as argument
return async (req,res,next) => {
    try {
     await fn(req,res,next)
       
    } catch (error) {
        next(error)
    }
}
}

module.exports = asyncwrapper;