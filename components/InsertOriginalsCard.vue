<template lang="">
   

    <div class=" flex w-auto h-[25rem]  justify-around p-4 ">
        
        <Carousel 
            :items-to-show="3" 
            :snap-align ="center"
            >

            <Slide v-for="slide in 4" :key="slide">
               
                <div class="w-[14rem] h-[23rem] justify-end overflow-hidden">
                    <div class="overflow-hidden w-full h-full bg-slate-400">

<img class="hover:scale-110 w-full h-full cursor-pointer"src="/image/Redaksi1.jpeg" alt="">
</div>
                    <div class=" flex absolute justify-end w-full p-2 bg-red-500">
                        <Icon name="fa:play-circle" size="50" color="#FFFF"/>
                    </div>
                   
                </div>
            </slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components:{
        Carousel,
        Slide,

    },
    data: ()=>{
        settings:{
            itemToshow: 3

        }
    }
}
</script>
<style lang="">
</style>