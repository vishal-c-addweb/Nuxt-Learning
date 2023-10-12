import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema({
    company_name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;