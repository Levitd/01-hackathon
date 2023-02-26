import { Module } from '../core/module'
import { disableItemMenu } from '../utils';


export class SoundModule extends Module{
    constructor(type, text) {
        super(type, text);
        this.type = type;
    }
    trigger(){ 
        disableItemMenu(this.type);

        this.createElementSound();
        this.randomSound();
        this.deleteElement();    

    }
    createElementSound(){
        let figure = document.createElement('figure');
        let audio = document.createElement('audio');
        audio.src = this.randomSound();
        audio.controls = 'true';
        audio.autoplay = 'true';

        figure.append(audio);
        document.body.append(figure);
    }
    randomSound() {
        let arr = [
            'https://zvukogram.com/mp3/p5/3467/korotkaya-melodiya-veseloe-otkryitie-animirovannyiy-fonovyiy-zvuk-igryi-40627.mp3',
            'https://zvukogram.com/mp3/cats/1194/pornhub-intro-zastavka-dlya-video.mp3',
            'https://zvukogram.com/mp3/p5/3551/ritmichnaya-melodiya-vibriruyuschiy-byistryiy-dostupnyiy-elektronnyiy-korotkiy-saundtrek-38584.mp3',
            'https://zvukogram.com/mp3/cats/1036/korotkaya-melodiya-na-balalayke.mp3',
        ]

        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
    deleteElement(){
        let element = document.querySelector('audio');
        element.addEventListener('ended', (event)=>{
            let a = document.querySelector('figure');
            disableItemMenu(this.type);

            a.remove()
        });
    }       
    
}