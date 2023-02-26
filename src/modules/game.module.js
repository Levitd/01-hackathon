import { Module } from '../core/module'
import { getRGBColor } from '../utils'
import { ClickAllModule } from './clickAll.module'

const clickAllModule = new ClickAllModule('clickAllModule', `Отобразить статистику`, 'Убрать статистику');

export class ShapeGameModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger(e) {
        const conteiner = document.querySelector('.clickAll-conteiner');
        if (conteiner) {
            clickAllModule.defaultText(document.querySelector('.menu-item[data-type="' + clickAllModule.type + '"]'), clickAllModule.text)
        }
        this.clearArea()
        this.startGame()
        this.createShape()
        const block = this.createPlaceholder()
        document.body.append(block)

        document.querySelector('.shape-area').addEventListener('dragstart', e => {
            const { target } = e
            if (target.closest('.shape-area')) {
                target.classList.add('active');
                setTimeout(() => {
                    target.classList.add('hide')
                }, 0)
            }
        })

        document.querySelector('.shape-area').addEventListener('dragend', e => {
            const { target } = e
            target.classList.remove('hide');
        })

        document.querySelector('.placeholders').addEventListener('dragover', e => {
            e.preventDefault()
        })

        document.querySelector('.placeholders').addEventListener('drop', e => {
            const { target } = e
            let shape = document.querySelector('.active');
            const shapeClassname = shape.className.split(' ')[0]
            if (shapeClassname === target.className) {
                target.append(shape);
                target.style.backgroundColor = shape.style.backgroundColor
                shape.classList.remove('active')
                this.checkShapeArea()
            } else {
                return
            }
        })


    }

    startGame() {
        const startMessage = document.createElement('div')
        startMessage.className = 'start-message'
        const title = document.createElement('h1')
        title.className = 'shape-game-title'
        title.textContent = 'Правила игры'
        const text = document.createElement('p')
        text.className = 'shape-game-text'
        text.textContent = 'Переместите фигуры из левого ряда в соответсвущие серые формы правого ряда'
        startMessage.append(title, text)
        document.body.append(startMessage)
        setTimeout(() => {
            document.querySelector('.start-message').remove()
        }, 5000)
    }

    createPlaceholder() {
        const shapesPlaceholder = ['oval', 'square', 'circle', 'rectangle', 'cylinder',]
        const placeholders = document.createElement('div')
        placeholders.className = 'placeholders'
        shapesPlaceholder.forEach(shape => {
            const elem = document.createElement('div')
            elem.className = shape
            elem.style.background = 'grey'
            elem.style.marginBottom = '35px'
            placeholders.append(elem)
        })
        return placeholders
    }

    createShape() {
        const shapes = ['square', 'circle', 'cylinder', 'rectangle', 'oval']
        const shapesArea = document.createElement('div')
        shapesArea.className = 'shape-area'
        shapes.forEach(shape => {
            const elem = document.createElement('div')
            elem.className = shape
            elem.style.backgroundColor = `rgb(${getRGBColor()})`
            elem.style.marginBottom = '35px'
            elem.style.boxShadow = 'none'
            elem.style.overflow = 'hidden'
            elem.draggable = true
            shapesArea.append(elem)
        })
        console.log(shapesArea.childNodes.length)
        document.body.append(shapesArea)
    }

    clearArea() {
        const shapeArea = document.querySelector('.shape-area')
        const placeholder = document.querySelector('.placeholders')
        if (shapeArea) shapeArea.remove()
        if (placeholder) placeholder.remove()
    }

    checkShapeArea() {
        const shapeArea = document.querySelector('.shape-area')
        if (shapeArea.childNodes.length === 0) {
            this.clearArea()
            this.endGame()
        }
    }

    dontMatch() {
        const modal = document.createElement('div')
    }

    endGame() {
        const endMessage = document.createElement('div')
        endMessage.className = 'end-message'
        const title = document.createElement('h1')
        title.className = 'shape-end-title'
        title.textContent = 'Поздравляем Вы победили!'
        endMessage.append(title)
        document.body.append(endMessage)
        setTimeout(() => {
            document.querySelector('.end-message').remove()
        }, 3000)
    }
}