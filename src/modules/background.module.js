import { Module } from '../core/module'
import { getRGBColor } from '../utils';

export class BackgroundModule extends Module {
    constructor(type, text, timerMSec) {
        super(type, text);
        this.defaultColorBackground;
        this.timerinMiliSec = timerMSec;
        this.defaultColorBackground = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    }
    trigger(event) {

        document.body.style.backgroundColor = `rgb(${getRGBColor()})`;
        setTimeout(this.defaulBackground, this.timerinMiliSec, this.defaultColorBackground);
    }
    defaulBackground(defaulColor) {
        document.body.style.backgroundColor = defaulColor;
    }
}