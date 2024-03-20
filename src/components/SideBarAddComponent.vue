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
    .bg-image-add {
        background-image: url("/add-fish.png");
        background-size: cover;
    }
</style>

<template>
    <div>
        <div className="bg-image-add rounded-2xl h-full w-full flex lg:flex-col items-center justify-evenly">
            <img src="/src/assets/logo.png" alt="logo" className="w-48 m-2"/>
            <div className="w-full flex items-center justify-center mx-6">
                <button className="bg-white py-4 px-8 font-bold rounded-full hover:bg-red-700 text-black hover:text-white transition-colors duration-500 shadow-lg" @click="goto()">Buy fish!</button>
            </div>
        </div>
    </div>
</template>