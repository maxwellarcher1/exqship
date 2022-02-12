<template>
    <div>
        <appExpressGenerator :key="componentKey"></appExpressGenerator>
    </div>
</template>
<script>
import express from "../Dashboard/express.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appExpressGenerator : express
    },
    methods: {
        forceRerender(){
            this.componentKey += 1;
        }
    },
    
}
</script>