// connect with db
import mongoose from "mongoose";

// const dbConnection =  () =>{
//     mongoose.
//     connect(process.env.DB_URI)
//     .then((conn)=>{
//         console.log(`Database Connected: ${conn.connection.host}`)
//     }) 
//     .catch((err)=> {
//         console.error(`Database Error: ${err}`);
//         process.exit(1);
//     });

// }


const dbConnection = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(`Database Error: ${err}`);
        process.exit(1);
    }
    
}

export default dbConnection;