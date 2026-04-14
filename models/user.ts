import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required: false,
        select: false,
    },
    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    image:{
        type: String,
        required: false,
        default: "",
    },
    jobs:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Job",
        default: [],
    }
}, { timestamps: true });    

export const User = mongoose.models.User || mongoose.model("User", userSchema);