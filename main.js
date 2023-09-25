function tocar(idElementoAudio) {
document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < ListaDeTeclas.length) {
    ListaDeTeclas[Contador].onclick = function(){
        tocar('#som_tecla-toim');
    };
    const classe = ListaDeTeclas[Contador].classList[1];
    console.log(classe);
    const idAudio = 'som_${classe}';
    Contador = Contador + 1;
console.log(contador);
}