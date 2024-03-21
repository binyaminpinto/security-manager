import { Schema, model } from "mongoose";

const userSchema = new Schema({
    carId: {
        type: Number,
        trim: true,
        require: true,
    },
    color: {
        type: String,
        require: false
    }
});

export default model("car", userSchema)