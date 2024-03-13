<template>
    
    <div class="flex items-center justify-between gap-2">
        <div class="flex items-center bg-[#e0dede] w-[3.5rem] h-[3.5rem] rounded-full border-[#6c6a6a] cursor-pointer" @click.prevent="SlideBack">
            <Icon name="ic:baseline-chevron-left" size="60" color="#BF2026"/>
        </div>

                <div class="flex gap-4 w-full">
                    <div class="flex bg-red-600 rounded-full h-[2rem] items-center text-white hover:text-red-500 hover:bg-white border-red-500 border " v-for="(item,i) in data" :key="item">
                
                        <img v-if="item.image != null" class="rounded-full h-[2rem] w-[2rem] border-red-500 border-solid border-2" v-bind:src="item.image" alt="">
                        <h1 class="px-2 text-xl pb-2">
                            {{ item.title }}
                        </h1>
                        <div  v-if="item.isNavbar" class="h-[1.5rem] w-[1.5rem] rounded-full flex bg-white items-center mx-2 pl-[0.1rem] hover:bg-red-500 hover:text-white text-red-500">
                                <Icon name="material-symbols:check-small" size="30" /> 
                        </div>
                    </div>
                </div>

        <div class="flex items-center bg-[#e0dede] w-[3.5rem] h-[3.5rem] rounded-full border-[#6c6a6a] cursor-pointer" @click.prevent="SlideNext(data)">
            <Icon name="ic:baseline-chevron-right" size="60" color="#BF2026"/>
        </div>
    </div>
</template>

<script>

export default{
    name: 'TrendingCarousel',
    props: ["title", "image", "data", "isNavbar","id"],
    data(){
        return{
            componentsToshow: 2
            
        }
    },
    method:{
        SlideNext(data){
            if(this.componentsToshow < data.length){
                console.log(data);
                this.componentsToshow++;
            }
        },
        SlideBack(){
            if (this.componentToShow > 1) {
                this.componentToShow--;
            }
        }
    }
};
</script>
<style lang="">
    
</style>