import mongoose from "mongoose";
const adminSchema = new mongoose.Schema(
    {
        aishe: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        },
        projects: {
            type : Array,
            default : [],
        }
    },
    {
        timestamps: true
    },
    {
        collection: "adminDetails"
    }
);
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;