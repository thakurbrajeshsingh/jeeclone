
import UserEdu from '../model/educationDetailSchema.js'


export const userEducation = async (request, response) => {
    try {
       const edu = request.body;
        const userEduc = UserEdu(edu);
        await userEduc.save();
        response.status(200).json('Candiate Education Details added successfully');
    } catch (error) {
        console.log("Error", error.message);
    }
    return;
}