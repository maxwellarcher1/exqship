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
                        <button class="btn btn-primary btn-sm me-2">Edit</button>
                        <button class="btn btn-danger btn-sm">Delete</button>
                    </li>
                </ol>
            </div>
            <div class="col-4 d-flex justify-content-center mt-5 mb-5">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Create User
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <span><h5 class="modal-title" id="exampleModalLabel">User Create Form</h5></span>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3">
                            <div class="col-6">
                                <label for="validationServer01" class="form-label">First name</label>
                                <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="validationServer02" class="form-label">Last name</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-12">
                              <div class="">
                                <label for="validationServerUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend3">@</span>
                                <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <button class="btn btn-primary" type="submit">Submit form</button>
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
export default {
    data(){
        return {
            allUser: [],
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
    }
}
</script>