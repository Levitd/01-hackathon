import { Module } from '../core/module'
import { random } from '../utils';

export class BackgroundModule extends Module {
    constructor(type, text, timerMSec) {
        super(type, text);
        this.defaultColorBackground;
        this.timerinMiliSec = timerMSec;
    }
    trigger(event) {
        this.defaultColorBackground = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        document.body.style.backgroundColor = `rgb(${this.getRGBColor()})`;
        console.log(this.defaultColorBackground)
        const setTtimeoutID = window.setTimeout(this.defaulBackground, this.timerinMiliSec, this.defaultColorBackground);
    }
    defaulBackground(defaulColor) {
        console.log('defaulBackground', defaulColor);
        document.body.style.backgroundColor = defaulColor;
    }
    getRGBColor() {
        return `${random(0, 255)},${random(0, 255)},${random(0, 255)}`;
    }
}