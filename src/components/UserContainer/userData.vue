<template>
    <div>
        <userDetails :key="componentKey"></userDetails>
    </div>
</template>
<script>
import user from "../Dashboard/user.vue"
export default {
    data(){
        return {
            componentKey: 0,
        }
    },
    components : {
        userDetails : user
    },
    methods: {
        forceRerender(){
            this.componentKey += 1;
        }
    },
    
}
</script>
