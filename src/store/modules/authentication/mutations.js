export const authStart = (state) => {
    state.error = null
    state.loading = true
}

export const authStopLoading = (state) =>{
    state.loading = false
}

export const authSuccess = (state, user) => {
    state.token = user 
}

export const authSignUpSuccess = (state, sucessfullSignUp) =>{
    state.signUpSuccess = sucessfullSignUp
}

export const authFail = (state, error) =>{
    state.error = error
}

export const authLogout=(state) =>{
    state.token = null
    state.studentToken = null
}

export const removeStateError = (state) => {
    state.error = null
}

export const errMessageType = (state, errType) => {
    state.errMessage = errType
}

export const successMessageType = (state) => {
    state.successMessage = 'success'
}

export const initialSuccessMessageType = (state) => {
    state.successMessage = null
    // state.signUpSuccess = null
    state.errMessage = null
    state.userDeletion = false
}
export const userDeletionStatus = (state) => {
    state.userDeletion = true
}

export const initialUserSignUpStatus = (state) => {
    state.signUpSuccess = null 
}

export const userRoleType = (state, userType) => {
    state.userRole = userType 
}

