const express=require("express")
const app=express();
const port=3000;

const middleware1 = (req, res, next)=>{
    console.log("Global Middleware Used");
    next()
}
const middleware2 = (req, res, next)=>{
    console.log("Middleware 2 is Used");
    next()
}
app.use(middleware1);


app.get("/",middleware2,(req,res)=>{
    res.send("<h1>Home Page: MiddleWare1 & Middleware2 </h1>")
})
app.get("/route1",middleware2,(req,res)=>{
    res.send("<h1> I have Middlware1 and Middleware2</h1>")
})
app.get("/route2",(req,res)=>{
    res.send("<h1>I have Middlware1</h1>")
})

app.get("/route3",(req,res)=>{
    res.send("<h1> I have Middlware1</h1>")
})

app.get("/route4",(req,res)=>{
    res.send("<h1>I have Middlware1</h1>")
})

app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`)
})
