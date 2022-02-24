import axios from 'axios'
import router from '../../../router'

export const authLogin = ({commit, dispatch}, authData) => {
    dispatch('authStart')
    axios.post('/rest-auth/login/', {
        username : authData.username,
        password : authData.password
    })
    .then(res => {
        const user = res.data
        localStorage.setItem('token', user.key)
        localStorage.setItem('username', authData.username)
        commit('authSuccess', user)
        dispatch('authStopLoading')
        router.push({name: 'Dashboard'})
         
    })
    .catch(err => {
        // console.log(err.message)
        console.log(err.response.statusText)
        commit('authFail', err)
        commit('errMessageType', err.response.statusText)
        dispatch('authStopLoading')
    })
    // dispatch('authStart')
    // dispatch('authStopLoading')
}

export const authSignup = ({commit, dispatch}, authData) => {
    let userData = { 
        username : authData.username,
        email : authData.email,
        password1 : authData.password1,
        password2 : authData.password2
    }
    dispatch('authStart')
    axios.post('/rest-auth/registration/', userData)
    .then(res => {
        console.log(res)
        commit('authSignUpSuccess', res.status)
        const userSignupEmail = res.data.email
        localStorage.removeItem('signup-email')
        localStorage.setItem('signup-email', userSignupEmail)
        dispatch('authStopLoading')
        // router.push('/email/verification')
        
    })
    .catch(err => {
        console.log(err.request.response)
        const myObj = JSON.parse(err.request.response) 
        if (myObj["username"]){
            commit('errMessageType', myObj["username"][0])
        }else if (myObj["email"]){
            commit('errMessageType', myObj["email"][0])
        }else if (myObj["password1"]) {
            commit('errMessageType', myObj["password1"][0])
        }else {
            commit('errMessageType', "Error creating a user!")
        }
        commit('authFail', err)
        dispatch('authStopLoading')
    })
}

export const changeStateError = ({dispatch}) =>{
    dispatch('removeStateErr')
}

export const removeStateErr = ({commit}) =>{
    commit('removeStateError')
}

export const logout = () => {
    localStorage.removeItem('token')
    // localStorage.removeItem('signup-email')
    // localStorage.removeItem('verfied')
    delete axios.defaults.headers.common['Authorization']
    router.push({ name: "Home" })
}

export const authStart = ({commit}) => {
    commit('authStart')
}

export const authStopLoading = ({commit}) => {
    commit('authStopLoading')
}

export const onTryAutoSignup = ({dispatch}) => {
    dispatch('authCheckState')
}

export const authCheckState = ({commit, dispatch}) => {
    const token = localStorage.getItem('token')
        if (token === undefined){
            dispatch('logout')
        }else {
            commit('authSuccess', token)
            }
        }

export const authLogOut = ({commit, dispatch}) => {
            dispatch('logout')
            commit('authLogout')                 
    }


export const successMessageState = ({commit}) =>{
    commit('successMessageType')
}

export const initialSuccessMessageState = ({commit}) =>{
    commit('initialSuccessMessageType')
}

export const userDeletionStatusAction = ({commit}) => {
    commit("userDeletionStatus")
}


export const initialUserSignUpStatusAction = ({commit}) =>{
    commit('initialUserSignUpStatus')
}




