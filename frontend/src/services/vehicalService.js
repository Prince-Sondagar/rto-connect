import axios from "axios";


const API_URL = "http://localhost:5000/api/vehicles";


export const storeVehicalFitnessCertificate = async (userData) => {
    try {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Make sure the token is valid

        const response = await axios.post(`${API_URL}/vehicalFitnessCertificate`, userData, {
            headers: {
                'Authorization': `${token}` // Ensure token format is correct
            }
        });

        console.log('Response:', response); // Check full response
        return response?.data?.newCertificates;
    } catch (error) {
        console.error("Error in storeVehicalFitnessCertificate:", error?.response?.data || error.message);
        throw error;
    }
};


export const getVehicalFitnessCertificate = async () => {
    try {
        const response = await axios.get(`${API_URL}/getVehicalFitnessCertificate`);
        return response?.data?.certificates;
    } catch (error) {
        console.error("Error in storeVehicalFitnessCertificate:", error?.response?.data || error.message);
        throw error;
    }
};