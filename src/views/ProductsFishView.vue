<script setup>
  import ProductComponent from '@/components/ProductComponent.vue';
</script>

<template>
    <div className="m-2 p-2">
      <div className="flex">
        <h2 className="m-2 p-2 pb-6 font-bold text-2xl mx-auto">Fresh fish</h2>
      </div> 
      <div className="flex flex-wrap justify-center">
          <ProductComponent name="Atlantic Salmon Fillet" price="25 PLN" unit="200g" img="/fish-salmon-fillet.png" imgAlt="Salmon Fillet"/>
          <ProductComponent name="Atlantic Salmon Whole" price="50 PLN" unit="kg" img="/fish-salmon.png" imgAlt="Salmon Whole"/>
          <ProductComponent name="Atlantic Cod Fillet" price="20 PLN" unit="250g" img="/fish-cod-fillet.png" imgAlt="Cod Fillet"/>
          <ProductComponent name="Atlantic Cod Whole" price="40 PLN" unit="kg" img="/fish-cod.png" imgAlt="Cod Whole"/>
          <ProductComponent name="Pacific Cod Fillet" price="15 PLN" unit="200g" img="/pacific-cod-fillet.png" imgAlt="Cod Fillet"/>
          <ProductComponent name="Pacific Cod Whole" price="50 PLN" unit="kg" img="/pacific-cod.png" imgAlt="Cod Whole"/>
          <ProductComponent name="Tuna Fillet" price="20 PLN" unit="200g" img="/tuna-fillet.png" imgAlt="Tuna Fillet"/>
          <ProductComponent name="Tuna Whole" price="80 PLN" unit="kg" img="/tuna.png" imgAlt="Tuna Whole"/>
          <ProductComponent name="Sturgeon Beluga fillet" price="200 PLN" unit="100g" img="/beluga-fillet.png" imgAlt="Beluga Fillet"/>
          <ProductComponent name="Opah fillet" price="35 PLN" unit="200g" img="/opah-fillet.png" imgAlt="Opah Fillet"/>
          <ProductComponent name="Chilean Seabass fillet" price="60 PLN" unit="200g" img="/seabass-fillet.png" imgAlt="Seabass Fillet"/>
          <ProductComponent name="Swordfish fillet" price="55 PLN" unit="250g" img="/swordfish-fillet.png" imgAlt="Swordfish Fillet"/>
      </div>
    </div>
</template>