import { Module } from '../core/module'

export class TimerModule extends Module {
    trigger(){      
        this.createElement();
    }
    createElement(){
        let body = document.querySelector('body');
        let element = `<div class="timer-block">
        <div class="timer-1">
        <span class="timer"></span>
        </div>
        <div class="timer-2">
        <input name="name" class="timer_input" type="text" placeholder="Введите любое число"  value="10"  >
        <button type="submit" class="timer_button">Отправить</button>
        </div>
        </div> `
    body.insertAdjacentHTML("beforeend", element);
    document.addEventListener('submit',(event) => {
        event.preventDefault();    
        let input = document.querySelector('.timer_input')
        const valueInput = input.value;
        console.log(event)
        if(valueInput){
            //this.startTime(valueInput);
            console.log(valueInput)
        }
    })
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
        let timerInterval = setInterval(() => {
            time -= 1;
            let span = document.querySelector('.timer')
            span.textContent = this.formatTime(time);
        
            if(time === -1){
                let divTimer = document.querySelector('.timer-block');
                clearInterval(timerInterval);
                divTimer.remove();
                
            }
        }, 1000);

        return timerInterval;
    } 
}