<template>
    <div class="box-border lg:min-h-screen lg:px-[12rem] max-w-full  bg-white">
       <div class="lg:mx-20 py-10">
            <section class="mx-20 my-[2rem]">
                <article>
                    <div class="flex gap-5">
                        <h1 class="text-3xl font-sans font-normal">
                        PILIHAN
                        <Span class="font-bold"> REDAKSI</Span>
                        </h1>
                        <hr class="relative w-16 h-1.5 my-2.5 dark:bg-red-500">
                    </div>
                    <div class="mt-5 flex flex-row gap-3">
                    <HorizontalCard :data="news"/>
                    <HorizontalCard :data="news"/>
                    <HorizontalCard :data="news"/>
                    <HorizontalCard :data="news"/>
                    </div>
                    <div class="grid h-[40rem] border-b-2 border-solid border-[#979797]">
                        <BigCard :data="news"/>
                    </div>
                   
                </article>
            </section> 
            <section class="mx-20">
                <div class="relative">
                    <h1 class="text-lg px-20">
                        Trending :
                    </h1>
                    
                    <TrendingCarousel :data ="trending" SlideNext="SlideNext(trending)"/>
                </div>
                
            </section>
            <section class="flex mx-20 my-10 gap-20">
                <div class="flex flex-col">
                <div class="flex items-center justify-between ">
                    <div class="flex gap-4 items-center">
                        
                        <h1 class="text-3xl">
                            !NSERTSTORIES
                        </h1>
                        <hr class="relative w-16 h-1.5  dark:bg-red-500">
                    </div>
                    <div class="relative items-end">
                        <a> LEBIH LANJUT </a>
                        <Icon name="ic:baseline-chevron-right" size="40" color="#BF2026"/>
                    </div>
                </div>
                <StoriesCard />
                <div class="flex gap-4 items-center py-6">
                    <h1 class="text-3xl">
                        TERKINI
                    </h1>
                    <hr class="relative w-16 h-1.5  dark:bg-red-500">
                </div>
                <Card2 />
                <div class="relative">
                    <div class="my-4 bg-red-500 h-5 text-center text-white text-sm ">
                    <h3>
                        ADVERTISEMENT
                    </h3>
                    </div>
                    <div class="h-[25rem] bg-slate-500">
                    </div>
                    <div class="my-4 bg-red-500 h-5 text-center text-white text-sm">
                        <h2>
                            SCROLL TO RESUME CONTENT
                    </h2>
                    </div>

                </div>
                <Card2/>
                <div class="relative">
                    <div class="flex gap-4 items-center py-6 justify-between">
                    <div class="flex items-center gap-4">
                        <h1 class="text-3xl font-medium">
                        VIDEO 
                        <span class="font-bold">
                            TERKINI
                        </span>
                        
                    </h1>
                    <hr class="relative w-16 h-1.5  dark:bg-red-500">
                    </div>
                    <div class="relative items-end text-red-500">
                        <a> LEBIH LANJUT </a>
                        <Icon name="ic:baseline-chevron-right" size="40" color="#BF2026"/>
                    </div>
                   
                </div>
                <VideoCard />
                </div>
                <div>
                    <div class="flex gap-4 items-center py-6 justify-between">
                        <div class="flex items-center gap-4">
                            <h1 class="text-3xl font-medium">
                                INSERTLIVE 
                                <span class="font-bold">
                                    ORIGINALS
                                </span>
                            </h1>
                            <hr class="relative w-16 h-1.5  dark:bg-red-500">
                        </div>
                    
                        <div class="relative items-end text-red-500">
                            <a> LEBIH LANJUT </a>
                            <Icon name="ic:baseline-chevron-right" size="40" color="#BF2026"/>
                        </div>
                   
                    </div>
                    <h1 class="text-xl font-bold">
                        Program eksklusif InsertLive yang membahas gosip terkini, Korea, hingga film dan musik.
                    </h1>
                    <InsertOriginalsCard />
                </div>
                <div class="block">
                    <div class="flex items-center gap-4">
                        <h1 class="text-3xl py-4 font-medium tracking-widest">
                            VIDEO ORIGINAL 
                            <span class="font-bold">
                                TERBARU
                            </span>
                        </h1>
                        <hr class="relative w-16 h-1.5  dark:bg-red-500">
                    </div>
                    <VideoOriginalsCard/>
                </div>
                <div class="block">
                    <div class="flex gap-4 items-center py-6 justify-between">
                        <div class="flex items-center gap-4">
                            <h1 class="text-3xl font-medium tracking-widest">
                                UPCOMING
                                <span class="font-bold">
                                    EVENT
                                </span>
                            </h1>
                            <hr class="relative w-16 h-1.5  dark:bg-red-500">
                        </div>
                    
                        <div class="relative items-end text-red-500">
                            <a> LEBIH LANJUT </a>
                            <Icon name="ic:baseline-chevron-right" size="40" color="#BF2026"/>
                        </div>  
                    </div>
                    <CardEvents/>
                </div>
                <Card2/>
                <Card2/>
                <div class="block">
                    <div class="flex gap-4 items-center py-6 justify-between">
                        <div class="flex items-center gap-4">
                            <h1 class="text-3xl font-medium tracking-widest">
                                SM
                                <span class="font-bold">
                                    ENTERTAIMENT
                                </span>
                            </h1>
                            <hr class="relative w-16 h-1.5  dark:bg-red-500">
                        </div>
                    
                        <div class="relative items-end text-red-500">
                            <a> LEBIH LANJUT </a>
                            <Icon name="ic:baseline-chevron-right" size="40" color="#BF2026"/>
                        </div>
                    </div>
                    <VideoCard />
                </div>
                <Card2/>
                <Card2/>
                <div class="block">
                    <div class="flex gap-4 items-center py-6 justify-between">
                        <div class="flex items-center gap-4">
                            <h1 class="text-3xl font-medium tracking-widest">
                                SOROT
                            </h1>
                            <hr class="relative w-16 h-1.5  dark:bg-red-500">
                        </div>
                        <div class="relative items-end text-red-500">
                            <a> LEBIH LANJUT </a>
                            <Icon name="ic:baseline-chevron-right" size="40" color="#BF2026"/>
                        </div>  
                    </div>
                    <VideoCard />
                </div>
                <div class="block">
                    <div class="flex gap-4 items-center py-6 justify-between">
                        <div class="flex items-center gap-4">
                            <h1 class="text-3xl font-medium tracking-widest">
                                DETIKNETWORK
                            </h1>
                            <hr class="relative w-16 h-1.5  dark:bg-red-500">
                        </div>
                    </div>
                    <GridCard />
                </div>
                <Card2 />
                <Card2 />
                <Card2 />
                <div class="flex place-content-center">               
                    <div class="flex items-center w-[8.5rem]  h-10 border border-red-500 px-2 rounded-full hover:bg-red-500 text-red-500 hover:text-white">
                    <h1 class="font-medium text-l">
                        SELENGKAPNYA
                    </h1>
                </div>
                </div>
              
                </div>
                
                <div class="flex flex-col h-auto space-y-10">
                    <PopulerCard />
                <PopulerSelebCard/>
                <FilmCard/>
                <LirikLaguCard/>
                <MusikCard/>
                <PopulerCard/>
                </div>
            </section>
        <div>

        </div>
       </div>
    </div>
