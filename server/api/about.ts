import About from '../models/About';

export default defineEventHandler(async () => {
    // get users data
    const about = await About.findOne();
    return about;
})