function accesoPrivado(){

const clave = prompt("Introduce la clave de acceso");

if(clave==="ganz333"){

window.location.href="area_privada_45_videos.html";

}else if(clave!==null){

alert("Contraseña incorrecta o membresía vencida.");

}

}

/*==========================
ANIMACIONES AL HACER SCROLL
===========================*/

const elementos=document.querySelectorAll(
".card,.numbers div,.gallery img,.premium,.video,.hero-left,.hero-right"
);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
entry.target.style.transition=".8s ease";

}

});

},{threshold:.15});

elementos.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";

observer.observe(el);

});

/*==========================
NAVBAR
===========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.85)";
header.style.backdropFilter="blur(25px)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(0,0,0,.45)";
header.style.boxShadow="none";

}

});

/*==========================
EFECTO PARALLAX HERO
===========================*/

const heroImage=document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

/*==========================
HOVER TARJETAS
===========================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,123,0,.18),
#141414 65%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background=
"linear-gradient(180deg,#171717,#0d0d0d)";

});

});

/*==========================
CONTADOR
===========================*/

const numeros=document.querySelectorAll(".numbers h2");

const iniciarContador=()=>{

numeros.forEach(numero=>{

const texto=numero.innerText;

const valor=parseInt(texto);

if(isNaN(valor)) return;

let actual=0;

const intervalo=setInterval(()=>{

actual++;

numero.innerText=actual+"+";

if(actual>=valor){

numero.innerText=texto;

clearInterval(intervalo);

}

},25);

});

};

const bloque=document.querySelector(".numbers");

const observer2=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

iniciarContador();

observer2.disconnect();

}

});

});

observer2.observe(bloque);

/*==========================
BOTONES
===========================*/

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

});

});

/*==========================
AÑO AUTOMÁTICO
===========================*/

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" GONZA MINDSET";

}
