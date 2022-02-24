<template>
<div class="container">
<main class="form-signin" style="margin-top: 100px;" >
  <div v-if="errMssg">
      <div v-if="getErrMssg ==='Network Error'" class="alert-user">
          <div class="alert alert-danger">
              <span class="alert-message">Check your internet connection!</span>
              <span>
                  <button type="button" class="btn-close close-alert float-right " data-bs-dismiss="modal" aria-label="Close" @click="btnClose"></button>
              </span>
          </div>
      </div>
      <div v-else class="alert-user">
          <div class="alert alert-danger">
              <span class="alert-message">Incorrect email or password.</span>
              <span>
                  <button type="button" class="btn-close close-alert float-end" data-bs-dismiss="modal" aria-label="Close" @click="btnClose"></button>
              </span>
          </div>
      </div>
  </div>
  <form @submit.prevent="onSubmit">
    <h1 class="h3 mb-3 fw-normal text-center">Sign in</h1>
    <div class="form-floating mt-4 mb-4">
      <input type="text" class="form-control" 
      id="floatingInput" placeholder="name@example.com" 
      v-model="username">
      <label for="floatingInput">Username</label>
    </div>
    <div>{{username}}</div>
    <div class="form-floating mt-3">
      <input type="password" class="form-control" id="floatingPassword"
       placeholder="Password" v-model="password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button v-if="loading" class="w-100 btn btn-lg " type="button" style="background: #142440; color: white">
      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Signing in...
   </button>
    <button v-else class="w-100 btn btn-lg" type="submit" style="background: #142440; color: white" @click="onSubmit">Sign in</button>
 
  </form>
</main>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      username : '',
      password : ''
    } 
  },
  computed : {
    ...mapGetters([
            'loading',
            'errMssg',
            'getErrMssg'
        ]),
  },
  methods: {
    btnClose(){
              this.$store.dispatch('changeStateError')
            },
    onSubmit(){
          const formData = {
              username : this.username,
              password : this.password
          }
          this.$store.dispatch('authLogin', {username : formData.username, password : formData.password})  
      },  
  },
}
</script>
<style scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    
</style>