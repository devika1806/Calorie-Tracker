<template>
  <div>
    <BeforeLogin v-if="!isLoggedInCheck"/>
    <AfterLogin v-else />
  </div>
</template>

<script>
import BeforeLogin from '@/components/BeforeLogin.vue'
import AfterLogin from '@/components/AfterLogin.vue'
import firebase from 'firebase'

export default {
  data() {
    return {
      isLoggedInCheck: false
    }
  },
  components: {
    BeforeLogin,
    AfterLogin
  },
  created() {
    console.log("created called");
    firebase.auth().onAuthStateChanged((user) => {
      console.log("inside firebase auth");
      console.log("user : ",user);
      if (user) {
        // User is logged in
        this.isLoggedInCheck = true;
      } else {
        // User is logged out
        this.isLoggedInCheck = false;
      }
    });
  },
}
</script>

<style scoped>

</style>