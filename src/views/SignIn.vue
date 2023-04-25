<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <div class="form-container">
      <input
        class="login-input"
        v-model="email"
        placeholder="Email"
        type="text"
      />
      <input
        class="login-input"
        v-model="password"
        placeholder="Password"
        type="password"
      />
      <button class="login-button" @click="login">Login</button>
    </div>
    <div class="signup-link-container">
      <p class="signup-text">
        Create a new account
        <router-link class="signup-link" to="/register">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user.data);
          alert("Logged in successfully");
          router.push("/Feed");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.login-title {
  margin-top: 2em;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-input {
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.login-button {
  font-size: 1.5rem;
  padding: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.login-button:hover {
  background-color: #388e3c;
}

.signup-link-container {
  margin-top: 2rem;
}

.signup-text {
  font-size: 1.2rem;
}

.signup-link {
  color: #4caf50;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.signup-link:hover {
  color: #388e3c;
}
</style>
