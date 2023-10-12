import User from '../models/User';

export default defineEventHandler(async () => {
    // get users data
    const users = await User.find();
    return users;
})