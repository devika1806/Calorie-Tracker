<template>
    <div class="dashboard">
      <div class="part1 card">
        <div >
          <label for="calorie-input">Set Calorie:</label>
          <input id="calorie-input" type="number" v-model="calorie" />
          <button @click="setCalorie">Set</button>
        </div>
        <div class="chart">
          <canvas ref="chart" width="400" height="400"></canvas>
        </div>
      </div>
      <div class="part2">
        <div class="card">
          <label for="water-input">Track Water:</label>
          <input id="water-input" type="number" v-model="water" />
        </div>
        <div class="card">
          <h2>BMI</h2>
          <p v-if="!bmi">Enter your weight and height to calculate your BMI</p>
          <div v-else>
            <p>Your BMI is {{ bmi }}</p>
            <p v-if="bmi < 18.5">Underweight</p>
            <p v-else-if="bmi < 25">Normal</p>
            <p v-else-if="bmi < 30">Overweight</p>
            <p v-else>Obese</p>
          </div>
          <!-- <label for="weight-input">Weight (kg):</label>
          <input id="weight-input" type="number" v-model="weight" />
          <label for="height-input">Height (cm):</label>
          <input id="height-input" type="number" v-model="height" />
          <br>
          <button @click="calculateBMI">Calculate</button> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto'
  
  export default {
    data() {
      return {
        calorie: 0,
        water: 0,
        weight: null,
        height: null,
        bmi: null,
        chart: null,
      }
    },
    mounted() {
      this.chart = new Chart(this.$refs.chart, {
        type: 'pie',
        data: {
          labels: ['Calories Consumed', 'Calories Remaining'],
          datasets: [{
            data: [this.calorie, 2000 - this.calorie],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384']
          }]
        },
        options: {
          responsive: false,
        }
      })
    },
    methods: {
      setCalorie() {
        this.chart.data.datasets[0].data[0] = this.calorie
        this.chart.data.datasets[0].data[1] = 2000 - this.calorie
        this.chart.update()
      },
      calculateBMI() {
        const heightM = this.height / 100
        const bmi = this.weight / (heightM * heightM)
        this.bmi = bmi.toFixed(2)
      },
    },
  }
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    justify-content: space-between;
  }
  
  .part1 {
    flex: 1;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .part2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .card {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .chart {
    width: 100%;
    height: auto;
    max-width: 400px;
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }
  
  input {
    padding: 10px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    font-size: 18px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #36A2EB;
    color: #fff;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
  }
  
  button:hover {
    background-color: #2581C1;
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  p {
    margin-bottom: 10px;
    font-size: 18px;
  }
  </style>
  