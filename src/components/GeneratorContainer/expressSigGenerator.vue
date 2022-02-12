<template>
    <div>
        <appExpressSigGenerator :key="componentKey"></appExpressSigGenerator>
    </div>
</template>
<script>
import expressWithSig from "../Dashboard/expressWithSig.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appExpressSigGenerator : expressWithSig
    },
    methods: {
        forceRerender(){
            this.componentKey += 1;
        }
    },
    
}
</script>