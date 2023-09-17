import mongoose from "mongoose";
const projectSchema = new mongoose.Schema(
    {
        adminId: {
            type: String,
            required: true,
        },
        aishe: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        stream: {
            type: String,
            required: true,
        },
        projectType: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        stdName: {
            type: String,
            required: true,
        },
        stdRoll: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
        },
        filename: {
            type: String,
            required: true,
        },
        filepath: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    },
    {
        collection: "projectDetails"
    }
);
const Project = mongoose.model("Project", projectSchema);
export default Project;