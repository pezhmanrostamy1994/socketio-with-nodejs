const mongoose = require("mongoose"); 

const roomSchema = new mongoose.Schema(
  {
    room: { type: mongoose.Types.ObjectId,ref:"Room", required: true },
    type: { type: String, enum : ["group" ,"pv"], required: true }, 
  },
  { timestamps: true }
); 

const RoomModel = mongoose.model("Room", roomSchema); //defining model
module.exports = { RoomModel };
