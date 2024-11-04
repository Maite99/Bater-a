'use strict'

window.addEventListener("load", () => {
    // mapa de teclas con os id de los sonidos
    const soundMap = {
        65: document.querySelector("#clap"),
        83: document.querySelector("#hihat"),
        68: document.querySelector("#kick"),
        70: document.querySelector("#openhat"),
        71: document.querySelector("#boom"),
        72: document.querySelector("#ride"),
        74: document.querySelector("#snare"),
        75: document.querySelector("#tom"),
        76: document.querySelector("#tink")
    }

    // evento keydown
    document.addEventListener("keydown", (e) => {
        // se obtiene el audio asociado a la tecla
        const sound = soundMap[e.keyCode];
        if(sound){
            // se reproduce el sonido
            sound.play();
            // para cambiar el borde cuando se pulsa la tecla
            const activeBox = document.querySelector(`.cajaIndividual[data-key="${e.keyCode}"]`);
            if(activeBox) {
                activeBox.style.border = "4px solid yellow"
                setTimeout(() => {
                    activeBox.style.border = ""
                }, 200)
            }
           
        }
    })




})