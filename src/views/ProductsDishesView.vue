<script setup>
  import ProductComponent from '@/components/ProductComponent.vue';
</script>

<template>
    <div className="m-2 p-2">
      <div className="flex">
        <h2 className="m-2 p-2 pb-6 font-bold text-2xl mx-auto">Ready-made dishes</h2>
      </div> 
      <div className="flex flex-wrap justify-center">
          <ProductComponent name="Fisherman's Pie" price="35 $" unit="portion" img="/fish-pie.png" imgAlt="Fisherman's Pie"/>
          <ProductComponent name="Seafood Paella" price="50 $" unit="portion" img="/paella.png" imgAlt="Seafood Paella"/>
          <ProductComponent name="Grilled Salmon" price="40 $" unit="portion" img="/grilled-salmon.png" imgAlt="Grilled Salmon"/>
          <ProductComponent name="Fish Tacos" price="30 $" unit="two" img="/tacos.png" imgAlt="Fish Tacos"/>
          <ProductComponent name="Fish Curry" price="45 $" unit="portion" img="/curry.png" imgAlt="Fish Curry"/>
          <ProductComponent name="Fish and Chips" price="25 $" unit="portion" img="/chips.png" imgAlt="Fish and Chips"/>
          <ProductComponent name="Tuna Nicoise Salad" price="35 $" unit="portion" img="/salad.png" imgAlt="Salad"/>
          <ProductComponent name="Steamed Salmon Bagel" price="25 $" unit="serving" img="/solmon-bagel.png" imgAlt="Steamed Salmon Bagel"/>
          <ProductComponent name="Fish Cakes" price="20 $" unit="four" img="/cakes.png" imgAlt="Fish Cakes"/>
          <ProductComponent name="Ceviche" price="40 $" unit="portion" img="/cheviche.png" imgAlt="Ceviche"/>
      </div>
    </div>
</template>