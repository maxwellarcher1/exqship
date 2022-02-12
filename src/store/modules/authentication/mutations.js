export const authStart = (state) => {
    state.error = null
    state.loading = true
}

export const authStopLoading = (state) =>{
    state.loading = false
}

export const authSuccess = (state, user) => {
    state.token = user.token
}

export const authStudentSuccess = (state, token) =>{
    state.studentToken = token
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
}