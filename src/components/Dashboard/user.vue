<template>
    <div class="container">
        
        <div class="row">
            <div class="col-8">
                <ol class="list-group" 
                    v-for="(n, index) in allUser" :key="index">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div>{{index + 1 }}.</div>
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{{n.username}}</div>
                            {{ n.email }}
                        </div>
                        <button class="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">Change Password</button>
                        <button class="btn btn-danger btn-sm">Delete</button>
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
                                <div>{{username}}</div>
                                <!-- <div class="valid-feedback">
                                Looks good!
                                </div> -->
                            </div>
                            <div class="col-12">
                                <label for="validationServer02" class="form-label">e-mail</label>
                                <input type="email" class="form-control is-valid" id="validationServer02" v-model="email" required>
                                <!-- <div class="valid-feedback">
                                Looks good!
                                </div> -->
                            </div>
                            <div class="col-12">
                              <div class="">
                                <label for="validationServerUsername" class="form-label">Password</label>
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
                                <label for="validationServerUsername" class="form-label">Confirm Password</label>
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
                                <button class="btn btn-primary" type="submit">Create User</button>
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
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                <div>{{username}}</div>
                                <!-- <div class="valid-feedback">
                                Looks good!
                                </div> -->
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
                                <button class="btn btn-primary" type="submit">Create User</button>
                            </div>
                        </form>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            allUser: [],
            username : '',
            email : '',
            password1 : '',
            password2 : ''
        }
    },
    created(){
        axios.get(`http://127.0.0.1:8000/user-list/`)
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
            'getErrMssg'
        ]),
  },
    methods: {
        onSubmit(){
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
            }
        )  
      },  
    },
}
</script>