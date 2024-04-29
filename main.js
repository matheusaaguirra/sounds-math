function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        console.log('elemento não encontrado');
    }
    
    if(elementos != null & elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('elemento não encontrado');  
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < listaDeTeclas.length; contador++){


    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const IdAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(IdAudio);
    }

    tecla.onkeydown = function(evento) {

        
        if(evento.code === 'space' || evento.code === 'enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove ('ativa');
    }
} 
    