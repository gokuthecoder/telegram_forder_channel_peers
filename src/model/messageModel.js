const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    chat_id: { type: Number, default: null },
    message_link: { type: String, default: "" },
    file_name: { type: String, default: "" },
    mime_type: { type: String, default: null },
    duration: { type: Number, default: null },
    file_size: { type: Number, default: "" },
    caption: { type: String, default: null },
    forward_origin_chat_id: { type: Number, default: null },
    text_message: {type: String, default: ""}
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
