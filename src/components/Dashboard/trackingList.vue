<template>
  <div>
        <div class="row">
            <div class="pb-2 mb-3 border-bottom ">
                <div class="d-flex justify-content-center">
                    <ul class="list-group list-group-horizontal" >
                        <router-link to="/number/priority"  tag="li"  class="number-nav" exact-active-class="active"  >
                                <a class="nav-link" aria-current="page" href="#">Priority</a>
                        </router-link>
                        
                        <router-link to="/number/priority/sig" tag="li"  class="number-nav" active-class="active">
                                <a class="nav-link" href="#" >Priority With Sig</a>
                        </router-link>

                        <router-link to="/number/express"  tag="li"  class="number-nav" active-class="active">
                                <a class="nav-link" href="#" >Express</a>
                        </router-link>
                        
                        <router-link to="/number/express/sig"  tag="li"  class="number-nav" active-class="active">
                                <a class="nav-link" href="#">Express With Sig</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
        <router-view ></router-view>   
  </div>
</template>
<script>
// import priority from '../components/priority.vue'
export default {
    name: "Home",
    // components : {
    //      'app-priority' : priority
    // }
  
}
</script>
<style scoped>
  
.active{
  background: #fff;
  color: #000;
  border-bottom : 5px solid red;
}
 
a {
  text-decoration: none;
  color: #000
}

 

.nav-link {
  color: black;
  font-size: 15px;
}

/* .number-nav {
  width: 100%
}
  */
 
/* 
.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
  
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
} */
 
/*
 * Navbar
 */
 
 
 
</style> 