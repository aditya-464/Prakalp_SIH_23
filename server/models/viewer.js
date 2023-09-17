import mongoose from "mongoose";
const viewerSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
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
            min : 6,
            max : 20
        },
        following : {
            type : Array,
            default : [],
        }
    },
    {
        timestamps: true
    },
    {
        collection: "viewerDetails"
    }
);
const Viewer = mongoose.model("Viewer", viewerSchema);
export default Viewer;