<template>
    <div class="container">
        <div class="row">
            <div class="col-10 offset-1">  
                <div v-if="selectAllNumbers" class="alert alert-success text-center" role="alert">
                      All priority numbers are selected!
                </div>             
               <form action="">
                   <div class="mb-1">
                       <div class="row">
                        <div class="dropdown col-4 col-auto mr-auto">
                            <span class="me-5" >
                                <span class="bobo" >
                                 <input class="" type="checkbox" value="" @click="selectAndUnselectAll()"  id="select-all" >
                                </span>
                                <!-- <button class="btn btn-transparent dropdown-toggle me-4" style="padding: 0.355rem 0.15rem 0.2rem;"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">   
                                </button>
                                <ul class="dropdown-menu" style="min-width: 0; font-size: 12px" aria-labelledby="dropdownMenuButton1">
                                    <li style="width: 5px"><a class="dropdown-item" href="#" @click="selectAll()">All</a></li>
                                    <li><a class="dropdown-item" href="#" @click="unSelectAll()">None</a></li>             
                                </ul> -->
                            </span>
                            <button type="button" class="btn ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
                                </svg>
                            </button>
                            <button type="button" class="btn" @click="deleteCheckedTracking" :disabled ="disableButton">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                            </button>
                           
                            
                         </div>
                          <div class="col-4 col-auto mt-2">
                                <span v-if="currentPageNumber === 1 "> Showing {{currentPageNumber }} - {{allUser.length}}  of {{count }}</span>
                                <span v-else-if="lastPageNumber === currentPageNumber"> Showing {{count - allUser.length }} - {{ count }}  of {{count }}</span>
                                <span v-else> Showing {{ (currentPageNumber -1) * 50 }} - {{allUser.length * currentPageNumber }}  of {{count }}</span>
                            </div>
                         <div class="col-4 col-auto ">
                         <div class="dropdown ">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter by user
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        </div>
                         </div>
                    </div>

                 <div v-if="showDeleteAllOption" class="row mb-2">
                     <a class="col-12 d-flex justify-content-center " @click="selectAllPriorityNumbers">
                     Select all {{ count }} numbers
                     </a>
                </div> 
                <!-- data-bs-toggle="modal" data-bs-target="#exampleModal"    -->
                <div>  
                <ol class="list-group " 
                    v-for="(n, index) in allUser" :key="index">
                    <li class="list-group-item d-flex justify-content-between align-items-start ">
                        <div class="form-check">
                        <input class="form-check-input number" type="checkbox" @click="checkClick(n.express_priority)" 
                            :value="n.express_priority" 
                            :name="n.express_priority" 
                            v-model="selectedTracking"
                            title="unselected" id=""
                            >
                        </div>
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{{n.express_priority}}</div>
                        </div>
                        <!-- <button class="btn btn-primary btn-sm me-2">Edit</button>
                        <button class="btn btn-danger btn-sm">Delete</button> -->
                    </li>
                </ol>
                </div> 
                </form>
                <!-- pagination -->

                <div class="row mt-3 ">
                <div class="col-12 d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <span v-if="previousPage !== null"> 
                            <li class="page-item" type="button">
                                <a class="btn page-link" aria-label="Previous"  @click="previousPages()">
                                    <span aria-hidden="true">&laquo;</span>
                                </a> 
                            </li>
                        </span>
                        <span v-if="(lastPageNumber -3 < currentPageNumber) && (currentPageNumber >= 3)">
                            <li class="page-item" type="button"><a class="btn page-link" >...</a></li>
                        </span>
                        <!-- <span v-if="currentPageNumber == lastPageNumber">
                                <li class="page-item " type="button"><a class="btn page-link" >{{currentPageNumber -2}}</a></li>
                        </span> -->
                        <span v-if="currentPageNumber !== 1 ">
                                <li class="page-item " type="button"><a class="btn page-link"  @click="goToNextPage(currentPageNumber - 1)">{{currentPageNumber -1}}</a></li>
                        </span>
                        <span>
                            <span v-if="!(currentPageNumber === lastPageNumber) ">
                                <li class="page-item " type="button"><a class="btn page-link bg-primary" style="color: #fff">{{currentPageNumber}}</a></li>
                           </span>
                           <!-- <span v-else>
                                <li class="page-item"><a class="page-link c" href="#" @click="goToNextPage(currentPageNumber -1)">{{currentPageNumber -1}}</a></li>
                           </span> -->
                        </span>
                        <span>
                            <span  v-if="!(currentPageNumber === lastPageNumber)">
                                <li class="page-item" type="button"><a class="btn page-link" @click="goToNextPage(currentPageNumber +1)">{{currentPageNumber +1}}</a></li>
                            </span>
                            <span  v-else>
                                <li class="page-item" type="button"><a class="btn page-link bg-primary" style="color: #fff" @click="goToNextPage(currentPageNumber)">{{currentPageNumber}}</a></li>
                            </span>
                        </span> 
                       <span v-if="(currentPageNumber < lastPageNumber -2)">
                            <li class="page-item" type="button"><a class="btn page-link" >...</a></li>
                        </span> 
                        <span v-if="!(lastPageNumber -2 < currentPageNumber)">
                            <li class="page-item" type="button"><a class="btn page-link" @click="goToNextPage(lastPageNumber)">{{lastPageNumber}}</a></li> 
                        </span> 
                        <li class="page-item" type="button">
                         <span v-if="nextPage !== null || (currentPageNumber === lastPageNumber -1)"> 
                            <a class="btn page-link" aria-label="Next" @click="nextPages()">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </span>  
                        </li>
                    </ul>
                    </nav>
                </div>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-body text-center">
                           Are you sure you want to delete all numbers?
                        </div>
                        <div class="text-center mb-3">
                            <button type="button" class="btn btn-primary me-2">Yes</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">No</button>
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
import axios from 'axios'
export default {
    data(){
        return {
            allUser: [],
            nextPage : '',
            previousPage : '',
            currentPageNumber : '',
            lastPageNumber : '',
            selectedTracking : [],
            count: '',
            showDeleteAllOption : false,
            showingTrackingNumber: 1,
            showingTotalTrackingNumber: '',
            // disableButton: true,
            selectAllNumbers: false
        }
    },
    created(){
        let token = this.$store.getters.getToken;
        const config = {
            headers: { 'Authorization': `Token ${token}`}
            };
        axios.get(`/express/set/`, config)
        .then(res => {
            console.log(res.data)
            this.allUser = res.data.results
            this.nextPage = res.data.next
            this.count = res.data.count
            this.previousPage = res.data.previous
            this.currentPageNumber = res.data.page_number   
            this.lastPageNumber = res.data.total_pages
        })
        .catch(err => {
            console.log(err)
        })
    },
    methods: {
        forceRerender() {
            this.$parent.forceRerender();
        },
        forceUpdatenow(){
            this.$forceUpdate()
        },
        selectAllPriorityNumbers(){
            this.selectAllNumbers = true
            this.showDeleteAllOption = false
        },
        deleteCheckedTracking(){
            if(this.selectAllNumbers === true){
                axios.delete(`/delete/all/express`)
                    .then(res => {
                        console.log(res.data)
                        this.forceRerender()
                    })
                    .catch(err => {
                        console.log(err)
                    })               
            }else {
                var arr = this.selectedTracking
                if (arr.length === 0 ) {
                    alert('select a number you want to delete')
                }else {
                    axios.delete(`/delete/express/number/${arr}`)
                    .then(res => {
                        console.log(res.data)
                        this.forceRerender()
                    })
                    .catch(err => {
                        console.log(err)
                    })
                } 
            } 
        },
        checkClick(n){
            let allChecked = document.getElementById('select-all')
            allChecked.checked = false
            let v = n
            let checkedItem = document.getElementsByClassName('number')
            for (let index = 0; index < checkedItem.length; index++){
                 if (checkedItem[index].name === v){
                     if(checkedItem[index].title === 'unselected'){
                         checkedItem[index].title = 'unselected'
                     }else if(checkedItem[index].title === 'selected'){
                         checkedItem[index].title = 'selected'
                     }       
                 }  
            }
        },
        selectAndUnselectAll(){
            // console.log(this.$refs['number'])
            //  this.selectedTracking = []
            // if (!this.allSelected) {
            //     for (let cd in this.allUser) {
            //         console.log(this.allUser[cd].priority)
            //         this.selectedTracking.push(this.allUser[cd].priority);
            //     }
            // }else {
            //     this.selectedTracking = []
            // }
            this.selectedTracking = []
            let checkedItem = document.getElementsByClassName('number')
            let allChecked = document.getElementById('select-all')

            for (let index = 0; index < checkedItem.length; index++) {
               if (checkedItem[index].title === 'unselected'){
                   checkedItem[index].checked = true
                   checkedItem[index].title = 'selected'
                   this.selectedTracking.push(checkedItem[index].value)
                   allChecked.checked = true
                   this.showDeleteAllOption = true
               
    
               }else if (checkedItem[index].title === 'selected'){
                   checkedItem[index].checked = false
                   checkedItem[index].title = 'unselected'
                   this.selectedTracking = []
                   allChecked.checked = false
                   this.selectAllNumbers = false
                   this.showDeleteAllOption = false
               }
            }       
        },
        selectAll(){
            let checkedItem = document.getElementsByClassName('number')
            let allChecked = document.getElementById('select-all')
            for (let index = 0; index < checkedItem.length; index++) {
                   checkedItem[index].checked = true
                   console.log(checkedItem[index])
                   allChecked.checked = true      
             }
        },
        unSelectAll(){
            let checkedItem = document.getElementsByClassName('number')
             let allChecked = document.getElementById('select-all')
            for (let index = 0; index < checkedItem.length; index++) {
                   checkedItem[index].checked = false
                   allChecked.checked = false    
             }
        },
        goToNextPage(page){
            let allChecked = document.getElementById('select-all')
            allChecked.checked = false

            axios.get(`/priority/set/?page=${page}`)
            .then(res => {
                console.log(res.data)
                this.allUser = res.data.results
                this.nextPage = res.data.next 
                this.previousPage = res.data.previous
                this.currentPageNumber = res.data.page_number   
                this.lastPageNumber = res.data.total_pages 
                this.count = res.data.count    
                this.selectedTracking = []
                this.showDeleteAllOption = false 
            })
            .catch(err => {
                console.log(err)
                this.selectedTracking = []
                this.showDeleteAllOption = false 
            })
        },
        nextPages(){
            let allChecked = document.getElementById('select-all')
            allChecked.checked = false

            let token = this.$store.getters.getToken;
            const config = {
            headers: { 'Authorization': `Token ${token}`}
            };

            let pageUrl = this.nextPage
            axios.get(`${pageUrl}`, config)
            .then(res => {
                console.log(res.data)
                this.allUser = res.data.results
                this.nextPage = res.data.next 
                this.previousPage = res.data.previous
                this.currentPageNumber = res.data.page_number   
                this.lastPageNumber = res.data.total_pages  
                this.count = res.data.count 
                this.selectedTracking = []
                this.showDeleteAllOption = false 
            })
            .catch(err => {
                console.log(err)
                this.selectedTracking = []
                this.showDeleteAllOption = false 
            })
        },
         previousPages(){
            let allChecked = document.getElementById('select-all')
            allChecked.checked = false

            let token = this.$store.getters.getToken;
            const config = {
                headers: { 'Authorization': `Token ${token}`}
            };

            let pageUrl = this.previousPage
            axios.get(`${pageUrl}`, config)
            .then(res => {
                console.log(res.data)
                this.allUser = res.data.results
                this.nextPage = res.data.next 
                this.previousPage = res.data.previous  
                this.currentPageNumber = res.data.page_number 
                this.lastPageNumber = res.data.total_pages   
                this.count = res.data.count   
                this.selectedTracking = []
                this.showDeleteAllOption = false   
            })
            .catch(err => {
                console.log(err)
                this.selectedTracking = []
                this.showDeleteAllOption = false 
            })
        }
    },

}
</script>
<style scoped>
a{
    cursor : pointer;
    color : blue
}
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
.page-link {
    background-color: #fff;
    text-decoration: none;
    
}
.bobo {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
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
    padding: 0.575rem 0.0rem 0.275rem 0.988rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
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