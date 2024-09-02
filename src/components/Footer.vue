<!-- src/components/Footer.vue -->
<template>
  <footer>
    <p>&copy; {{ currentYear }} Tyrell Baker. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  width: 100%;
}
</style>