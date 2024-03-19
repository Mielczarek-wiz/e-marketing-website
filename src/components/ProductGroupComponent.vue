<script>
    export default {
        props: ['name', 'desc', 'img', 'imgAlt', 'path'],
        methods: {
            goto() {
                this.$router.push(this.$route.path + '/' + this.path);
            }
        }
    }
</script>

<template>
    <div className="mb-4 p-2 bg-gradient-to-br from-sky-700 to-sky-500 rounded-full align-middle self-center shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-evenly text-center md:text-left">
            <section className="md:w-2/5">
                <h3 className="m-2 p-2 font-semibold text-lg text-white">{{ name }}</h3>
                <p className="m-2 p-2 md:mb-10 font-md text-white">{{ desc }}</p>
            </section>
            <img :src='img' :alt='imgAlt' className="m-2 w-1/5 rounded-full shadow-lg hidden md:block">
            <div className="flex items-center justify-center">
                <button className="bg-white py-4 px-8 font-bold rounded-full hover:bg-red-700 hover:text-white transition-colors duration-500 shadow-lg" @click="goto()">Order now!</button>
            </div>
        </div>
    </div>
</template>