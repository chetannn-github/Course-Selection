import express from "express";
import { coursesRoutes } from "./routes/courses.routes.js";
import { main } from "./config/db.config.js";
import 'dotenv/config'
import { authRoutes } from "./routes/auth.routes.js";

const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    console.log("test api");
    res.send("test api")
    
})

app.use("/api/courses", coursesRoutes);
app.use("/api/auth",authRoutes)



app.listen(3000,()=>{
    console.log("server is running on port 3000");
    main();
})