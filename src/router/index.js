import { createWebHistory, createRouter } from "vue-router";
import generateLabel from "../components/Dashboard/generateLabel.vue";
import About from "../views/About.vue";
import priority from "../components/Dashboard/priority";
import priorityWithSig from "../components/Dashboard/priorityWithSig";
import trackingCount from "../components/Dashboard/trackingCount";
import user from "../components/Dashboard/user";
import express from "../components/Dashboard/express";
import expressWithSig from "../components/Dashboard/expressWithSig";
import billing from "../components/Dashboard/billing";
import Home from "../views/Home";
import Login from "../views/Login";
import uploadTracking from "../components/Dashboard/uploadTracking"
import Dashboard from "../views/Dashboard.vue";
import trackingList from "../components/Dashboard/trackingList"
import  priorityTrackingList from "../components/Dashboard/priorityTrackingList"
import  priorityWithSigList from "../components/Dashboard/priorityWithSigList"
import  expressTrackingList from "../components/Dashboard/expressTrackingList"
import  expressWithSigList from "../components/Dashboard/expressWithSigList"

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
      { path: "/upload", name: "uploadTracking", component: uploadTracking},
      {
        path: "/gen", name: "generateLabel",  components: { default:  generateLabel}, children: [
            {path: '', component: priority},
            {path: '/priority/sig', component: priorityWithSig},
            {path: '/express', component: express},
            {path: '/express/sig', component: expressWithSig}
        ]
      },
      {
        path: "/number/priority", name: "trackingList",  components: { default:  trackingList}, children: [
            {path: '', component: priorityTrackingList},
            {path: '/number/priority/sig', component: priorityWithSigList},
            {path: '/number/express', component: expressTrackingList},
            {path: '/number/express/sig', component: expressWithSigList}
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