</template>
<script>
import HorizontalCard from '~/components/HorizontalCard.vue';
import BigCard from '~/components/BigCard.vue';
import TrendingCarousel from '~/components/TrendingCarousel.vue';
import PopulerCard from '~/components/PopulerCard.vue';
import Card2 from '~/components/Card2.vue';
export default {
    name: 'IndexPage',
    components:{
        HorizontalCard,
        BigCard,
        TrendingCarousel,
        PopulerCard,
    },
    data(){
        return{
            news:[
                {
                    image: 'image/Redaksi1.jpeg',
                    title: '10 Jurusan Kuliah yang Lulusannya Mudah Dapat Kerja, Ada Kamu?.',
                    url: '#news',
                    
                }
                
            ],
            trending:[
                {
                    id:1,
                    title: 'Test3',
                    image : null,
                    isNavbar : false,
                },
                {
                    id:2,
                    title: 'Test2',
                    image : 'image/Redaksi1.jpeg',
                    isNavbar : false,
                },
                {
                    id:3,
                    title: 'Test2',
                    image : 'image/Redaksi1.jpeg',
                    isNavbar : true,
                },
                {
                    id:4,
                    title: 'Tdadadad',
                    image : 'image/Redaksi1.jpeg',
                    isNavbar : true,
                },
                {
                    id:5,
                    title: 'Test2',
                    image : 'image/Redaksi1.jpeg',
                    isNavbar : true,
                }
            ]
        }
    }
}
</script>