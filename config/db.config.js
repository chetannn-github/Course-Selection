import mongoose from "mongoose";




export async function main() {
    try {
        await mongoose.connect(`mongodb+srv://chetanrajawat25:${process.env.MONGO_ATLAS}@cluster0.fjqd5.mongodb.net/`);
        
  console.log("connected to database");
    } catch (error) {
        console.log(error.message);
    }
  
  

}