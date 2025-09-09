import User from "../models/userModel.js";
import { sendContactMessage } from "../services/messageServicse.js";

export const userMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!email || !name || !message) {
      return res.json({
        success: false,
        message: "Name, email and message are required",
      });
    }
      // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "Thanks for message. Kindly wait for Ali Imran’s response before sending another.",
      });
    }

    // Validate name
    if (name.length < 3) {
      return res.json({
        success: false,
        message: "Name must be at least 3 characters long",
      });
    }
    if (name.length > 30) {
      return res.json({
        success: false,
        message: "Name must not exceed 30 characters",
      });
    }
    if (/(.)\1{4,}/.test(name)) {
      return res.json({
        success: false,
        message: "Name contains too many repeated characters",
      });
    }

    // Validate email (only Gmail)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    if (!emailRegex.test(email)) {
      return res.json({
        success: false,
        message: "Only Gmail addresses are allowed (must end with @gmail.com)",
      });
    }

    // Validate message
    if (message.length < 10) {
      return res.json({
        success: false,
        message: "Message must be at least 10 characters long",
      });
    }
    if (message.length > 500) {
      return res.json({
        success: false,
        message: "Message must not exceed 500 characters",
      });
    }
    if (/(.)\1{4,}/.test(message)) {
      return res.json({
        success: false,
        message: "Message contains too many repeated characters",
      });
    }



    // save user when no mistake
    const user = new User({
       name, 
       email,
       message
       });
    await user.save();
    // send message to me on my gmail 
    await sendContactMessage(name,email,message)
    // if every thing work fine send response
    res.json({
      success: true,
      message: "Message sent successfully to Ali Imran",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
