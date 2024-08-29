/**todo{
 * title:string,
 * description:string,
 * completed:boolean
 * }
 * 
 */

const mongoose=require("mongoose");
const { boolean } = require("zod");
//mongodb+srv://22051878:APRIL13choti@cluster0.yyrgsci.mongodb.net/
//real application mein .env file
mongoose.connect("mongodb+srv://22051878:APRIL13choti@cluster0.yyrgsci.mongodb.net/TaskMate")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('TaskMate',todoSchema);
module.exports={
    todo
}