<template>
<div>
<header>
  <div class="container-fluid fixed-top">
    <div class="row" style="background: #142440">
        <div class="navbar navbar-expand-md  navbar-dark me-5 ms-5" style="height: 50px">
            <div class="col-10">
              <span style="color: white;">
                  <i class="fa fa-clock-o" aria-hidden="true" style="color: blue;"></i>Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed
              </span>
            </div>
            <div class="col-md-2 d-none d-sm-none d-md-block me-2" style="color:">
              <ul class="nav"> 
                <router-link v-if="!isAuthenticated" to="/login"  tag="li"  class="nav-item" >
                      <button class="btn btn-primary " >
                        <a class="nav-link header-btn" href="#" style="color: white; ">Log in</a>
                      </button>
                </router-link>
                <div v-else class="dropdown">
                  <button class="btn btn-secondary  dropdown-toggle header-btn" style="width: 90px"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class=" ">
                      <img :src="require('../assets/bx_bx-user-circle.png')" class="user-circle" alt="user circle"/>
                    </span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <router-link to="/dashboard" class="dropdown-item" tag="li" style="color: black; text-decoration: none">
                      Dashboard 
                    </router-link>
                    
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                     <li ><a  class="dropdown-item" href="#" @click="logOut" style="text-decoration: none">Sign Out </a></li>
                  </ul>
                </div>
              </ul>
          </div>
        </div>
    </div> 
    <nav class="navbar navbar-expand-md navbar-dark row " style="background: white;">
        <div class="container">
        <button class="navbar-toggler" type="button" style="color: black; background: #142440; margin-top: 10px" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <span class="navbar-toggler" style="margin: 0 auto;">
          <img :src="require('../assets/logo-2.png')"/>
        </span>
     
        <div class="collapse navbar-collapse " id="navbarCollapse" style="margin: 0 50px">
            <div class="col-4">
              <span class="d-none d-md-block"> <img :src="require('../assets/logo-2.png')"/></span>
            </div>
            <div class="col-8 my-nav"  style="color: black;">
              <div class="">
                <span class="p-2 custom-nav-exqship">
                    Home
                </span>
                <span class="p-2 custom-nav-exqship" style="color: black;">
                    About
                </span>
                <span class="p-2 custom-nav-exqship" style="color: black;">
                    Features
                </span>
                <span class="p-2 custom-nav-exqship" style="color: black;">
                    Testimonials
                </span>
                <span class="p-2 custom-nav-exqship" style="color: black;">
                     FAQ
                </span>
                 <span class="p-2 custom-nav-exqship" style="color: black;">
                     Contact Us
                </span>
            </div>
        </div>
        </div>
        </div>
    </nav>
  </div>
</header>  
<main>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <!-- <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button> -->
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
         <img :src="require('../assets/2.jpg')"/>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1 style="text-transform : capitalize;">Logistics Solution at its best</h1>
            <p>Our service is a top-notch. Patronize us today, and you will be glad you did.</p>
            <p><a class="btn btn-lg btn-primary" style="text-transform: capitalize; text-decoration: none " href="#">Get started</a></p>
          </div>
        </div>
      </div>
      <!-- <div class="carousel-item">
        <img :src="require('../assets/2.jpg')" />
        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div> -->
      <!-- <div class="carousel-item">
         <img :src="require('../assets/3.jpg')"/>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div> -->
    </div>
    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> -->
  </div>


  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <h2>Safe Deliveries</h2>
        <p>Your goods are safe with us. All our vehicle are insured, so you goods are safe with us.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
         <!-- <img :src="require('../assets/air.jpg')" /> -->
        <h2>Prompt Deliveries</h2>
        <p>We value all of our customers, so we make sure your goods are delivered on or before the stipulated time.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
         <!-- <img :src="require('../assets/air.jpg')" /> -->
        <h2>Low Charges</h2>
        <p>With our 30% discount, you can save more and move your goods at at small fee.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Sweet Experience.</h2>
        <p class="lead">Doing business with us will give a wonderfull experince. Our workers are friendly and are always ready to provide you with a Solution.
          Our customer care operates 24 hours every day. 
        </p>
      </div>
      <div class="col-md-5">
         <img :src="require('../assets/doorstep.png')" />
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Tracking System</h2>
        <p class="lead">You can keep a track on your goods to know its status. Our service is very transparent. </p>
      </div>
      <div class="col-md-5 order-md-1">
         <img :src="require('../assets/doorstep.png')" />
      </div>
       <!-- <button @click="testing()">Test now</button>
       <img :src="imgsrc" alt="" srcset="">
        <img :src="imgsrc" alt="" id="me"> -->
    </div>
    <!-- <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div class="col-md-5">
         <img :src="require('../assets/doorstep.png')" />
      </div>
    </div> -->

    <hr class="featurette-divider">

    <!-- /END THE FEATURETTES -->

  </div><!-- /.container -->


  <!-- FOOTER -->
  <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
</main>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  computed : {
    data(){
      return {
        imgsrc : ''
      }

    },
    ...mapGetters([
            'isAuthenticated',    
        ]),
  },
  methods: {
    logOut() {
      this.$store.dispatch("authLogOut");
    },
    testing() {
       console.log('hi')
       
       axios.get('http://free-barcode.com/barcode.asp?bc1=123456789999&bc2=10&bc3=3.6&bc4=1.3&bc5=1&bc6=1&bc7=Arial&bc8=15&bc9=1',)
       .then((res) => {
         console.log(res)
          this.imgsrc = res.config.url
         
       }).catch((err) => {
         console.log(err)
         
       });
    }
  },
}
</script>
 <style scoped>
 .header-btn{
   width: 100%;
   padding: 0.0001rem;
 }
 .user-circle {
  width: 35px;
}
 a {
     text-decoration: none;
 }
  
.nav-link {
  text-decoration: none;
}
/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -.05rem;
}


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

@media screen and (max-width: 748px) {
  
    .custom-nav-exqship {
      display: block;
    }

    .my-nav {
      margin-left: -40px;
    }

}
</style>
