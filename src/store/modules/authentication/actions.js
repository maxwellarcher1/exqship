import axios from 'axios'
import router from '../../../router'

export const authLogin = ({commit, dispatch}, authData) => {
    dispatch('authStart')
    axios.post('http://127.0.0.1:8000/rest-auth/login/', {
        username : authData.username,
        password : authData.password
    })
    .then(res => {
        console.log(res)
        const user = res.data
        localStorage.setItem('token', user.key)
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
        password : authData.password,
        password2 : authData.password2
    }
    dispatch('authStart')
    axios.post('http://127.0.0.1:8000/rest-auth/registration/', userData)
    .then(res => {
        console.log(res)
        const userSignupEmail = res.data.email
        localStorage.removeItem('signup-email')
        localStorage.setItem('signup-email', userSignupEmail)
        dispatch('authStopLoading')
        router.push('/email/verification')
        
    })
    .catch(err => {
        commit('authFail', err)
        commit('errMessageType', err.message)
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

