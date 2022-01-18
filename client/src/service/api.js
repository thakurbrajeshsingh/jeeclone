



import axios from 'axios';

const url = 'http://localhost:8000/';


export const authenticateNewRegister = (user) => {
    try {
        return axios.post(`${url}register`, user)
    } catch (error) {
        console.log("Error while Calling Sign Up Api")
    }
}