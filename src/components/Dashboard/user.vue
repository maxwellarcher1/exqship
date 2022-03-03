<template>
    <div class="container">
       <div>{{success}}</div>
        <div v-if="userDeletionState"  class="" style="position: relative;">
            <div class="alert alert-success text-center alert-dismissible fade show custom-alert" role="alert">
                <span>User has been successfully deleted</span>
                <button class="btn-close me-5" data-bs-dismiss="alert" aria-label="Close" @click="closeBtn"></button>
            </div>
        </div>
        <div class="row mt">
            <div class="col-8">
                 <div class="text-center mb-3">
                    <h4><strong>List of all Users</strong></h4>
                </div>
                <ol class="list-group" 
                    v-for="(n, index) in allUser" :key="index">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div>{{index + 1 }}.</div>
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{{n.username}}</div>
                            {{ n.email }}
                        </div>
                        <button class="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">Change Password</button>
                        <button class="btn btn-danger btn-sm" data-bs-toggle="modal" v-bind:data-bs-target="'#exampleModal3'+n.pk" >Delete</button>

                           <!-- Modal -->
                <!-- Delete user -->
              
                <div class="modal fade" v-bind:id="'exampleModal3'+n.pk" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <span><p class="modal-title ms-5" id="exampleModalLabel">Are you sure you want to delete <strong>{{n.username}}</strong>?</p></span>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <span class="me-3">
                                <button class="btn btn-primary" data-bs-dismiss="modal" @click="deleteUser(n.pk)">Yes</button>
                            </span>
                            <span>
                                <button class="btn btn-danger " data-bs-dismiss="modal">No</button>
                            </span>
                        </div>
                     </div>
                    </div>
                </div>
                </div>
                </li>
            </ol>
            </div>
            <div class="col-4 d-flex justify-content-center mt-5 mb-5">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Create User
                </button>
                     
                <!-- Modal -->
                <!-- Create user section -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <span><h5 class="modal-title" id="exampleModalLabel">User Create Form</h5></span>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <!-- User signup feedback messages-->
                        <div>
                            <div v-if="getErrMssg" class="alert-user">
                                <div class="alert alert-danger d-flex justify-content-between align-items-start">
                                    <span class="alert-message" style="text-align: center"> {{getErrMssg}}</span>
                                    <span><button type="button" class="btn-close text-end"  @click="closeBtn()"></button></span>
                                </div>
                            </div>
                            <!-- <div v-else-if="getErrMssg === 'Network Error' " class="alert-user" style="margin: 0 auto;">
                                <div class="alert alert-danger d-flex justify-content-between align-items-start ">
                                    <span class="alert-message"> Check your internet connection! </span>
                                    <span><button type="button" class="btn-close text-end"  @click="closeBtn()"></button></span>
                                </div>
                            </div> -->
                            <div v-else-if="success === 201">
                                <div v-show="resetFormInput()" class="alert alert-success d-flex justify-content-between align-items-start " role="alert">
                                    <div> User has been succesfully created!</div>
                                    <div><button type="button" class="btn-close text-end"  @click="closeAlertOnSuccess()"></button></div>
                                </div>
                            </div>
                        </div>
                        <form class="row g-3" @submit.prevent="onSubmit">
                            <div class="col-12">
                                <label for="validationServer01" class="form-label">username</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="validationServer01" 
                                    v-model="username"
                                    @input="removeErrorMessage(usernameError)"
                                    @click="closeAlertOnSuccess()"
                                    >
                                <div class="error">{{ usernameError }}</div>
                            </div>
                            <div class="col-12">
                                <label for="validationServer02" class="form-label">e-mail</label>
                                <input type="email"
                                 class="form-control" 
                                 id="validationServer02" 
                                 v-model="email"
                                  @input="removeErrorMessage(emailError)"
                                  @click="closeAlertOnSuccess()"
                                >
                                <div class="error">{{ emailError }}</div>
                                <!-- <div class="valid-feedback">
                                Looks good!
                                </div> -->
                            </div>
                            <div class="col-12">
                              <div class="">
                                <label for="validationServerUsername" class="form-label">Password</label>
                                <div class="input-group has-validation">
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="validationServerUsername" 
                                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                    v-model="password1" 
                                    @click="closeAlertOnSuccess()"
                                    @input="removeErrorMessage(password1Error)"
                                    >
                                    </div>
                                    <div class="error">{{ password1Error }}</div>
                                </div>
                            </div>
                            <div class="col-12">
                              <div class="">
                                <label for="validationServerUsername" class="form-label">Confirm Password</label>
                                <div class="input-group has-validation">
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="validationServerUsername" 
                                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
                                    v-model="password2"
                                    @click="closeAlertOnSuccess()"
                                    @input="removeErrorMessage(password2Error)"
                                    >
                                    </div>
                                <div class="error">{{ password2Error }}</div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <span v-if="loading === false">
                                    <button  class="btn btn-primary" type="submit">Create User</button>
                                </span>
                                <span v-else>
                                    <button  class=" btn btn-primary" type="submit" >
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Creating user...
                                    </button>
                                </span>
                            </div>
                        </form>
                      </div>
                    </div>
                </div>
                </div>
                 <!-- Modal -->
                <!-- change password section -->
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <span><h5 class="modal-title" id="exampleModalLabel2">change password</h5></span>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body">
                    <!-- User signup feedback messages-->
                        <div>
                            <div v-if="getErrMssg === 'Request failed with status code 400' " class="alert-user">
                                <div class="alert alert-danger">
                                    <span class="alert-message"> User already exist!</span>
                                    <span><button type="button" class="btn-close close-alert" data-bs-dismiss="modal" aria-label="Close" @click="btnClose"></button></span>
                                </div>
                            </div>
                            <div v-else-if="getErrMssg === 'Network Error' " class="alert-user" style="margin: 0 auto;">
                                <div class="alert alert-danger">
                                    <span class="alert-message"> Check your internet connection! </span>
                                    <span><button type="button" class="btn-close close-alert" data-bs-dismiss="modal" aria-label="Close" @click="btnClose"></button></span>
                                </div>
                            </div>
                        </div>
                        <form class="row g-3" @submit.prevent="onSubmit">
                            <div class="col-12">
                                <label for="validationServer01" class="form-label">username</label>
                                <input 
                                    type="text" 
                                    class="form-control is-valid" 
                                    id="validationServer01" 
                                    v-model="username" 
                                    required>
                            </div>
                            <div class="col-12">
                                <label for="validationServer02" class="form-label">Old Password</label>
                                <input type="email" class="form-control is-valid" id="validationServer02" v-model="email" required>
                                <!-- <div class="valid-feedback">
                                Looks good!
                                </div> -->
                            </div>
                            <div class="col-12">
                              <div class="">
                                <label for="validationServerUsername" class="form-label">New Password</label>
                                <div class="input-group has-validation">
                                <input 
                                    type="text" 
                                    class="form-control is-invalid" 
                                    id="validationServerUsername" 
                                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                    v-model="password1" 
                                    required>
                                    <!-- <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                        Please choose a username.
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                              <div class="">
                                <label for="validationServerUsername" class="form-label">Confirm New Password</label>
                                <div class="input-group has-validation">
                                <input 
                                    type="text" 
                                    class="form-control is-invalid" 
                                    id="validationServerUsername" 
                                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
                                    v-model="password2"
                                    required>
                                    <!-- <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                        Please choose a username.
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <div>
                                    <button class="btn btn-primary" type="submit">Create User</button>
                                </div>
                                
                            </div>
                        </form>
                      </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-center mt-5 mb-5">
                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Create User
                </button> -->
                     
                <!-- Modal -->
                <!-- Create user section -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <span><h5 class="modal-title" id="exampleModalLabel">User Create Form</h5></span>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <!-- User signup feedback messages-->
                        <div>
                            <!-- <div v-if="getErrMssg" class="alert-user">
                                <div class="alert alert-danger d-flex justify-content-between align-items-start">
                                    <span class="alert-message" style="text-align: center"> {{getErrMssg}}</span>
                                    <span><button type="button" class="btn-close text-end"  @click="closeBtn()"></button></span>
                                </div>
                            </div> -->
                            <!-- <div v-else-if="getErrMssg === 'Network Error' " class="alert-user" style="margin: 0 auto;">
                                <div class="alert alert-danger d-flex justify-content-between align-items-start ">
                                    <span class="alert-message"> Check your internet connection! </span>
                                    <span><button type="button" class="btn-close text-end"  @click="closeBtn()"></button></span>
                                </div>
                            </div> -->
                            <!-- <div v-else-if="success === 201">
                                <div v-show="resetFormInput()" class="alert alert-success d-flex justify-content-between align-items-start " role="alert">
                                    <div> User has been succesfully created!</div>
                                    <div><button type="button" class="btn-close text-end"  @click="closeAlertOnSuccess()"></button></div>

                                </div>
                            </div> -->
                        </div>
                        
                      </div>
                    </div>
                </div>
                </div>   
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import { required, email, minLength} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { helpers, sameAs } from 'vuelidate/lib/validators'

