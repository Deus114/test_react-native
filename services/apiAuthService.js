import axios from "../utils/axiosCuztomize";

const postEmailSignUp = (email) => {
    return axios.post(`auth/signUp`,
        { email: email }
    );
}

const postOtpSignUp = (otp, email) => {
    return axios.post(`auth/verìyOtp`,
        {
            otp: otp,
            email: email
        }
    );
}

export {
    postEmailSignUp, postOtpSignUp
}