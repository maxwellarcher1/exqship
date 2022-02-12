import { createWebHistory, createRouter } from "vue-router";
import generateLabel from "../components/Dashboard/generateLabel.vue";
import About from "../views/About.vue";
import priorityGenerator from "../components/GeneratorContainer/priorityGenerator";
import expressGenerator from "../components/GeneratorContainer/expressGenerator";
import prioritySigGenerator from "../components/GeneratorContainer/prioritySigGenerator";
import expressSigGenerator from "../components/GeneratorContainer/expressSigGenerator";
// import priority from "../components/Dashboard/priority";
// import express from "../components/Dashboard/express";
// import priorityWithSig from "../components/Dashboard/priorityWithSig";
// import expressWithSig from "../components/Dashboard/expressWithSig";
import trackingCount from "../components/Dashboard/trackingCount";
import user from "../components/Dashboard/user";
import billing from "../components/Dashboard/billing";
import Home from "../views/Home";
import Login from "../views/Login";
import uploadNumber from "../components/uploadNumberContainer/uploadNumber";
// import uploadTracking from "../components/Dashboard/uploadTracking"
import Dashboard from "../views/Dashboard.vue";
import trackingList from "../components/Dashboard/trackingList"
import priorityList from "../components/NumberListContainer/priorityList"
import expressSigList from "../components/NumberListContainer/expressSigList"
import expressList from "../components/NumberListContainer/expressList"
import prioritySigList from "../components/NumberListContainer/prioritySigList"
// import  priorityTrackingList from "../components/Dashboard/priorityTrackingList"
// import  priorityWithSigList from "../components/Dashboard/priorityWithSigList"
// import  expressTrackingList from "../components/Dashboard/expressTrackingList"
// import  expressWithSigList from "../components/Dashboard/expressWithSigList"

const routes = [
  // {
  //   path: "/priority", name: "generateLabel",  components: { default:  generateLabel}, children: [
  //       {path: '', component: priority},
  //       {path: '/priority/sig', component: priorityWithSig},
  //       {path: '/express', component: express},
  //       {path: '/express/sig', component: expressWithSig}
  //   ]
  // },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  
  // {
  //   path: "/test",
  //   name: "trackingCount",
  //   component: trackingCount
  // },
  // {
  //   path: "/user",
  //   name: "user",
  //   component: user
  // },
  // {
  //   path: "/billing",
  //   name: "billing",
  //   component: billing
  // },
  {
    path: "/dashboard", name: "Dashboard", component: Dashboard, children: [
      {path: '', name: "trackingCount", component: trackingCount},
      {path: '/user', component: user},
      {path: "/billing", name: "billing", component: billing},
      { path: "/upload", name: "uploadTracking", component: uploadNumber},
      {
        path: "/gen", name: "generateLabel",  components: { default:  generateLabel}, children: [
            {path: '', component: priorityGenerator},
            {path: '/express', component: expressGenerator},
            {path: '/priority/sig', component: prioritySigGenerator},
            {path: '/express/sig', component: expressSigGenerator}
            
            // {path: '', component: priority},
            // {path: '/express', component: express},
            // {path: '/priority/sig', component: priorityWithSig},
            // {path: '/express/sig', component: expressWithSig}
        ]
      },
      {
        path: "/number/priority", name: "trackingList",  components: { default:  trackingList}, children: [
            {path: '', component: priorityList},
            {path: '/number/priority/sig', component: prioritySigList},
            {path: '/number/express', component: expressList},
            {path: '/number/express/sig', component: expressSigList}
        ]
      },
      
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;