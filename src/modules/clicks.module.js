import { Module } from '../core/module'
import { numFormat } from '../utils';
import { CustomMessage } from './message.module';
import { TimerModule } from './timer.module';

const customMessage = new CustomMessage('customMessage', 'Вызвать сообщение');
//ToDo импорт сообщений, и потом в эти сообщения выводить 

export class ClicksModule extends Module {
    constructor(type, text, timerMSec, contextMenu) {
        super(type, text);
        this.timerinMiliSec = timerMSec;
        this.contextMenu = contextMenu;
        console.log(this.contextMenu)
    }
    trigger(event) {
        localStorage.setItem(`countClickArray`, JSON.stringify([1, 0, 0]));
        const setTtimeoutID = window.setTimeout(this.stopClick, this.timerinMiliSec, this.timerinMiliSec, this.messageClick);
    }
    stopClick(times, callback) {
        const countClickArray = JSON.parse(localStorage.getItem(`countClickArray`));
        console.log(countClickArray, times);
        callback(`За ${numFormat(times / 1000, 0)} секунд вы кликнули: ${countClickArray[1]} раз левой и ${countClickArray[2]} раз правой кнопкой мыши.`);
    }
    messageClick(text) {
        console.log(text);
        customMessage.createBlockMessage(text);
        customMessage.deleteBlock(5000);
    }
}