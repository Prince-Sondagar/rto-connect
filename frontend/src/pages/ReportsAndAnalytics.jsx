import { useEffect, useState } from "react"
import { getRepostaAdndAnaylistData } from "../services/vehicalService";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const ReportsAndAnalytic = () => {

    const [analyticsDetails, setAnalyticsDetails] = useState({})

    const fetchAnalyticsReports = async () => {
        const data = await getRepostaAdndAnaylistData()
        console.log("data ===>", data)
        setAnalyticsDetails(data)
    }

    useEffect(() => {
        fetchAnalyticsReports()
    }, []);

    // Data for Charts
    const pieData = [
        { name: "Total Users", value: analyticsDetails?.totalUsers || 0 },
        { name: "Vehicle Registrations", value: analyticsDetails?.totalVehicles || 0 },
        { name: "Pending Applications", value: analyticsDetails?.pendingApplications || 0 },
        { name: "Today's Registrations", value: analyticsDetails?.todayRegistrations || 0 },
    ]

    const barData = [
        { name: "Users", count: analyticsDetails?.totalUsers || 0 },
        { name: "Vehicles", count: analyticsDetails?.totalVehicles || 0 },
        { name: "Pending", count: analyticsDetails?.pendingApplications || 0 },
        { name: "Today's Reg.", count: analyticsDetails?.todayRegistrations || 0 },
    ]

    const COLORS = ["#38bdf8", "#22c55e", "#f97316", "#6366f1"]

    return (
        <section className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Reports & Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Total Users */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-bold text-gray-700">Total Users</h3>
                    <p className="text-2xl font-extrabold text-primary mt-2">{analyticsDetails?.totalUsers || 0}</p>
                    <p className="text-sm text-gray-500 mt-2">Overall registered users</p>
                </div>

                {/* Vehicle Registrations */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-bold text-gray-700">Vehicle Registrations</h3>
                    <p className="text-2xl font-extrabold text-green-500 mt-2">{analyticsDetails?.totalVehicles || 0}</p>
                    <p className="text-sm text-gray-500 mt-2">Total registered vehicles</p>
                </div>

                {/* Pending Applications */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-bold text-gray-700">Pending Applications</h3>
                    <p className="text-2xl font-extrabold text-orange-500 mt-2">
                        {analyticsDetails?.pendingApplications || 0}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Applications under review</p>
                </div>

                {/* Today's Registrations */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-bold text-gray-700">Today's Registrations</h3>
                    <p className="text-2xl font-extrabold text-indigo-500 mt-2">{analyticsDetails?.todayRegistrations || 0}</p>
                    <p className="text-sm text-gray-500 mt-2">New registrations today</p>
                </div>

            </div>

            {/* Charts Section */}
            <div className="mt-15">
                <div className="mt-12   ">
                    <h3 className="text-xl font-semibold mb-6 text-gray-800">Analytics Overview</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Pie Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Overall Distribution</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill="#8884d8"
                                        label
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Bar Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Comparison Overview</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={barData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#38bdf8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReportsAndAnalytic