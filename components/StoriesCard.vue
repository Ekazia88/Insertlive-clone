<template lang="">
    <div class="flex w-full gap-5 my-2">
        <div class= "relative h-auto hover:text-red-500">
                <div class="absolute flex bg-black/75 top-5 left-[12.5rem] w-12 gap-1 h-7 text-white items-center px-1"> 
                    <Icon name="fluent-mdl2:tab" color="white"  size="15"/>
                    <h1>
                        10
                    </h1>
                </div>
            <div class="h-[22rem] overflow-hidden rounded-lg hover:scale-100">
                
                <img class="hover:scale-110 transition duration-500 cursor-pointer h-[22rem] w-[16rem]" src="/image/Redaksi1.jpeg" alt="" srcset="">
            </div>
            <h1 class="text-xl font-medium">
                asdasdasd
            </h1>
        </div>
        <div class= "h-auto hover:text-red-500">
            <div class="h-[22rem] overflow-hidden rounded-lg">
                
                <img class="hover:scale-110 transition duration-500 cursor-pointer h-[22rem] w-[16rem]" src="/image/Redaksi1.jpeg" alt="" srcset="">
            </div>
            <h1 class="text-xl font-medium">
                asdasdasd
            </h1>
        </div>
        <div class= "h-auto hover:text-red-500">
            <div class="h-[22rem] overflow-hidden rounded-lg">
                
                <img class="hover:scale-110 transition duration-500 cursor-pointer h-[22rem] w-[16rem]" src="/image/Redaksi1.jpeg" alt="" srcset="">
            </div>
            <h1 class="text-xl font-medium">
                asdasdasd
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StoriesCard',
    props: ['title','item','url','image']
}
</script>
<style lang="">
    
</style>