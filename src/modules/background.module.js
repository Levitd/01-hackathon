import { Module } from '../core/module'

export class BackgroundModule extends Module {
    trigger() {
        document.body.style.backgroundColor = `rgb(${this.getRGBColor()})`;
    }

    getOneColor(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getRGBColor() {
        return `${this.getOneColor(255)},${this.getOneColor(255)},${this.getOneColor(255)}`;
    }
}