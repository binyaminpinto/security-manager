import mongoose from "mongoose";

const URI = process.env.MONGO_URI as string
mongoose.connect('mongodb+srv://binyaminking:Nu054BvprZ5eh1uI@cluster0.lxegjko.mongodb.net/')
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('Failed to connect to MongoDB', err));

const Schema = mongoose.Schema;
