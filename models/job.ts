import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type: String,
        required: true,
        trim: true
    },
    company:{
        type: String,
        required: true,
        trim: true
    },
    location:{
        type: String,
        required: true,
        trim: true
    },
    applicationStatus:{
        type: String,
        enum: ["Applied", "Interviewing", "Offered", "Rejected"],
        default: "Applied"
    },
    applicationDate:{
        type: Date,
        default: Date.now()   
    }, 
    notes:{
        type: String,
        trim: true,
    }  
})   

export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);