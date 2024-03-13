<template lang="">
    <div class="w-[20rem] h-max bg-white border border-black-1">
        <div class="flex justify-center items-center  h-[6rem] border-b-[5px] border-b-red-500">
            <h1 class="text-lg font-bold">
                POPULER
            </h1>
        </div>
        <div class=" relative flex justify-center items-center p-4 gap-6 hover:text-red-500 cursor-pointer">
            <img  class="w-[5rem] h-[5rem] rounded-full" src="/image/Redaksi1.jpeg" alt="" srcset="">
            <h2 class="text-lg"> 
          asfafasdfas
            </h2>
        </div>
        <div class=" relative flex justify-center items-center p-4 gap-6 hover:text-red-500 cursor-pointer">
            <img  class="w-[5rem] h-[5rem] rounded-full" src="/image/Redaksi1.jpeg" alt="" srcset="">
            <h2 class="text-lg"> 
          asfafasdfas
            </h2>
        </div>
        <div class=" relative flex justify-center items-center p-4 gap-6 hover:text-red-500 cursor-pointer ">
            <img  class="w-[5rem] h-[5rem] rounded-full" src="/image/Redaksi1.jpeg" alt="" srcset="">
            <h2 class="text-lg"> 
          asfafasdfas
            </h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PopulerSelebCard',
    props: ['title','idx','url','img']
}
</script>
<style lang="">
    
</style>