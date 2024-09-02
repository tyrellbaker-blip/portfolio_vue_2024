<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/research">Research</router-link> |
        <router-link to="/experience">Experience</router-link> |
        <router-link to="/vision">Vision</router-link>
      </nav>
    </header>

    <router-view></router-view>

    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Tyrell Baker. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e0e0e0;
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #2c3e50;
  padding: 20px;
}

nav a {
  color: #42b983;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #2c3e50;
  padding: 10px;
  color: #ffffff;
}
</style>