//MUESTRA EN VENTANA RL NUMERO DE TRLEFONO

function telefono(){
    alert("Mi numero de contacto es: 1136312427")
}

//ESTA ASOCIADA A UN BOTON, SUMA LOS LIKE QUE VAN DANDO
function sumarLike(){

    let cantLike = document.getElementById('likes').innerHTML;
    cantLike = parseInt(cantLike);
    let suma = cantLike + 1;
    document.getElementById('likes').innerHTML = suma;
    alert("Gracias por darme Like");

}



//MODO OSCURO SI ESTA CHECKEADO Y SI NO VUELVE AL MODO NORMAL

var mOscuro= document.getElementById("checkModOscuro");
mOscuro.addEventListener("change",modoOscuro);



function modoOscuro(){
    if (mOscuro.checked){
        document.getElementById("header").setAttribute("class","text-bg-dark p-3");
        document.getElementById("principal").setAttribute("class","text-bg-dark p-3");
    }
    else{
        document.getElementById("header").removeAttribute("class","text-bg-dark p-3");
        document.getElementById("principal").removeAttribute("class","text-bg-dark p-3");
    }
}


