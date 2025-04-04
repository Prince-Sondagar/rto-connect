const User = require("../models/User");


const getAllUser = async (req, res) => {
    try {
        const users = await User.find({ role: "user" });
        return res.status(200).send({ users: users, message: "All users fetched successfully!" });
    } catch (error) {
        console.log("Error in getAllUser Controller:", error);
        return res.status(500).send({ message: error?.message || "Internal server error" });
    }
};


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the user exists
        const existingUser = await User.findById(id);
        if (!existingUser) {
            return res.status(404).send({ message: "User not found" });
        }

        // Delete the user
        await User.findByIdAndDelete(id);

        return res.status(200).send({ message: "User deleted successfully!" });
    } catch (error) {
        console.log("Error in deleteUser Controller:", error);
        return res.status(500).send({ message: error?.message || "Internal server error" });
    }
};


module.exports = {
    getAllUser,
    deleteUser
}