<!-- src/components/PageNavigation.vue -->
<template>
  <div class="page-navigation">
    <router-link v-if="prevPage" :to="prevPage.path" class="nav-link prev">← {{ prevPage.name }}</router-link>
    <router-link v-if="nextPage" :to="nextPage.path" class="nav-link next">{{ nextPage.name }} →</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageNavigation',
  computed: {
    currentRouteIndex() {
      return this.$router.options.routes.findIndex(route => route.path === this.$route.path);
    },
    prevPage() {
      const routes = this.$router.options.routes;
      return this.currentRouteIndex > 0 ? routes[this.currentRouteIndex - 1] : null;
    },
    nextPage() {
      const routes = this.$router.options.routes;
      return this.currentRouteIndex < routes.length - 1 ? routes[this.currentRouteIndex + 1] : null;
    }
  }
}
</script>

<style scoped>
.page-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid #42b983;
}

.nav-link {
  color: #42b983;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

.prev {
  margin-right: auto;
}

.next {
  margin-left: auto;
}
</style>