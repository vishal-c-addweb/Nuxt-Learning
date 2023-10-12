import Contact from '../models/Contact';

export default defineEventHandler(async () => {
    // get users data
    const contact = await Contact.findOne();
    return contact;
})