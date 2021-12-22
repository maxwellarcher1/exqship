<template>
  <div class="App">
     <Layout></Layout>
     <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" style="margin-top: 5rem;">
         <router-view >

        </router-view>   
    </main> 
  </div>
</template>
<script>
import Layout from '../components/Container/Dashboard/Layout.vue'
export default {
    components: {Layout },
   
}
</script>