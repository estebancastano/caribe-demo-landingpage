export async function GET({params, request}) {
  return new Response(
    JSON.stringify({
       Cesar: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Valledupar.png',
       Córdoba: "https://www.triviantes.com/wp-content/uploads/2023/05/departamento-cordoba-8.jpg",
       "La Guajira": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Jl3iIcJDYzTKwaqvW5iQ52iEG8YKvIjv2Q&s",
       Magdalena: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/196000/196388-Costa-Caribe.jpg",
       Atlántico: "https://cdn.colombia.com/sdi/2020/06/16/colombia-fortuna-dos-mares-838917.jpg",
       Bolívar: "https://www.triviantes.com/wp-content/uploads/2022/07/bolivar-1.jpg",
       Sucre: "https://www.ecoturismocolombia.com/wp-content/uploads/2023/05/Isla-Titipan-en-el-Golfo-de-Morrosquillo-en-Colombia-viajes-de-sol-y-playa.jpg"
    })
  )
}