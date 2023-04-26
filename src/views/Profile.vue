<template>
    <div class="profile-container">
      <h1>Create Profile</h1>
      <!-- <form> -->
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="profile.name">
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" v-model="profile.age">
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select id="gender" v-model="profile.gender">
            <option value="">--Please select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="height">Height (cm):</label>
          <input type="number" id="height" v-model="profile.height">
        </div>
        <div class="form-group">
          <label for="weight">Weight (kg):</label>
          <input type="number" id="weight" v-model="profile.weight">
        </div>
        <div class="form-group">
          <label for="activity-level">Activity Level:</label>
          <select id="activity-level" v-model="profile.activityLevel">
            <option value="">--Please select--</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly-active">Lightly Active</option>
            <option value="moderately-active">Moderately Active</option>
            <option value="very-active">Very Active</option>
            <option value="extra-active">Extra Active</option>
          </select>
        </div>
        <button class="btn" @click="createProfile">Save Changes</button>
      <!-- </form> -->
    </div>
  </template>
  
  <script>
  // import firebase from 'firebase'
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";

  export default {
    data() {
      return {
        profile: {
          name: "",
          age: null,
          gender: "",
          height: null,
          weight: null,
          activityLevel: "",
          uid: null,
        }
      };
    },
    methods: {
      createProfile() {

        fetch('https://calorie-tracker-1bf51-default-rtdb.asia-southeast1.firebasedatabase.app/users/'+this.uid+'/.json', {
          method: 'POST',
          headers : {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           uid: this.profile
        })  
        });

        this.$router.push("/");

      },
    },
    created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push("/");
      }
      else{
        this.uid = user.uid;
        console.log(this.uid);

        fetch('https://calorie-tracker-1bf51-default-rtdb.asia-southeast1.firebasedatabase.app/users/'+this.uid+'/.json').then((response) => {
            if (response.ok){
              return response.json();
            }
          })
          .then((data) => {
            console.log(data);
            
            const results = [];
            var temp = -1
            for (const id in data) {
              temp+=1;
              results.push({
                id: id,
                uid: data[id]['uid']
              });
            }

            this.profile = results[temp].uid;
            console.log(results);
          });

      }
    });
  },
  };
  </script>
  
  <style scoped>
  .profile-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  
  form {
    background-color: #eee;
    border-radius: 10px;
    padding: 20px;
    max-width: 500px;
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  select {
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  
  .btn {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }
  </style>