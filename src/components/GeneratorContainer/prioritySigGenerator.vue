<template>
    <div>
        <appPrioritySigGenerator :key="componentKey"></appPrioritySigGenerator>
    </div>
</template>
<script>
import priorityWithSig from "../Dashboard/priorityWithSig.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appPrioritySigGenerator : priorityWithSig
    },
    methods: {
        forceRerender(){
            this.componentKey += 1;
        }
    },
    
}
</script>