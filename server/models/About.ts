import mongoose, { Schema } from 'mongoose';

const aboutSchema = new Schema({
    company_name: { type: String, required: true },
    description: { type: String, required: true },
    mission: { type: String, required: true },
    vision: { type: String, required: true }
});

const About = mongoose.model("About", aboutSchema);

export default About;