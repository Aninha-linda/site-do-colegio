function TocaSomPom () {
document.querySelector('#som-teclado-pom').play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < 9){
    ListaDeTeclas[0].onclick = TocaSomPom;
contador = contador + 1;
console.log(contador);
}