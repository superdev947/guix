var initdata = {
    user : null ,
    isLogin : false,
    loginMethod : '',
    screen:null,
}
const authReducer = (state = initdata, action) => {
    switch (action.type) {
        case "LOGIN": {
            return { ...state, user: action.payload, isLogin:true, loginMethod:action.loginMethod, screen:action.screen }
        }
        case "UPDATE_PROFILE": {
            return { ...state, user: action.payload }
        }
        case "LOGOUT": {
            return { ...state, isLogin:false }
        }
        default: {
            return state
        }
    }
}
export default authReducer
