import { userlist } from "../model/usermodel.js"

export function handleuser(req,res){
    const userdata=userlist()
    console.log(userdata)
res.render("user",{users:userdata})
}