const express=require("express");
const { createTodo, updateTodo } = require("./types");
const app=express();

app.use(express.json());
//body{ title:string
//      description:string
//  }
app.post("/todo",function (req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }
})

app.get("/todos",function(req,res){
    
})

app.put("/completed",function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
})