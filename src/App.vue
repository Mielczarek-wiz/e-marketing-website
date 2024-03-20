<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GreatFooter from './components/GreatFooter.vue'
import GreatHeader from './components/GreatHeader.vue'
import { routes } from './router'
</script>

<template>
  <GreatHeader>
    <template v-for="(route, index) in computedRoutes">
      <RouterLink v-if="route.visibleInMenu" :key="index" :to="route.path">
        <span
          class="h-full text-white transition-all duration-700 hover:text-lg hover:text-cyan-800"
        >
          {{ route.displayedName }}
        </span>
      </RouterLink>
    </template>
  </GreatHeader>
  <main className="flex-1 w-dvw overflow-y-auto overflow-x-hidden">
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
