import pool from './db.js';

 const connectDB=async()=>{
    
    try{
        await pool.connect();
        console.log('Connected to the database successfully!');
    }catch(error){
        console.error('Error connecting to the database:', error);
    }
}
export default connectDB;