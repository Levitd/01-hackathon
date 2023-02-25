import { Module } from '../core/module'
import { getRGBColor } from '../utils';

export class BackgroundModule extends Module {
    constructor(type, text, timerMSec) {
        super(type, text);
        this.defaultColorBackground;
        this.timerinMiliSec = timerMSec;
        //this.shapes = ['square', 'triangle', 'triangle']
        this.defaultColorBackground = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    }
    trigger(event) {

        document.body.style.backgroundColor = `rgb(${getRGBColor()})`;
        console.log(this.defaultColorBackground)
        const setTtimeoutID = window.setTimeout(this.defaulBackground, this.timerinMiliSec, this.defaultColorBackground);
    }
    defaulBackground(defaulColor) {
        console.log('defaulBackground', defaulColor);
        document.body.style.backgroundColor = defaulColor;
    }
}