<template lang="">
    <div class="container">
        <div class="row offset-1">
            <div class="col-6">
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h4>Priority</h4>
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Numbers Left</h5>
                        <span class="badge bg-secondary d-flex justify-content-center mt-4 mb-2"><h5>{{priorityTrackingLeft}}</h5></span>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h4>Express</h4>
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Numbers Left</h5>
                        <span class="badge bg-secondary d-flex justify-content-center mt-4 mb-2"><h5>{{expressPriorityTrackingLeft}}</h5></span>
                    </div>
                </div>
            </div>
        </div> 
        <div class="row offset-1 mt-5">
            <div class="col-6">
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h4>Priority With Sig</h4>
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Numbers Left</h5>
                        <span class="badge bg-secondary d-flex justify-content-center mt-4 mb-2"><h5>{{sigPriorityTrackingLeft}}</h5></span>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header bg-primary text-white"> 
                        <h4>Express With Sig</h4>
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Numbers Left</h5>
                        <span class="badge bg-secondary d-flex justify-content-center mt-4 mb-2"><h5>{{sigExpressTrackingLeft}}</h5></span>
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
            priorityTrackingLeft: '',
            expressPriorityTrackingLeft : '',
            sigPriorityTrackingLeft: '',
            sigExpressTrackingLeft: '',
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




    }
}
</script>

 