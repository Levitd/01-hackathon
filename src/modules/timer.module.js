import { Module } from '../core/module'

export class TimerModule extends Module {
    trigger(){
        let countDown = prompt('Введите колличество секунд:');

        let body = document.querySelector('./body');
        let divTimer = document.createElement('div');
        divTimer.className = 'timer';
    
        let div = document.createElement('div');
        div.className = 'num';

        let span = document.createElement('span')
        span.textContent = formatTime(countDown);

        body.prepend(divTimer);
        divTimer.prepend(div);
        div.prepend(span)

        startTime(countDown);
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);        
        let seconds = time % 60;        
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }      
        return `${minutes}:${seconds}`;
    }
    startTime(time){
        timerInterval = setInterval(() => {
            time -= 1;
            span.textContent = formatTime(time);
        
            if(time === -1){
                divTimer.remove();
            }
        }, 1000);
        return timerInterval;
    } 
    

}