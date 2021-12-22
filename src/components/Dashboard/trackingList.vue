<template>
  <div>
        <div class="row">
            <div class="pb-2 mb-3 border-bottom ">
                <div class="d-flex justify-content-center">
                    <ul class="list-group list-group-horizontal">
                        <router-link to="/tracking/list"  tag="li"  class="list-group-item" exact-active-class="active" >
                                <a class="nav-link"  style="color: black" aria-current="page" href="#">Priority Tracking</a>
                        </router-link>
                        
                        <router-link to="/priority/sig" tag="li"  class="list-group-item" active-class="active" >
                                <a class="nav-link" href="#" style="color: black">Priority with Sig  Tracking</a>
                        </router-link>

                        <router-link to="/express"  tag="li"  class="list-group-item" active-class="active">
                                <a class="nav-link" href="#" style="color: black">Express Tracking</a>
                        </router-link>
                        <router-link to="/express/sig"  tag="li"  class="list-group-item" active-class="active">
                                <a class="nav-link" href="#" style="color: black">Express with Sig</a>
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
<style >
.vl {
  /* border-right: 2px solid #727272; */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  height: 500px;
}
    .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    }
    body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

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
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  /* padding-top: .75rem;
  padding-bottom: .75rem; */
  font-size: 2rem;
  color: #1DBF73;
  background-color:  #fff;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #1DBF73;
  background-color:  #fff;
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
a {
    color: #fff;
}
@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
    
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
  .vl {
  /* border-right: 2px solid #727272; */
  box-shadow: none;
  height: 300px;
}
}
</style> 