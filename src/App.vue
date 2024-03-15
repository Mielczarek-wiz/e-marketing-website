<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GreatFooter from './components/GreatFooter.vue'
import GreatHeader from './components/GreatHeader.vue'
import { routes } from './router'
</script>

<template>
  <GreatHeader>
    <RouterLink v-for="(route, index) in computedRoutes" :key="index" :to="route.path"
      ><span className="text-lg hover:text-xl text-white hover:text-cyan-700 h-full">{{
        route.displayedName
      }}</span></RouterLink
    >
  </GreatHeader>
  <main className="flex-1 w-dvw">
    <RouterView />
  </main>
  <GreatFooter />
</template>

<script>
export default {
  computed: {
    computedRoutes() {
      return routes.map((route) => {
        return { ...route, displayedName: route.name.charAt(0).toUpperCase() + route.name.slice(1) }
      })
    }
  }
}
</script>
