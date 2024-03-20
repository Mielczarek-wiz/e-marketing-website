<script>
    export default {
        props: ['text', 'name', 'restaurant', 'location']
    }
</script>

<template>
    <div className="w-full md:w-1/3 p-2 flex flex-col justify-between">
        <p className="m-2 p-2 text-lg">{{ text }}</p>
        <div>
            <span className="mx-4 italic text-sm md:text-base">{{ name }}, {{ restaurant }} ({{ location }})</span>
            <div class="flex m-2 p-2">
                <img src="/star.png" alt="star" className="w-6 my-2"/>
                <img src="/star.png" alt="star" className="w-6 my-2"/>
                <img src="/star.png" alt="star" className="w-6 my-2"/>
                <img src="/star.png" alt="star" className="w-6 my-2"/>
                <img src="/star.png" alt="star" className="w-6 my-2"/>
            </div>
        </div>
    </div>
</template>
