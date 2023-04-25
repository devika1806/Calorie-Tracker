import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIgDlCaotnoNsJ2y_XhZ2-lI25mpj0iiI",
  authDomain: "calorie-tracker-1bf51.firebaseapp.com",
  projectId: "calorie-tracker-1bf51",
  storageBucket: "calorie-tracker-1bf51.appspot.com",
  messagingSenderId: "332335328000",
  appId: "1:332335328000:web:0a620b06a6b9d6476061e5"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
