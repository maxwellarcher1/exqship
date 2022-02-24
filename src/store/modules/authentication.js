import * as actions from './authentication/actions'
import * as mutations from './authentication/mutations'
import * as getters from './authentication/getters'

 
const state = () =>({    
    token : localStorage.getItem('token') || null,
    error : null,
    userRole : localStorage.getItem('username') || null,
    verifedUser : localStorage.getItem('verfied') || null,
    loading : false,
    userSignupEmail : localStorage.getItem('signup-email') || null,
    errMessage : null,
    successMessage : null,
    signUpSuccess : null,
    userDeletion :false
});

export default {
    state,
    mutations,
    actions,
    getters
}

