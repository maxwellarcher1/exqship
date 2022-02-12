<template>
    <div>
        <appExpressSig :key="componentKey"></appExpressSig>
    </div>
</template>
<script>
import expressWithSigList from "../Dashboard/expressWithSigList.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        appExpressSig : expressWithSigList
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
    }
    },
    
}
</script>