const nameVal = helpers.regex('nameVal', /^[a-zA-Z ]*$/)
// import { computed, reactive } from "vue"

export default {
    setup() {  
        // const state = reactive({
        //     email: '', 
        //     password1: '', 
        //     password2 : ''
        // })
         
        // const rules = computed(() => {
        //     return {
        //         email : { required, email },
        //         password1 : { required },
        //         password2 : { sameAsPassword: sameAs(state.password1) }, 
        //     }  
        //  })
        //  console.log(state.password1)
        //  const v$ = useVuelidate(rules, state)
        //  return { state, v$ }
         

        
      
        return { v$: useVuelidate()};
    },
    data(){
        return {
            allUser: [],
            username : '',
            email : '',
            password1 : '',
            password2 : '',
            usernameError : '',
            emailError: "",
            password1Error: "",
            password2Error: "",
        }
    },
    created(){
        axios.get(`/user-list/`)
        .then(res => {
            console.log(res.data)
            this.allUser = res.data
        })
        .catch(err => {
            console.log(err)
        })
    },
    computed: {
    ...mapGetters([
            'loading',
            'errMssg',
            'getErrMssg',
            'success',
            'userDeletionState'
        ]),
    },
    validations: {
        username : { 
            required, 
            nameVal 
        },
        email: {
            required,
            email,
        },
        password1: {
            required,
            minLength: minLength(8),
        },
        password2: {
            required, 
            sameAsPassword : sameAs(function(){return this.password1})
        }
    }, 
    methods: {
        forceRerender() {
            this.$parent.forceRerender();
        },
        closeAlertOnSuccess(){
            this.$store.dispatch('initialUserSignUpStatusAction')
        },
        closeBtn(){
            this.$store.dispatch('initialSuccessMessageState')
        },
        resetFormInput(){
            this.username = ''
            this.email = ''
            this.password1 = ''
            this.password2 = ''
        },
        removeErrorMessage(err){
            // console.log(this.success)
            if (err === this.usernameError){
                this.usernameError = ''
            }else if (err === this.emailError){
                this.emailError = ''
            }else if (err === this.password1Error){
                this.password1Error = ''
            }else if (err === this.password2Error){
                this.password2Error = ''
            }
        },
        deleteUser(user_id){
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            axios.delete(`delete/verified-user/${user_id}/`, config)
            .then( res =>{
                if (res.request.status === 200){
                    this.$store.dispatch('userDeletionStatusAction')
                }
                this.forceRerender()
                
            })
            .catch(err =>{
                console.log(err)
                this.forceRerender()
            })
            
        },
        onSubmit(){
            if (this.v$.username.required.$response === false) {
                this.usernameError = 'enter a username'  
            } else if(this.v$.username.nameVal.$invalid === true) {
                this.usernameError = 'username contains invalid character' 
               
            } else if (this.v$.email.required.$response === false){
                this.emailError = "enter your email address";
            } else if (this.v$.email.email.$invalid === true) {
                this.emailError = "enter a valid email address";
            } else if (this.v$.password1.required.$response === false) {
                this.password1Error = "enter password";
            } else if (this.v$.password1.minLength.$invalid === true){
                this.password1Error = "password is too short"  
            } else if (this.v$.password2.required.$response === false) {
                this.password2Error = "re-enter your password";
            } else if(this.v$.password2.sameAsPassword.$invalid === true){
                this.password2Error = 'password does not match'
            }else {
                const formData = {
                    username : this.username,
                    email : this.email,
                    password1 : this.password1,
                    password2 : this.password2
                }
                this.$store.dispatch('authSignup', {
                        username : formData.username, 
                        email: formData.email,
                        password1 : formData.password1,
                        password2 : formData.password2
                    })
                // this.resetFormInput()
                // this.forceRerender()
            }
        } 
    },
}
</script>
<style scoped>
 .error {
     color: red
 }

.custom-alert {
    position: fixed; 
    top: 9%; 
    left: 0%; 
    right: 0%; 
    width: 100%;  
    z-index: 1;
}

</style>