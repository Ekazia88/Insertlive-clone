<template>
                        <div v-for="(item,i) in items" :key="i" class="px-2 py-2">
                            <router-link to={{item.url}}>
                                <a href="" class="hover:text-gray-200">
                                    {{ item.name }}
                                </a>
                            </router-link>
                        </div>
</template>

<script lang="ts">
export default {
    name: 'Dropdown',
    props:['name','items','url'],
       data(){
        return{
            isHover: false
        }
        }
    }
</script>

<style scoped>

</style>