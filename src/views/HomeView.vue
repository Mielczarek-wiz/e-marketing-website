<script setup>
    import ReviewComponent from "@/components/ReviewComponent.vue"
</script>

<script>
  export default {
    methods: {
        goto() {
            this.$router.push("/products");
        }
    }
  }
</script>

<style>
  .bg-image {
    background-image: linear-gradient(to bottom, rgba(0, 0, 150, 0.2), rgba(190, 234, 255)), url("/happy-dude.png");
    background-size: cover;
    color: white;
  }
</style>

<template>
  <div className="m-2 p-2">
    <div className="flex">
        <h2 className="m-2 p-2 pb-6 font-bold text-2xl mx-auto">Welcome to UltraMarine!</h2>
    </div> 
    <div className="bg-image rounded-t-3xl h-96">
      <div className="p-6 m-2 md:flex">
        <div className="font-bold text-lg w-full md:w-3/4 lg:w-2/5 text-justify mb-6">
          UltraMarine offers unique and high quality fish products, focusing on providing fresh and rare fish species. Our range ranges from raw fish to ready-to-eat dishes prepared with the freshest ingredients. Each product is carefully selected to provide customers with a unique culinary experience.
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="bg-white py-4 px-8 font-bold rounded-full hover:bg-red-700 text-black hover:text-white transition-colors duration-500 shadow-lg" @click="goto()">See our products</button>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap">
      <ReviewComponent text="UltraMarine consistently delivers top-notch quality fish, making it a staple in our seafood dishes." name="Michael" restaurant="Ocean's Edge Restaurant" location="Miami, FL"/>
      <ReviewComponent text="Impeccable freshness and variety, UltraMarine sets the standard for premium seafood suppliers." name="Sophia" restaurant="Seaside Bistro" location="San Francisco, CA"/>
      <ReviewComponent text="UltraMarine's attention to detail and reliability make them our go-to source for exquisite fish every time." name="Alejandro" restaurant="Coastal Catch Eatery" location="Boston, MA"/>
    </div>
</template>
