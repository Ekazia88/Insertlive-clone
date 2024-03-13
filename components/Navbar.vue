<template>
    <header class="bg-[url('assets/img/bg_nav.jpg')]">
        <div class= "container h-[120px] flex items-center justify-center mx-auto">
            <div class="w-50 mr-10">
               <img src="~/assets/img/logo.png"/>
            </div>
            <div class="relative" :class="{'hidden':isSearch == false}">
                <input class="h-10 w-[1038px] pr-10 ">
                <button class="absolute top-0 right-0 h-full" @click="isSearch =! isSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="flex gap-3 font-bold text-white h-10" :class="{'hidden': isSearch == true}">
                <div class=" block px-2 py-2">
                    <div class="custom-underline-container">
                        <div class="custom-underline-text">
                            <a href="#"> HOME</a>
                        </div>
                        <div class="custom-underline"></div>
                    </div>
                </div>
                <div class=" block px-2 py-2">
                    <div class="custom-underline-container">
                        <div class="custom-underline-text">
                            <a href="#"> HOT GOSSIP</a>
                        </div>
                        <div class="custom-underline"></div>
                    </div>
                </div>
                <div class=" block px-2 py-2">
                    <div class="custom-underline-container">
                        <div class="custom-underline-text">
                            <a href="#">KOREA</a>
                        </div>
                        <div class="custom-underline"></div>
                    </div>
                </div>
               <div class="block py-2 hover:bg-red-500" :class = "{'bg-red-500':isHover === 'lifestyle'}" @mouseover="setHover('lifestyle')" @mouseleave="clearHover()">
                    <a  class="px-2" href="#">
                        LIFESTYLE
                    </a>
                    <Icon name="gridicons:dropdown" size="25"/>
                    <div class="absolute bg-red-500 w-[120.5px]" @mouseleave="clearHover()" v-if="isHover === 'lifestyle'">
                       <Dropdown :items="lifestyle"></Dropdown>
                    </div>
                </div>
               <div class="block py-2" :class = "{'bg-red-500':isHover === 'filmmusik'}" @mouseover="setHover('filmmusik')" @mouseleave="clearHover()">
                    <a class="px-2" href="#">
                        FILM & MUSIK
                    </a>
                    <Icon name="gridicons:dropdown" size="25"/>
                    <div class="absolute bg-red-500 w-[156px]" @mouseleave="clearHover()" v-if="isHover === 'filmmusik'">
                       <Dropdown :items="filmMusik"></Dropdown>
                    </div>
               </div>
               <div class="block py-2">
                    <div class="custom-underline-container">
                        <div class="custom-underline-text">
                            <a  class="px-2" href="#"> VIRAL</a>
                        </div>
                        <div class="custom-underline"></div>
                    </div>
                </div>
                <div class=" block py-2">
                    <div class="custom-underline-container">
                        <div class="custom-underline-text">
                            <a class="px-2" href="#"> QUIZ </a>
                        </div>
                        <div class="custom-underline"></div>
                    </div>
                </div>
                <div class="block py-2" :class = "{'bg-red-500':isHover === 'lainnya'}" @mouseover="setHover('lainnya')" @mouseleave="clearHover()">
                    <a class="px-2" href="#">
                        LAINNYA
                    </a>
                    <Icon name="gridicons:dropdown" size="25"/>
                    <div class="absolute bg-red-500 w-[115px]" @mouseleave="clearHover()" v-if="isHover === 'lainnya'">
                       <Dropdown :items="lainnya"></Dropdown>
                    </div>
               </div>
               <div class="ml-10 flex gap-4">
                <Icon name="mdi:youtube" size="40" color="white"/>
                <Icon name="mdi:user"  size="40" color="white"/>
                <Icon name="material-symbols:search" size="40" color="white" @click="isSearch =! isSearch"/>
            </div>
            </nav>
            
            </div>
        </header>
</template>

<script lang="ts">
import Dropdown from './Dropdown.vue';


