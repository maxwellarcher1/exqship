<template>
    <div>
        <appUploadNumbers :key="componentKey"></appUploadNumbers>
    </div>
</template>
<script>
import uploadTracking from "../Dashboard/uploadTracking.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appUploadNumbers : uploadTracking
    },
    methods: {
        forceRerender(){
            this.componentKey += 1;
        }
    },
    
}
</script>