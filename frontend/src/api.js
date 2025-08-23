import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// 🟢 Book an appointment
export const bookAppointment = (appointmentData) => API.post("/appointments", appointmentData);

// 🔵 Fetch all appointments
export const fetchAppointments = () => API.get("/appointments");

// 🟠 Update an appointment
export const updateAppointment = (id, updatedData) => API.put(`/appointments/${id}`, updatedData);

// 🔴 Delete an appointment
export const deleteAppointment = (id) => API.delete(`/appointments/${id}`);

// 🏷 User authentication (Optional)
export const loginUser = (credentials) => API.post("/users/login", credentials);
export const registerUser = (userData) => API.post("/users/register", userData);