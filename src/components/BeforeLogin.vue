<template>
  <div class="container">
    <main>
      <h1>Welcome to our Calorie Tracker!</h1>
      <br>
      <img
        src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn374/wp-content/uploads/2019/04/UB23_right-time-to-run_ft.jpg.webp"
        alt="Background image 1" class="center-image">
      <h3 class="tagline">Track your calories, transform your health - Every calorie counts</h3>
      <p class="description">All you have to do is give us your basic information and we'll</p>
      <ul class="features">
        <li>1. Keep a running tally of your calorie count</li>
        <br>
        <li>2. Ensure you stay within your target calorie range</li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.center-image {
  display: block;
  margin: 0 auto;
  width: 50%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.tagline {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
}

.description {
  font-size: 1.2rem;
  margin-top: 2rem;
}

.features {
  font-size: 1.2rem;
  margin-top: 1rem;
  padding-left: 2rem;
}
</style>

