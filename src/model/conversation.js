const mongoose = require("mongoose"); 

const conversationSchema = new mongoose.Schema(
  {
    room: { type: mongoose.Types.ObjectId, ref:"Room", required: true },
    user: { type: mongoose.Types.ObjectId, ref:"User", required: true }, 
    text: { type: String , required: function(){
        return !this.file
    } },
    file :{type : String }
  },
  { timestamps: true }
); 

const ConversationModel = mongoose.model("Conversation", conversationSchema); //defining model
module.exports = { ConversationModel };
