<template>
    <div>
     <div class="container">
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
                            <input type="file" accept=".csv"  id="file" ref="file" v-on:change="handleFileUpload()" > 
                            <p style="font-size: 12px">csv only</p>
                              <div class="d-flex justify-content-center" v-if="uploading">
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
                            <input type="file" accept=".csv"  id="file" ref="expressfile" v-on:change="handleExpressFileUpload()" > 
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
                            <input type="file" accept=".csv"  id="file" ref="priorityWithSigFile" v-on:change="handleSigPriorityFileUpload()" > 
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
                            <input type="file" accept=".csv"  id="file" ref="expressWithSigFile" v-on:change="handleSigExpressPriorityFileUpload()" > 
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
    </div> 
       
    </div>
</template>
<script>
import axios from 'axios'
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
            uploading : false
        }
    },
    created(){
        let token = this.$store.getters.getToken;
        const config = {
                headers: { 'Authorization': `Token ${token}`}
            };
        axios.get(`http://127.0.0.1:8000/tracking-count/`, config)
        .then(res => {
            this.priorityTrackingLeft = res.data.pcount
        })
        .catch(err => {
            console.log(err)
        })


        // express
        axios.get(`http://127.0.0.1:8000/express-tracking-count/`, config)
        .then(res => {
            this.expressPriorityTrackingLeft = res.data.pcountexp
        })
        .catch(err => {
            console.log(err)
        })


        // priority with sig
        axios.get(`http://127.0.0.1:8000/psig-tracking-count/`, config)
        .then(res => {
            this.sigPriorityTrackingLeft = res.data.psigcount
        })
        .catch(err => {
            console.log(err)
        })
    

        // express with sig
        axios.get(`http://127.0.0.1:8000/sigexpress/tracking-count/`, config)
        .then(res => {
            this.sigExpressTrackingLeft = res.data.pcountexpsig
        })
        .catch(err => {
            console.log(err)
        })

    },
    methods : {
        forceUpdatenow(){
            this.$forceUpdate()
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
            this.uploading = true
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.file);
            console.log(formData)
            console.log('ki')
            
            axios.post(`http://127.0.0.1:8000/upload/`, formData, config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            this.uploading = false
            this.forceUpdatenow()
            
        //   const formData = {
        //       username : this.username,
        //       password : this.password
        //   }
        //   console.log(formData)
        //   this.$store.dispatch('authLogin', {username : formData.username, password : formData.password})  
      }, 
      onSubmitExpress(){
            this.uploading = true
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.expressFile);
            console.log(formData)
            console.log('ki-exp')
            
            axios.post(`http://127.0.0.1:8000/upload-express/`, formData, config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            this.uploading = false
            this.forceUpdatenow()

      }, 
       onSubmitPriorityWithSig(){
            this.uploading = true
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.priorityWithSigFile);
            console.log(formData)
            console.log('ki-exp')
            
            axios.post(`http://127.0.0.1:8000/upload-priority-sig/`, formData, config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            this.uploading = false
            this.forceUpdatenow()

      },
       onSubmitExpressPriorityWithSig(){
            this.uploading  = true
            let token = this.$store.getters.getToken;
            const config = {
                 headers: { 'Authorization': `Token ${token}`}
                };
            let formData = new FormData()
            formData.append('file', this.expressWithSigFile);
            console.log(formData)
            console.log('ki-exp')
            
            axios.post(`http://127.0.0.1:8000/upload-sig-express/`, formData, config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            this.uploading  = false
            this.forceUpdatenow()

      },  
    }
}
</script>
 