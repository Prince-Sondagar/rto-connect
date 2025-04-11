import { useEffect, useState } from "react";
import { getVehicalFitnessCertificate } from "../services/vehicalService";


const ManageFitnessCertificate = () => {

    const [certificates, setCerticates] = useState([])

    const getAllVehicalFitnessCerticates = async () => {
        try {
            const result = await getVehicalFitnessCertificate();
            setCerticates(result)
        } catch (error) {
            console.lolg("Error:", error)
        }
    }

    useEffect(() => {
        getAllVehicalFitnessCerticates()
    }, [])

    useEffect(() => {
        console.log("certificates ===>", certificates)

    }, [certificates])

    return (
        <>
            <div className="container mx-auto p-4 my-5">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Vehical Fitness Certificate</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Registration nNo</th>
                                <th className="py-3 px-6 text-left">Owner Name</th>
                                <th className="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {certificates.length > 0 ? (
                                certificates.map((certificate, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                        {/* <td className="py-3 px-6 text-left">{user.name}</td>
                                        <td className="py-3 px-6 text-left">{user.email}</td>
                                        <td className="py-3 px-6 text-center">
                                            <button
                                                onClick={() => deleteUser(user._id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                                                Delete
                                            </button>
                                        </td> */}
                                    </tr>   
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center py-4 text-gray-500">No users found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default ManageFitnessCertificate;