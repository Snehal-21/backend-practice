export const snehal=(req,res)=>{
    res.send("sending message from snehal");
}

export const practice=(req,res)=>{
    res.status(201).send("sending message from Practice function")
}

export const Check=(req,res)=>{
    try{
        res.send("Checking try catch block functionality");
    }
    catch(error){
        res.send("error is=>",error);
    }
}