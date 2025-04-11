
import axios from "axios";
import React, { useEffect, useState } from "react";


const ContactUsMessages = () => {
    const [messages, setMessages] = useState([]);

    const fetchContactMessages = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/contact/contact-messages");
            setMessages(data);
        } catch (error) {
            console.error("Error fetching contact messages:", error);
        }
    };

    useEffect(() => {
        fetchContactMessages();
    }, []);

    return (
        <section className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Messages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {messages.length > 0 ? (
                    messages.map((message) => ( 
                        <div key={message?._id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-lg font-bold text-gray-700">{message?.subject}</h3>
                            <p className="text-sm text-gray-500 mt-1">From: {message?.userId?.name || "Unknown User"} ({message?.email})</p>
                            <p className="mt-4 text-gray-600">{message?.message}</p>
                            <p className="mt-4 text-xs text-gray-400">{new Date(message?.createdAt).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No contact messages found.</p>
                )}
            </div>
        </section>
    )
}


export default ContactUsMessages