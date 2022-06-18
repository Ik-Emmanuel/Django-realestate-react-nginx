import axios from "axios";

const LOCAL_URL = "http://localhost:8000"
const REGISTER_URL = LOCAL_URL + "/api/v1/auth/users/";
const LOGIN_URL = LOCAL_URL + "/api/v1/auth/jwt/create/";
const ACTIVATE_URL = LOCAL_URL + "/api/v1/auth/users/activation/";
const FETCH_ACCOUNT = LOCAL_URL + "/api/v1/profile/me"

// Register user
const register = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axios.post(REGISTER_URL, userData, config);
    return response.data;
};

// Login user

const login = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    let newData = {}
    const response = await axios.post(LOGIN_URL, userData, config);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        const config2 = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${response.data.access}`
            },
        };
        const response2 = await axios.get(FETCH_ACCOUNT, config2);
        if (response2.data) {
            localStorage.setItem("userprofile", JSON.stringify(response2.data.profile));
        }
        newData =  response2.data
    }
    // console.log(newData)
    return {...response.data, ...newData};
};

const logout = () => {
    localStorage.removeItem("user");  
    localStorage.removeItem("userprofile");
}

const activate = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(ACTIVATE_URL, userData, config);
    return response.data;
};

const authService = { register, login, logout, activate };

export default authService;