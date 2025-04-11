const express = require("express");
const Contact = require("../models/Contact");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    //console.log("Incoming Data",req.body); // Debugging
    //console.log("ContactQuery Model:", Contact); // Debugging

    const currentUser = req.user;
    const { email, subject, message } = req.body;
    try {
      const newQuery = new Contact({ email, subject, message, userId: currentUser?.id });
      await newQuery.save();
    } catch (error) {
      console.error("Error saving query:", error);
    }
    return res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    console.error("Error submitting query ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/contact-messages', async (req, res) => {
  try {
    const contactMessages = await Contact.find()
      .populate('userId', 'name email')
      .sort({ createdAt: -1 });

    return res.status(200).json(contactMessages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return res.status(500).json({ message: "Server Error" });
  }
})


module.exports = router;
