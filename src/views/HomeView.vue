<template>
  <div class="profile-container">
    <h1>Create Profile</h1>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="age">
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender">
          <option value="">--Please select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="height">Height (cm):</label>
        <input type="number" id="height" v-model="height">
      </div>
      <div class="form-group">
        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" v-model="weight">
      </div>
      <div class="form-group">
        <label for="activity-level">Activity Level:</label>
        <select id="activity-level" v-model="activityLevel">
          <option value="">--Please select--</option>
          <option value="sedentary">Sedentary</option>
          <option value="lightly-active">Lightly Active</option>
          <option value="moderately-active">Moderately Active</option>
          <option value="very-active">Very Active</option>
          <option value="extra-active">Extra Active</option>
        </select>
      </div>
      <button class="btn" @click.prevent="createProfile">Create Profile</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
      gender: "",
      height: null,
      weight: null,
      activityLevel: "",
    };
  },
  methods: {
    createProfile() {
      const profile = {
        name: this.name,
        age: this.age,
        gender: this.gender,
        height: this.height,
        weight: this.weight,
        activityLevel: this.activityLevel,
      };

      console.log(profile); // Replace with your API call to create the profile
    },
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
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}
</style>