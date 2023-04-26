<template>
    <div class="water-tracker-container">
      <h2 class="water-tracker-heading">Water Tracker</h2>
      <div class="water-tracker-counter">
        <div class="water-tracker-count">{{ count }} ml</div>
        <button class="water-tracker-reset" @click="reset">Reset</button>
      </div>
      <button class="water-tracker-add" @click="addWater(250)">Add 250 ml</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      addWater(amount) {
        this.count += amount;
      },
      reset() {
        this.count = 0;
      }
    }
  };
  </script>
  
  <style scoped>
  .water-tracker-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .water-tracker-heading {
    font-size: 24px;
    font-weight: bold;
    color: #2ecc71;
    margin-bottom: 20px;
  }
  
  .water-tracker-counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .water-tracker-count {
    font-size: 24px;
    font-weight: bold;
    color: #2ecc71;
  }
  
  .water-tracker-reset {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .water-tracker-reset:hover {
    background-color: #c0392b;
  }
  
  .water-tracker-add {
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .water-tracker-add:hover {
    background-color: #27ae60;
  }
  </style>
  