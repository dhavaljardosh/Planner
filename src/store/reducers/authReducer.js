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
        default:
            return state
    }
}

export default authReducer;