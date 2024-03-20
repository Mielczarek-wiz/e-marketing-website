<script>
export default {
    props: ['title', 'text', 'buttonText'],
    data() {
        return {
            isVisible: true
        };
    },
    methods: {
        goto() {
            this.$router.push("/products");
        },
        close() {
            this.isVisible = false;
        }  
    }
}
</script>

<template>
    <div
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center" v-if="isVisible">
        <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
            <div className="relative p-4 rounded-3xl shadow bg-sky-500 md:p-8">
                <div className="mb-4 text-sm">
                    <div className="flex justify-between">
                        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{{ title }}</h3>
                        <button className="font-bold text-xl text-white" @click="close()">X</button>
                    </div>
                    <p>
                        {{ text }}
                    </p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <button
                        className="bg-white py-4 px-8 font-bold rounded-full hover:bg-red-700 text-black hover:text-white transition-colors duration-500 shadow-lg"
                        @click="goto()">{{ buttonText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>