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
                                <span class="badge bg-secondary d-flex justify-content-center"><h5>200</h5></span>
                            </div>
                            <label for="" class="form-label fs-6">Upload Tracking:</label>
                            <input type="file" accept=".csv"  id="file" ref="file" v-on:change="handleFileUpload()" > 
                            <div class="d-flex justify-content-center">
                                <button class="btn-primary mt-3 " type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">Submit</button>
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
                                <span class="badge bg-secondary d-flex justify-content-center"><h5>200</h5></span>
                            </div>
                            <label for="" class="form-label fs-6">Upload Express Tracking:</label>
                            <input type="file" accept=".csv"  id="file" ref="expressfile" v-on:change="handleExpressFileUpload()" > 
                            <div class="d-flex justify-content-center">
                                <button class="btn-primary mt-3 " type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">Submit</button>
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
            expressFile : ''
        }
    },
    methods : {
        handleFileUpload(){
             this.file = this.$refs.file.files[0];   
        },
        handleExpressFileUpload(){
             this.expressFile = this.$refs.expressfile.files[0];   
        },
        onSubmitPriority(){
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
            
        //   const formData = {
        //       username : this.username,
        //       password : this.password
        //   }
        //   console.log(formData)
        //   this.$store.dispatch('authLogin', {username : formData.username, password : formData.password})  
      }, 
      onSubmitExpress(){
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

      }, 
    }
}
</script>
 