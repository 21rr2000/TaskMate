const express=require("express");
const cors=require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app=express();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}));
//body{ title:string
//      description:string
//  }
app.post("/todo", async function (req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos", async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos:todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id 
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);