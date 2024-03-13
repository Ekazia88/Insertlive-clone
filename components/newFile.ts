export default (await import('vue')).defineComponent({
name: 'Navbar',
setup() {
data: {
return {
isOpen: ref(false),

items: [
{
url: '#HOME',
name: 'HOME'
},
{
url: '#HOT GOSSIP',
name: 'HOT GOSSIP'
},
{
url: '#KOREA',
name: 'KOREA'
},
{
name: 'LIFESTYLE',
children: [
{
url: '#IPEDIA',
name: 'I-PEDIA'
},
{
url: '#ZODIAC',
name: 'ZODIAC'
},
{
url: '#ROYALFAMILY',
name: 'ROYAL FAMILY'
},
{
url: '#FASHION&BEAUTY',
name: 'FASHION & BEAUTY'
}
]
},
{
url: '#FILM & MUSIK',
name: 'FILM & MUSIK',
children: [
{
url: '#LIRIK LAGU',
name: 'LIRIK LAGU'
},
]
},
{
url: '#VIRAL',
name: 'VIRAL'
},
{
url: '#QUIZ',
name: 'QUIZ',
},

{
url: '#LAINNYA',
name: 'LAINNYA',
children: [
{
url: '#SOROT',
name: 'SOROT'
},
{
url: '#SELEB',
name: 'SELEB',
},
// {
//     url: '#!NSERT STORIES',
//     name: '!NSERT STORIES',
// },                    
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
}
]
};
// methods: {
//     function handlehover(Opened){
//     this.isOpen = Opened
//    }
// }
}
}
});
