import { Module } from '../core/module'
import { CustomMessage } from './message.module';
import { disableItemMenu } from '../utils';

const customMessage = new CustomMessage('customMessage', 'Вызвать сообщение');


export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.type = type;
    }
    trigger() {
        disableItemMenu(this.type);
        this.createElement('new');
    }

    createElement(newform) {
        const body = document.querySelector('body');
        const element = this.createHTML(newform);

        body.insertAdjacentHTML("beforeend", element);
        if (newform === 'new') {
            body.addEventListener('submit', (event) => {
                event.preventDefault();
                const input = document.querySelector('.timer_input')
                if (input !== '') {
                    const valueInput = Number(input?.value);
                    if (valueInput > 0 && Number.isInteger(valueInput) == true) {

                        this.startTime(valueInput, newform);
                    }
                }

            })
        }
    }
    createHTML(newform) {
        if (newform === 'new') {
            return `<form class="timer-block">
            
            <span class="timer-span"></span>
            
            <div class="timer-2">
            <input name="name" class="timer_input" type="number" placeholder="Введите любое число" value="10"
            min="1" max="1500" autofocus>
            <button type="submit" class="timer_button">Отправить</button>
            </div>
            </form>`;
        }
        else {
            return '<span class="timer-span"></span>';
        }
    }
    formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        return `${minutes}:${seconds}`;
    }
    startTime(time, newform) {
        const div2 = document.querySelector('.timer-2');
        div2?.remove();
        const span = document.querySelector('.timer-span');
        if (newform !== 'new')
            span.classList.add('timer-span-stand-alone');
        span.textContent = this.formatTime(time);

        let timerInterval = setInterval(() => {
            time -= 1;
            span.textContent = this.formatTime(time);

            if (time === -1) {
                clearInterval(timerInterval);
                if (newform === 'new') {
                    let divTimer = document.querySelector('.timer-block');
                    divTimer?.remove();
                    // Сообщение о завершении 
                    let messageAsk = 'Отсчет завершен'
                    customMessage.createBlockMessage(messageAsk);
                    customMessage.deleteBlock(5000);
                    disableItemMenu(this.type);
                } else {
                    span.remove();
                }
            }
        }, 1000);

        return timerInterval;
    }
}