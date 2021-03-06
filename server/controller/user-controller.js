
import User from '../model/userSchema.js'
import UserEdu from '../model/educationDetailSchema.js'

export const userRegister = async (request, response) => {

    try {
        const exist = await User.findOne({ identity: request.body.identity });
        if (exist) {
            return response.status(401).json('User With same Id exist')
        }
        const user = request.body;
        const newUser = User(user);
        await newUser.save();
        response.status(200).json('Candiate Registered successfully');
    } catch (error) {
        console.log("Error", error.message);
    }
    return;
}
