<template lang="">
    <div v-for="(item,i) in data" class="w-[50rem]">
        <div class="h-[30rem] overflow-hidden">
            <img class=" hover:scale-110 transition duration-500 cursor-pointer  min-h-full " v-bind:src="item.image">
        </div>
    <h1 class="text-3xl font-bold hover:text-red-500">
        {{ item.title}}
    </h1>  
    </div>
</template>
<script>
export default{
    name: 'BigCard',
    props: ['title','img','url','data']
}
</script>
<style lang="">

</style>