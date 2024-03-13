<template>   
        <div v-for="(item, i) in data" :key="i" class="py-5 w-[420px]">
            <router-link :to="item.url">
            <div class="h-45 overflow-hidden">
              <img class=" hover:scale-110 transition duration-500 cursor-pointer" v-bind:src="item.image" alt="">
            </div>
            <h5 class="text-balance font-bold hover:text-red-500">
                {{ item.title }}
            </h5>
            
        </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HorizontalCard',
    props: ['title', 'image', 'url', 'data'],
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  