export default{
    name:'NavigationBar',

    components:{
        Dropdown
    },
        data() {
            return {
                lainnya:[
                {
                            url: '#SOROT',
                            name: 'SOROT'
                        },
                        {
                            url:'#SELEB',
                            name: 'SELEB',
                        },
                        {
                            url: '#!NSERT STORIES',
                            name: '!NSERT STORIES',
                        },                    
                        {
                            url: '#VIDEO',
                            name: 'VIDEO'
                        },
                        {
                            url: '#FOTO',
                            name: 'FOTO'
                        },
                        {
                            url: '#INFOGRAFIS',
                            name: 'INFOGRAFIS'
                        },
                        {
                            url: '#INDEKS',
                            name: 'INDEKS'
                        },
            ],
            lifestyle:[
                        {
                            url:'#IPEDIA',
                            name:'I-PEDIA'
                        },
                        {
                            url: '#ZODIAC',
                            name: 'ZODIAC'
                        },
                        {
                            url:'#ROYALFAMILY',
                            name: 'ROYAL FAMILY'
                        },
                        {
                            url: '#FASHION&BEAUTY',
                            name: 'FASHION & BEAUTY'
                        }
                    ],
                    filmMusik:
                    [
                        {
                            url: '#LIRIK LAGU',
                            name: 'LIRIK LAGU'
                        },
                    ],
            isHover: '',
            isSearch: false,
            }
           
            },
            methods: {
                setHover(section: string){
                    this.isHover = section;
                },
                clearHover(){
                    this.isHover = '';
                }
            },
        }
// export default{
//     name:'Navbar',
//     setup() {
//         data:{
//             return{
//             isOpen: ref(false),

//             items:[
//                 {
//                             url: '#HOME',
//                             name: 'HOME'
//                 },
//                 {
//                             url: '#HOT GOSSIP',
//                             name: 'HOT GOSSIP'
//                 },
//                 {
//                             url: '#KOREA',
//                             name: 'KOREA'
//                 },  
//                 {
//                     name:'LIFESTYLE',
//                     children:[
//                         {
//                             url:'#IPEDIA',
//                             name:'I-PEDIA'
//                         },
//                         {
//                             url: '#ZODIAC',
//                             name: 'ZODIAC'
//                         },
//                         {
//                             url:'#ROYALFAMILY',
//                             name: 'ROYAL FAMILY'
//                         },
//                         {
//                             url: '#FASHION&BEAUTY',
//                             name: 'FASHION & BEAUTY'
//                         }
//                     ]
//                 },
//                 {
//                     url: '#FILM & MUSIK',
//                     name: 'FILM & MUSIK',
//                     children:[
//                         {
//                             url: '#LIRIK LAGU',
//                             name: 'LIRIK LAGU'
//                         },
//                     ]
//                 },
//                 {
//                     url:'#VIRAL',
//                     name: 'VIRAL'
//                 },
//                 {
//                     url: '#QUIZ',
//                     name: 'QUIZ',
//                 },
                
//                 {
//                     url: '#LAINNYA',
//                     name: 'LAINNYA',
//                     children:[
//                         {
//                             url: '#SOROT',
//                             name: 'SOROT'
//                         },
//                         {
//                             url:'#SELEB',
//                             name: 'SELEB',
//                         },
//                         // {
//                         //     url: '#!NSERT STORIES',
//                         //     name: '!NSERT STORIES',
//                         // },                    
//                         {
//                             url: '#VIDEO',
//                             name: 'VIDEO'
//                         },
//                         {
//                             url: '#FOTO',
//                             name: 'FOTO'
//                         },
//                         {
//                             url: '#INFOGRAFIS',
//                             name: 'INFOGRAFIS'
//                         },
//                         {
//                             url: '#INDEKS',
//                             name: 'INDEKS'
//                         },      
//                     ],
//                 }
//             ]
//             }
//       
       
//     }
// }
// }
</script>
<style>
 .custom-underline-container {
      position: relative;
      display: inline-block;
    }

    .custom-underline-text {
      color: white; /* Initial color of the text */
      cursor: pointer; /* Add pointer cursor for better UX */
    }

    .custom-underline::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px; /* Adjust the thickness of the underline */
      background-color: white; /* Color of the underline */
      transform: scaleX(0); /* Initially, set the scale to 0 to hide the underline */
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }

    .custom-underline-container:hover .custom-underline::after {
      transform: scaleX(1); /* Expand the underline on container hover */
      transform-origin: bottom left;
    }
</style>