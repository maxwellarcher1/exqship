<template>
    <div>
        <header class="navbar navbar-light fixed-top bg-light flex-md-nowrap p-0 shadow">
        <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-light">
            <span style="color: green"><strong>ExqShip</strong> </span>
        </span>
        
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
         </button>

        <!-- <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
     -->
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <div class="navbar-nav"> 
            <div class="nav-item text-nowrap" style="color: red">
              <!-- <a  style="color: red" class=" btn btn-info nav-link px-3" href="#" @click="logOut">Sign out</a> -->
             <a class="nav-link px-3" href="#" @click="logOut">Log Out</a>
            </div> 
         </div>
      </header>
      
  <div class="container-fluid">
    <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse show ">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <router-link :to="{name : 'Home'}"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">Home</span>
                    </a>
              </router-link>
            <router-link to="/dashboard"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">Dashboard</span>
                    </a>
            </router-link>
             <router-link v-if="checkUserRole === 'admin'" to="/user"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">User</span>
                    </a>
              </router-link> 
             <router-link to="/gen"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">Generate Label</span>
                    </a>
              </router-link>
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
             <router-link to="/upload"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">Upload Tracking</span>
                    </a>
              </router-link>
              <router-link to="/number/priority"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">Tracking</span>
                    </a>
              </router-link>
            <router-link to="/billing"  tag="li"  class="nav-item" >
                    <a class="nav-link" href="#">
                      <span data-feather="home">Billing</span>
                    </a>
              </router-link>
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
        </nav>
      </div>
    </div>
</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed : {
    ...mapGetters([
             'checkUserRole'
        ]),
    },
    methods: {
    logOut() {
      this.$store.dispatch("authLogOut");
    },
  },
  }
 
</script>

<style>
a {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>