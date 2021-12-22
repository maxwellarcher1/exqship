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
        name : authData.name,
        email : authData.email,
        password : authData.password,
        location : authData.location,
        number_of_employee : authData.number_of_employee,
        description : authData.description
    }
    if(authData.website){
        userData.website = authData.website
    }
    if(authData.facebook_link){
        userData.facebook_link = authData.facebook_link
    }
    if (authData.instagram_link){
        userData.instagram_link = authData.instagram_link
    }
    if(authData.linkedin_link){
        userData.linkedin_link = authData.linkedin_link
    }
    if(authData.twitter_link){
        userData.twitter_link = authData.twitter_link
    }
    dispatch('authStart')
    axios.post('/auth/employer/register', userData)
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

