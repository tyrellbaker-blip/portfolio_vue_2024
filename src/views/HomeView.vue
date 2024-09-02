<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <h1>Tyrell Baker</h1>
    <h2>Computer Science Scholar & Aspiring Professor</h2>
    <img src="/images/headshot.jpeg" alt="Tyrell Baker" class="profile-picture">
    <p>Welcome to my portfolio! I'm a passionate researcher and educator dedicated to making a difference in computer science and AI education.</p>
    <router-link to="/about" class="cta-button">Learn More About Me</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px); /* Adjust based on your header/footer height */
  padding: 20px;
}

h1 {
  font-size: 3em;
  color: #42b983;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  color: #e0e0e0;
  margin-bottom: 20px;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px 0;
  border: 3px solid #42b983;
}

p {
  max-width: 600px;
  text-align: center;
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  background-color: #42b983;
  color: #1a1a1a;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #3aa876;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.25em;
  }

  .profile-picture {
    width: 150px;
    height: 150px;
  }
}
</style>