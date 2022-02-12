<template>
    <div>
        <appPrioritySig :key="componentKey"></appPrioritySig>
    </div>
</template>
<script>
import priorityTrackingList from "../Dashboard/priorityTrackingList.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appPrioritySig : priorityTrackingList
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
    }
    },
    
}
</script>