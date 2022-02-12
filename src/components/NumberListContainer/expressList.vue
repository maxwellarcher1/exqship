<template>
    <div>
        <appExpress :key="componentKey"></appExpress>
    </div>
</template>
<script>
import expressTrackingList from "../Dashboard/expressTrackingList.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appExpress : expressTrackingList
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
     }
    },
    
}
</script>