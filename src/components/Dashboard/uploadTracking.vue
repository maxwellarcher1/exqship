<template>
    <div>
     <div class="container">
         <div style="position: relative;">
            <div v-if="uploadingFailed === 'Request failed with status code 400'" class="alert alert-danger alert-dismissible fade show text-center custom-alert" role="alert">
                <span>No file is selected!</span>
                <button class="btn-close me-5" data-bs-dismiss="alert" aria-label="Close" @click="closeBtn"></button>
            </div>
            <div v-else-if="uploadingFailed === 'Request failed with status code 406'" class="alert alert-danger alert-dismissible fade show text-center custom-alert" role="alert" >
                <span>File unsupported! Only csv files are allowed</span>
                <button class="btn-close me-5" data-bs-dismiss="alert" aria-label="Close" @click="closeBtn"></button>
            </div>
            <div v-else-if="apiResponse" class="alert alert-danger alert-dismissible fade show text-center custom-alert" role="alert">
                <span>Uploading failed! Incompleted number found: {{apiResponse}}</span>
                <button class="btn-close me-5" data-bs-dismiss="alert" aria-label="Close" @click="closeBtn"></button>
            </div>
            <div v-else-if="existedNumber" class="alert alert-danger text-center alert-dismissible fade show custom-alert" role="alert">
                <span>Uploading failed! Tracking number "{{existedNumber}}" already exists  </span>
                <button class="btn-close me-5" data-bs-dismiss="alert" aria-label="Close" @click="closeBtn"></button>
            </div> 
            <div v-else-if="onLoadsuccessMessage === 'success'" class="alert alert-success text-center alert-dismissible fade show custom-alert" role="alert">
                <span>Successfully uploaded!</span>
                <button class="btn-close me-5" data-bs-dismiss="alert" aria-label="Close" @click="closeBtnOnSuccess()"></button>
            </div>
        </div>
     
       <div class="row offset-1">
             <div class="col-md-6">  
                 <div class="card" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                     <form action="" @submit.prevent="onSubmitPriority">
                        <div class="card-body ">
                            <h5 class="card-title">Priority Tracking</h5>
                            <div class="mt-4 mb-3">
                                <span class="badge bg-secondary d-flex justify-content-center"><h6>Total : {{priorityTrackingLeft}}</h6></span>
                            </div>
                            <input type="file" accept=".csv"  id="file" ref="file" v-on:change="handleFileUpload()" @click="closeBtn()" > 
                            <p style="font-size: 12px">csv only</p>
                              <div class="d-flex justify-content-center" v-if="uploadingPriority">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Uploading...
                                </button>
                            </div> 
                            <div v-else class="d-flex justify-content-center">
                                <button class="btn-primary " type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">Upload</button>
                            </div> 
                        </div>
                    </form>
                </div> 
            </div> 
           <div class="col-md-6">
                <div class="card" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                     <form action="" @submit.prevent="onSubmitExpress">
                        <div class="card-body ">
                            <h5 class="card-title">Priority Express Tracking</h5>
                            <div class="mt-4 mb-3">
                                <span class="badge bg-secondary d-flex justify-content-center"><h6>Total : {{expressPriorityTrackingLeft}}</h6></span>
                            </div>
                            <input type="file" accept=".csv"  id="file" ref="expressfile" v-on:change="handleExpressFileUpload()" @click="closeBtn()" > 
                            <p style="font-size: 12px">csv only</p>
                              <div class="d-flex justify-content-center" v-if="uploading">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Uploading...
                                </button>
                            </div> 
                            <div v-else class="d-flex justify-content-center">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">Upload</button>
                            </div> 
                        </div>
                    </form> 
                </div> 
            </div> 
        </div> 
        <div class="row offset-1 mt-5">
             <div class="col-md-6">  
                 <div class="card" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                     <form action="" @submit.prevent="onSubmitPriorityWithSig">
                        <div class="card-body ">
                            <h5 class="card-title">Priority With Sig Tracking</h5>
                            <div class="mt-4 mb-3">
                                <span class="badge bg-secondary d-flex justify-content-center"><h6>Total : {{sigPriorityTrackingLeft}}</h6></span>
                            </div>
                            <input type="file" accept=".csv"  id="file" ref="priorityWithSigFile" v-on:change="handleSigPriorityFileUpload()" @click="closeBtn()" > 
                            <p style="font-size: 12px">csv only</p>
                              <div class="d-flex justify-content-center" v-if="uploading">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Uploading...
                                </button>
                            </div> 
                            <div  v-else class="d-flex justify-content-center">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">Upload</button>
                            </div> 
                        </div>
                    </form>
                </div> 
            </div> 
           <div class="col-md-6">
                <div class="card" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                     <form action="" @submit.prevent="onSubmitExpressPriorityWithSig">
                        <div class="card-body ">
                            <h5 class="card-title">Express With Sig Tracking</h5>
                            <div class="mt-4 mb-3">
                                <span class="badge bg-secondary d-flex justify-content-center"><h6>Total : {{sigExpressTrackingLeft}}</h6></span>
                            </div>
                            <!-- <label for="" class="form-label fs-6">Express With Sig Tracking:</label> -->
                            <input type="file" accept=".csv"  id="file" ref="expressWithSigFile" v-on:change="handleSigExpressPriorityFileUpload()" @click="closeBtn()" > 
                            <p style="font-size: 12px">csv only</p>
                            <div class="d-flex justify-content-center" v-if="uploadingExpressSig">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Uploading...
                                </button>
                            </div> 
                            <div v-else class="d-flex justify-content-center">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">Upload</button>
                            </div> 
                        </div>
                    </form> 
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
            file : '',
            expressFile : '',
            priorityWithSigFile : '',
            expressWithSigFile : '',
            priorityTrackingLeft: '',
            expressPriorityTrackingLeft : '',
            sigPriorityTrackingLeft: '',
            sigExpressTrackingLeft: '',
            uploadingPriority : false,
            uploadingExpress : false,
            uploadingPrioritySig : false,
            uploadingExpressSig : false,
            uploadingFailed : '',
            apiResponse: '',
            onSuccess: '',
            existedNumber: ''
        }
    },
    created(){
        let token = this.$store.getters.getToken;
        const config = {
                headers: { 'Authorization': `Token ${token}`}
            };
        axios.get(`/tracking-count/`, config)
        .then(res => {
            this.priorityTrackingLeft = res.data.pcount
        })
        .catch(err => {
            console.log(err)
        })


        // express
        axios.get(`/express-tracking-count/`, config)
        .then(res => {
            this.expressPriorityTrackingLeft = res.data.pcountexp
        })
        .catch(err => {
            console.log(err)
        })


        // priority with sig
        axios.get(`/psig-tracking-count/`, config)
        .then(res => {
            this.sigPriorityTrackingLeft = res.data.psigcount
        })
        .catch(err => {
            console.log(err)
        })
    

        // express with sig
        axios.get(`/sigexpress/tracking-count/`, config)
        .then(res => {
            this.sigExpressTrackingLeft = res.data.pcountexpsig
        })
        .catch(err => {
            console.log(err)
        })

    },
    computed : {
    ...mapGetters([
             'onLoadsuccessMessage'
        ]),
  },
    methods : {
        forceRerender() {
            this.$store.dispatch('successMessageState')
            this.$parent.forceRerender();
        },
        forceUpdatenow(){
            // this.$forceUpdate()
            // this.$router.go()
            this.forceRerender()
        },
        closeBtn(){
            this.$store.dispatch('initialSuccessMessageState')
            this.apiResponse = ''
            this.uploadingFailed = ''
            this.onSuccess = ''
            this.existedNumber = ''
            
             
        },
        closeBtnOnSuccess(){
            this.$store.dispatch('initialSuccessMessageState')
        },
        handleFileUpload(){
             this.file = this.$refs.file.files[0];   
        },
        handleExpressFileUpload(){
             this.expressFile = this.$refs.expressfile.files[0];   
        },
         handleSigPriorityFileUpload(){
             this.priorityWithSigFile = this.$refs.priorityWithSigFile.files[0];   
        },
         handleSigExpressPriorityFileUpload(){
             this.expressWithSigFile = this.$refs.expressWithSigFile.files[0];   
        },
        onSubmitPriority(){
            this.uploadingPriority  = true
            this.closeBtn()
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.file);
            
            axios.post(`/upload/`, formData, config)
            .then(res => {
                console.log(res.data)
                if (res.data.incomplete_number){
                    this.apiResponse = res.data.incomplete_number
                }else if (res.data.success){
                    this.onSuccess = res.data.success
                    this.forceUpdatenow()
                }else if (res.data.existed_number){ 
                    this.existedNumber = res.data.existed_number
                }
                this.uploadingPriority = false
            })
            .catch(err => {
                console.log(err)
                this.uploadingFailed = err.message 
                this.uploadingPriority  = false
            })
            // this.uploading = false
            // this.forceUpdatenow()
            
        //   const formData = {
        //       username : this.username,
        //       password : this.password
        //   }
        //   console.log(formData)
        //   this.$store.dispatch('authLogin', {username : formData.username, password : formData.password})  
      }, 
      onSubmitExpress(){
            this.uploadingExpress = true
            this.closeBtn()
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.expressFile);
          
            axios.post(`/upload-express/`, formData, config)
            .then(res => {
                console.log(res.data)
                if (res.data.incomplete_number){
                    this.apiResponse = res.data.incomplete_number
                }else if (res.data.success){
                    this.onSuccess = res.data.success
                    this.forceUpdatenow()
                }else if (res.data.existed_number){ 
                    this.existedNumber = res.data.existed_number
                }
                this.uploadingExpress  = false
            })
            .catch(err => {
                console.log(err)
                this.uploadingFailed = err.message 
                this.uploadingExpress  = false
            })
            // this.uploading = false
            // this.forceUpdatenow()

      }, 
       onSubmitPriorityWithSig(){
            this.uploadingPrioritySig  = true
            this.closeBtn()
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.priorityWithSigFile);
            
            axios.post(`/upload-priority-sig/`, formData, config)
            .then(res => {
                console.log(res.data)
                if (res.data.incomplete_number){
                    this.apiResponse = res.data.incomplete_number
                }else if (res.data.success){
                    this.onSuccess = res.data.success
                    this.forceUpdatenow()
                }else if (res.data.existed_number){ 
                    this.existedNumber = res.data.existed_number
                }
                this.uploadingPrioritySig = false
            })
            .catch(err => {
                console.log(err)
                this.uploadingFailed = err.message
                this.uploadingPrioritySig = false 

            })
            // this.uploading = false
            // this.forceUpdatenow()

      },
       onSubmitExpressPriorityWithSig(){
            this.uploadingExpressSig  = true
            this.closeBtn()
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.expressWithSigFile);
            
            axios.post(`/upload-sig-express/`, formData, config)
            .then(res => {
                if (res.data.incomplete_number){
                    this.apiResponse = res.data.incomplete_number
                }else if (res.data.success){
                    this.forceUpdatenow()
                    this.onSuccess = res.data.success
                }else if (res.data.existed_number){ 
                    this.existedNumber = res.data.existed_number
                }
                this.uploadingExpressSig = false
            })
            .catch(err => { 
                console.log(err)
                this.uploadingFailed = err.message 
                this.uploadingExpressSig  = false
            })
            
            // this.forceUpdatenow()

      },  
    }
}
</script>
<style scoped>
.custom-alert {
    position: fixed; 
    top: 9%; 
    left: 0%; 
    right: 0%; 
    width: 100%;  
    z-index: 1;
}
</style>
 