<template>
    <div class="dashboard">
      <div class="card">
        <h2>Calorie Pie Chart</h2>
        <!-- Insert your pie chart code here -->
      </div>
      <div class="card">
        <h2>Water Consumed</h2>
        <!-- Insert your water consumed code here -->
      </div>
      <div class="card">
        <h2>BMI Value</h2>
        <!-- Insert your BMI value code here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        // Add any data variables you need here
      }
    },
    methods: {
      // Add any methods you need here
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .card {
    flex-basis: 30%;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .card h2 {
    margin-top: 0;
  }
  </style>
  