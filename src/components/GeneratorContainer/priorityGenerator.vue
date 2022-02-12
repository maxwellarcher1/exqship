<template>
    <div>
        <appPriorityGenerator :key="componentKey"></appPriorityGenerator>
    </div>
</template>
<script>
import priority from "../Dashboard/priority.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appPriorityGenerator : priority
    },
    methods: {
        forceRerender(){
            this.componentKey += 1;
        }
    },
    
}
</script>