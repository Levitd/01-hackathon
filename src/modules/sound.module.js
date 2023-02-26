import { Module } from '../core/module'

export class Sound extends Module{
    trigger(){
        this.createElementSound();
        this.randomSound();
    }
    //<button onclick="randomSound()">Random Sound</button>
    createElementSound(){
        let button = document.createElement('button');
        button.onclick = 'randomSound()';
        button.textContent = 'Random Sound'
        document.body.append(button)
    }
    randomSound = function() {
        let arrSound = ['1.mp3', '2.mp3', '3.mp3', '4.mp3'];
        let randomSound = Math.floor(Math.random() * arrSound.length);
        return new Audio(arrSound[randomSound]);
    }       
    
}