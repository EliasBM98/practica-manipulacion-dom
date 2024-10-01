/*PSEUDOCODIGO

    inicio - funcion1
        crear array de objetos imagenesHeader
            introducir imagen (url)
            introducir introducir alt
            introducir title
        leer array imagenesHeader
            seleccionar una imagen aleatoria del array (elegirla con math)
            acceder a la imagen en HTML
                colocar la imagen en el header
    fin - funcion1

    inicio - funcion 2
        crear array de objetos imagenesGaleria
            introducir imagen (url)
            introducir introducir alt
            introducir title (descripción que se tiene que mostrar en galeria)

        leer array imagenesGaleria
            recorrer array
                colocar cada imagen en una tarjeta de galeria
    fin - funcion2*/
        

//HEADER
const imagen = document.getElementById("fotoCabecera");

let imagenesHeader = [
    {   src: "assets/fotos-banners/1.jpg",
        alt: "Sol atardecer",
        title: "Puesta de sol",
    },
    {   src: "assets/fotos-banners/2.jpg",
        alt: "Cielo y globos aerostaticos",
        title: "Globos aerostaticos flotando",
    },
    {   src:"assets/fotos-banners/7.jpg",
        alt: "Cielo y pajaros",
        title: "Pajaros volando sobre las nuves",
    },
    {   src:"assets/fotos-banners/8.jpg",
        alt: "Clave baja planta",
        title: "Planta oscuridad",
      },
]


const imagenAleatoria=()=>{
    
  let aleatoria = Math.floor(Math.random() * imagenesHeader.length);

    imagen.src = imagenesHeader[aleatoria].src;

}



//GALERIA
const foto = document.getElementById("imgTarjeta")
const coment = document.getElementById("comentario")
let imagenesGaleria = [
    {   src:"assets/fotos-viajes/viajes-2.jpg",
        alt:"Playa del caribe",
        title: "Pasarela hacia casas dentro del mar"
    },
    {   src:"assets/fotos-viajes/viajes-3.jpg",
        alt:"Carteles ciudades",
        title: "Carteles con direcciones a todas las ciudades"
    },
    {   src:"assets/fotos-viajes/viajes-4.jpg",
        alt:"Detalle decoración",
        title: "Detalle decoración Plaza España, Sevilla"
    },
    {   src:"assets/fotos-viajes/viajes-5.jpg",
        alt: "Puente",
        title: "Puente Plaza España, sevilla"
    },
    {   src:"assets/fotos-viajes/viajes-6.jpg",
        alt:"Paseo maritimo",
        title: "Paseo maritimo junto a un acantilado"
    },
    {   src:"assets/fotos-viajes/viajes-7.jpg",
        alt:"Castillo",
        title: "Castillo antiguo en lo alto de la montaña"
    },
]


const crearCard=()=>{
    
    
    
}


const pintarGaleria=()=>{

    imgTarjeta.src = imagenesGaleria[0].src;







    //TODOLIST

    // recorrer el array
        // crear los elementos para cada card
        // añadir al fragment

    //volcar el fragment en .....

}






//Invocaciones
//header
imagenAleatoria()
//Galeria
pintarGaleria()
crearCard()







