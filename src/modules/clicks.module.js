import { Module } from '../core/module'
import { numFormat } from '../utils';
//ToDo импорт сообщений, и потом в эти сообщения выводить 

export class ClicksModule extends Module {
    constructor(type, text, timerMSec, contextMenu) {
        super(type, text);
        this.timerinMiliSec = timerMSec;
        this.contextMenu = contextMenu;
        console.log(this.contextMenu)
    }
    trigger(event) {
        window.timerClickStart[0] = 1;
        console.log(window.timerClickStart, 'timerClickStart');

        const setTtimeoutID = window.setTimeout(this.stopClick, this.timerinMiliSec, this.timerinMiliSec, this.messageClick);
    }
    stopClick(times, callback) {
        console.log(window.timerClickStart, times);
        callback(`За ${numFormat(times / 1000, 0)} секунд вы кликнули: ${window.timerClickStart[1]} раз левой и ${window.timerClickStart[2]} раз правой кнопкой мыши.`);
        window.timerClickStart = [0, 0, 0];
    }
    messageClick(text) {
        console.log(text);
    }
}