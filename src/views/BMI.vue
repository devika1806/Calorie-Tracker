<template>
    <div class="container">
      <h2>BMI Calculator</h2>
      <form class="bmi-form" @submit.prevent="calculateBMI">
        <div class="form-group">
          <label for="height">Height (cm)</label>
          <input type="number" class="form-control" id="height" v-model="height" required>
        </div>
        <div class="form-group">
          <label for="weight">Weight (kg)</label>
          <input type="number" class="form-control" id="weight" v-model="weight" required>
        </div>
        <button type="submit" class="btn btn-primary">Calculate</button>
      </form>
      <div class="result" v-if="bmi">
        <p>Your BMI is {{ bmi.toFixed(2) }}</p>
        <p>You are in the {{ getClass() }} category</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        height: null,
        weight: null,
        bmi: null,
      };
    },
    methods: {
      calculateBMI() {
        const heightInMeters = this.height / 100;
        this.bmi = this.weight / (heightInMeters * heightInMeters);
      },
      getClass() {
        if (this.bmi < 18.5) {
          return "Underweight";
        } else if (this.bmi < 25) {
          return "Normal weight";
        } else if (this.bmi < 30) {
          return "Overweight";
        } else {
          return "Obese";
        }
      },
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  
  .bmi-form {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-bottom: 15px;
  }
  
  .form-control {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
  }
  
  .btn-primary {
    background-color: #2ecc71;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  .result {
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
  }
  
  </style>
  