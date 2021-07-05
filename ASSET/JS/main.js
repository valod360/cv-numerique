let chopper = document.getElementById('chopper');
let ussop = document.getElementById('usopp');
let nami = document.getElementById('nami');
let robin = document.getElementById('robin');
function atelier(element1, element4){
    element1.addEventListener("mouseover", function(){element1.style.width = '52%';});
    element1.addEventListener("mouseout", function(){element1.style.width = '50%';});
    element4.addEventListener("mouseover", function(){element4.style.width = '52%';});
    element4.addEventListener("mouseout", function(){element4.style.width = '50%';});
}
function bibli(element2, element3){
    element2.addEventListener("mouseover", function(){element2.style.width = '160%';});
    element2.addEventListener("mouseout", function(){element2.style.width = '150%';});
    element3.addEventListener("mouseover", function(){element3.style.width = '52%';});
    element3.addEventListener("mouseout", function(){element3.style.width = '50%';});
}
function cuisine(element5, element6){
    element5.addEventListener("mouseover", function(){element5.style.width = '42%';});
    element5.addEventListener("mouseout", function(){element5.style.width = '40%';});
    element6.addEventListener("mouseover", function(){element6.style.width = '72%';});
    element6.addEventListener("mouseout", function(){element6.style.width = '70%';});
}