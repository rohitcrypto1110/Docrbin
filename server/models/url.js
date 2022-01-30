import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  fileId: { 
  	type: String,
  	required: true 
  },
  creator: {
  	type: String,
  },
  createdAt: {
  	type: Date,
    default: new Date()
  },
  expiresIn: {
  	type: Number,
  	default: -1
  }
});

export default mongoose.model("URL", urlSchema);