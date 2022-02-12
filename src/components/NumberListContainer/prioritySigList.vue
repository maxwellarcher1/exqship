<template>
    <div>
        <appPrioritySig :key="componentKey"></appPrioritySig>
    </div>
</template>
<script>
import priorityWithSigList from "../Dashboard/priorityWithSigList.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appPrioritySig : priorityWithSigList
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
    }
    },
    
}
</script>