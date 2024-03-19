<script>
    export default {
        props: ['id', 'name', 'price', 'unit', 'img', 'imgAlt']
    }
</script>

<template>
    <div className="w-3/4 md:w-2/5 lg:w-1/5 m-4 p-6 bg-gradient-to-br from-sky-700 to-sky-500 rounded-full align-middle self-center shadow-md flex flex-col items-center">
        <img :src="img" :alt="imgAlt" className="w-2/3 rounded-full pb-6"/>
        <div className="flex justify-center items-center pb-10 px-6">
            <div className="w-2/3 mr-4 h-20">
                <h3 className="font-bold text-white">{{ name }}</h3>
                <span className="font-semibold text-white text-sm">{{ price }} / {{ unit }}</span>
            </div>
            <div>
                <button className="bg-white p-4 font-bold rounded-full hover:bg-red-700 hover:text-white transition-colors duration-500 shadow-lg">
                    Buy
                </button>
            </div>
        </div>

    </div>
</template>