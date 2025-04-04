const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB  = require("./config/dbConnection");
const vehicleRoutes = require("./routes/vehicleRoutes");
const authRoutes = require("./routes/authRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/admin");
const userRoutes = require('./routes/userRoutes')

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


// DataBase Connection
connectDB();

app.get("/", (req, res) => {
  res.send("RTO Automation Backend is Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);



// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
