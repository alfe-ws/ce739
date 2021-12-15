import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  roomNumber: {type: String, required: true},
  status: String,
  location: [Number],
  guest: String,
  checkIn: {
    type: Date,
    default: new Date(),
    },
  checkOut: Date
  
});

export default mongoose.model("Room", userSchema);