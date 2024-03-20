<script setup>
  import ProductGroupComponent from '@/components/ProductGroupComponent.vue';
</script>

<template>
  <div className="m-2 p-2">
    <div className="flex">
      <h2 className="m-2 p-2 pb-6 font-bold text-2xl mx-auto">UltraMarine's Products</h2>
    </div>  
    <ProductGroupComponent name="Fresh fish" desc="Rare species (e.g. Sturgeon Beluga or Opah), supplied straight from local sources." img="/fresh-fish.png" imgAlt="Fresh fish" path="fish"/>
    <ProductGroupComponent name="Ready-made dishes" desc="Exciting dishes prepared using our fresh fish and delivered directly to the retail customer." img="/ready-dishes.png" imgAlt="Ready-made-dishes" path="dishes"/>
  </div>
</template>
