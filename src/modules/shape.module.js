import {Module} from '../core/module'
import { randomCoordinates } from '../utils';
import { random } from '../utils'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }


    trigger(e) {
        const shapes = ['square', 'circle', 'rhombus', 'cylinder', 'rectangle', 'oval']
        const newShape = Math.floor(Math.random() * shapes.length)
        console.log(newShape)
        const randomX = randomCoordinates(window.innerWidth)
        const randomY = randomCoordinates(window.innerHeight)
        const shape = document.createElement('div')
        shape.className = `${shapes[newShape]} shape-active`
        shape.style.position = 'absolute'
        shape.style.top = randomY + "px";
        shape.style.left = randomX + "px";
        shape.style.backgroundColor = `rgb(${this.getRGBColor()})`
        document.body.append(shape)

        setTimeout(() => {
            shape.remove()
        },5000)
    }

    getRGBColor() {
        return `${random(0, 255)},${random(0, 255)},${random(0, 255)}`;
    }

}