// This method is using the prommises 

const asyncHandler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}

export {asyncHandler};

//this is by uisng the try and catch 
// const asyncHandler = (fn) => async(req,res,next)=>{
//     try{
//           await fn(req,res,next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }



//both are same methods to use 