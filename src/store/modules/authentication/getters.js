export const checkUserRole = (state) => {
    return state.userRole
}
export const studentAuth = (state) => {
    return state.token 
}
export const loading = (state) => {
    return state.loading
} 
export const errMssg = (state) => {
    return state.error
}
export const getErrMssg = (state) => {
    return state.errMessage
}
export const isAuthenticated = (state) => {
    return state.token  
}
export const getToken = (state) => {
    return state.token
}
export const getVerifiedUser = (state) => {
    return state.verifedUser
}
export const onLoadsuccessMessage = (state) => {
    return state.successMessage
}
export const success = (state) => {
    return state.signUpSuccess
}
export const userDeletionState = (state) => {
    return state.userDeletion
}
