import { Module } from '../core/module'
import { numFormat } from '../utils';
import { CustomMessage } from './message.module';
import { TimerModule } from './timer.module';
import { disableItemMenu } from '../utils';

const customMessage = new CustomMessage('customMessage', 'Вызвать сообщение');
const timerModule = new TimerModule('timerModule', 'Таймер отсчета',);

export class ClicksModule extends Module {
    constructor(type, text, timerMSec, contextMenu) {
        super(type, text);
        this.type = type;
        this.timerinMiliSec = timerMSec;
        this.contextMenu = contextMenu;
    }
    trigger(event) {
        localStorage.setItem(`countClickArray`, JSON.stringify([1, 0, 0]));
        timerModule.createElement();
        disableItemMenu(this.type);
        timerModule.startTime(this.timerinMiliSec / 1000);
        setTimeout(this.stopClick, this.timerinMiliSec, this.timerinMiliSec, this.messageClick, this.type);
    }
    stopClick(times, callback, type) {
        const countClickArray = JSON.parse(localStorage.getItem(`countClickArray`));
        callback(`За ${numFormat(times / 1000, 0)} секунд вы кликнули: ${countClickArray[1]} раз левой и ${countClickArray[2]} раз правой кнопкой мыши.`, type);
    }
    messageClick(text, type) {
        customMessage.createBlockMessage(text);
        customMessage.deleteBlock(5000);
        disableItemMenu(type);
    }
}