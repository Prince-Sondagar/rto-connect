import axios from "axios";

const API_URL = "http://localhost:5000/api/user";


// get All user
export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/getAll`);
        return response?.data?.users;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteUserService = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${userId}`);
        return response?.data;
    } catch (error) {
        throw error.response.data;
    }
}
