const authReducer = (state = {
    authError: {
        status: null,
        message: ''
    }
}, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log("LOGIN ERROR")
            return {
                ...state,
                authError: {
                    status: false,
                    message: 'LOGIN FAILED'
                }
            }
        case 'LOGIN_SUCCESS':
            console.log("LOGIN SUCCESS")
            return {
                ...state,
                authError: {
                    status: true,
                    message: 'Successfully Logged In'
                }
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout Success')
            return state;

        case 'SIGNUP_SUCCESS':
        console.log("SIGNUP SUCCESS");
        return{
            ...state,
            authError: {message:null}
        }
        case 'SIGNUP_ERROR':
        console.log("SIGNUP ERROR", action.err.message);
        return {
            authError:{message:action.err.message}
        }
        default:
            return state
    }
}

export default authReducer;