<template>
    <div class="container">
        <div class="row">
            <div class="col-10 offset-1">               
               <form action="">
                   <div class="mb-1">
                        <div class="dropdown">
                            <span class="somthin bg-light">
                                <input class="" type="checkbox" value=""  @click="selectAll()" id="flexCheckDefault" >
                                <button class="btn btn-transparent dropdown-toggle me-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <!-- <input class="" type="checkbox" value="" id="flexCheckDefault"> -->
                                </button>
                                <ul class="dropdown-menu" style="min-width: 0; font-size: 12px" aria-labelledby="dropdownMenuButton1">
                                    <li style="width: 5px"><a class="dropdown-item" href="#">All</a></li>
                                    <li><a class="dropdown-item" href="#">None</a></li>             
                                </ul>
                            </span>
                        <button type="button" class="btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
                            </svg>
                        </button>
                        <button type="button" class="btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                            </svg>
                        </button>
                         </div>
                    </div>
                <ol class="list-group" 
                    v-for="(n, index) in allUser" :key="index">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="form-check">
                        <input class="form-check-input number" type="checkbox" @click="checkClick()" value="" :name="n.username" :title="checkStatus" id="number" ref="number">
                        </div>
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{{n.username}}</div>
                            {{ n.email }}
                        </div>
                        <!-- <button class="btn btn-primary btn-sm me-2">Edit</button>
                        <button class="btn btn-danger btn-sm">Delete</button> -->
                    </li>
                </ol>
                </form>
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
            checkStatus : ''
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
    methods: {
        checkClick(){
            this.checkStatus = 'selected' 
        },
        selectAll(){
            // console.log(this.$refs['number'])
            let p = document.getElementsByClassName('number')
            for (let index = 0; index < p.length; index++) {
                console.log(p[index])
               if (p[index].title === 'selected' || p[index].checked === false){
                   p[index].checked = true
                   
               }else if (p[index].title === 'selected' || p[index].checked === true){
                   p[index].checked = false

               }
            
            }
        }
    },
}
</script>
<style scoped>
.btn-transparent:focus {
    background-color: none; 
    border-color: none;
    box-shadow:  none;
   
}
.somthin:hover {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
}

.somthin {
    display: inline-block;
    font-weight: 400;
    line-height: 1.0;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>