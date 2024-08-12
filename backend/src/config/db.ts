import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config({ path: `C:\\Users\\Khalil\\Desktop\\mern-ts-docker\\backend\\.env` });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
