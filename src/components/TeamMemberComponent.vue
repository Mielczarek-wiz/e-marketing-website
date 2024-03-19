<script>
    export default {
        props: ['name', 'job', 'text1', 'text2', 'img']
    }
</script>

<template>
    <div className="w-full lg:w-2/5 flex justify-center items-center m-2 p-4">
        <div className="w-3/4">
            <span><b className="font-semibold">{{ name }}</b> - {{ job }}</span>
            <ul className="list-disc m-2">
                <li className="ml-10">{{ text1 }}</li>
                <li className="ml-10">{{ text2 }}</li>
            </ul>
        </div>

        <img :src='img' :alt='name' className="w-1/4 rounded-3xl"/>
    </div>
</template>