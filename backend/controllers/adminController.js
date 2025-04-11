const Application = require("../models/Application");
const User = require("../models/User");
const Vehicle = require("../models/Vehicle");




const reportsAndAnalytisController = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();

        const totalVehicles = await Vehicle.countDocuments();

        const pendingApplications = await Application.countDocuments({ status: 'Pending' });

        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);
        const todayRegistrations = await Vehicle.countDocuments({
            createdAt: { $gte: startOfToday }
        });


        res.status(200).json({
                totalUsers,
            totalVehicles,
            pendingApplications,
            todayRegistrations
        });

    } catch (error) {
        console.error('Error fetching analytics data:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
}


module.exports = reportsAndAnalytisController;