const users = ["tharun","kumar"]

const getUser = async(req,res)=>{
        res.status(200).json(users);  
};

const createUser = async(req,res)=>{
    const {userName, password} = req.body;
    if(!userName||!password){
        return res.status(400).json("All fields are mandatory");
    }
    else{
        users.push(userName);
        res.status(201).json(`User ${req.body.userName} created`);
    }
};

const deleteUser = async(req,res)=>{
    const { userName } = req.body;
    if(!userName){
        return res.status(400).json("All field are mandatory!");
    }
    res.status(200).json(`User ${req.body.userName} deleted.`);
};

const updateUser = async(req,res)=>{
    const {userName} = req.body;
    if(!userName){
        return res.status(400).json("All fields are mandatory");
    }
    res.status(200).json(`updated ${req.body.userName}`)
};

module.exports = {getUser,createUser,deleteUser,updateUser};