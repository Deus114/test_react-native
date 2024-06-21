import axios from "../utils/axiosCuztomize";

const postEmailSignUp = (email) => {
    return axios.post(`auth/signUp`,
        { email: email }
    );
}

const postPreLogin = (email) => {
    return axios.post(`auth/preLogIn`,
        { email: email }
    );
}

const postOtpVerify = (otp, email) => {
    return axios.post(`auth/verifyOtp`,
        {
            otp: otp,
            email: email
        }
    );
}

const postLogin = (otp, email, role, password) => {
    return axios.post(`auth/logIn`,
        {
            otp: otp,
            email: email,
            role: role,
            password: password
        }
    );
}

const postRegister = (email, password, matchingPassword, name, dob, gender, phoneNumber, role, avatar, otp) => {
    return axios.post(`users/register`,
        {
            otp: otp,
            email: email,
            password: password,
            matchingPassword: matchingPassword,
            name: name,
            dob: dob,
            gender: gender,
            phoneNumber: phoneNumber,
            role: role,
            avatar: avatar
        }
    );
}

export {
    postEmailSignUp, postOtpVerify,
    postRegister, postPreLogin,
    postLogin
}