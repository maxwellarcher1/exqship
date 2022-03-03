<template>
  <div>
    <!-- <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
        <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3">
            <span style="color: green"><strong>ExqShip</strong> </span>
        </span>
        
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" style="background: black"></span>
        </button>
    
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
       <div class="navbar-nav">
            <div class="nav-item text-nowrap" style="color: red">
              <a  style="color: red" class=" btn btn-info nav-link px-3" href="#" @click="logOut">Sign out</a>
            </div>
        </div> 
     </header> -->

    <!-- <div class="container-fluid"> -->
    <!-- <div class="row"> -->
        <!-- <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <router-link to="/"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">Home</span>
                    </a>
              </router-link>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                Dashboard
                </a>
            </li>
             <router-link to="/user"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">User</span>
                    </a>
              </router-link>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="users"></span>
                Customers
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Integrations
                </a>
            </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Tracking</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul class="nav flex-column mb-2">
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Upload Tracking
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Billing
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
                </a>
            </li>
            </ul>
        </div>
        </nav> -->
        <!-- <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"> -->
        <div class="row">
            <div class="pb-2 mb-3 border-bottom ">
                <div class="d-flex justify-content-center">
                    <ul class="list-group list-group-horizontal">
                        <router-link to="/gen"  tag="li"  class="list-group-item" exact-active-class="active" style="z-index : 1" >
                                <a class="nav-link"  style="color: black" aria-current="page" href="#" >Priority</a>
                        </router-link>
                        
                        <router-link to="/priority/sig" tag="li"  class="list-group-item" active-class="active" style="z-index : 1">
                                <a class="nav-link" href="#" style="color: black">Priority with Sig </a>
                        </router-link>

                        <router-link to="/express"  tag="li"  class="list-group-item" active-class="active" style="z-index : 1">
                                <a class="nav-link" href="#" style="color: black">Express</a>
                        </router-link>
                        <router-link to="/express/sig"  tag="li"  class="list-group-item" active-class="active" style="z-index : 1">
                                <a class="nav-link" href="#" style="color: black">Express with Sig</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
        <router-view ></router-view>   
        <!-- </main> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
// import priority from '../components/priority.vue'
export default {
    name: "Home",
    // components : {
    //      'app-priority' : priority
    // }
    methods: {
        logOut(){
        console.log('hi')
        this.$store.dispatch("authLogOut");
      },
      log(){
        console.log('hello')
      }
    }
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