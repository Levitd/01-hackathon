import { Menu } from './core/menu'
import { Module } from './core/module';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

        this.selector = selector;
        this.root = document.querySelector(this.selector);

        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.open(event);
        })
    }

    open(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        console.log('ContextMenu', 'open', mouseX, mouseY, this.root);
        this.root.style.left = `${mouseX}px`;
        this.root.style.top = `${mouseY}px`;
        this.root.classList.remove('d-none');
    }

    close() {
        console.log('ContextMenu', 'close');
        this.root.classList.add('d-none');
    }

    menuHtml(type) {
        this.root.classList.add('d-none');
        const itemITML = type.toHTML();
        this.root.innerHTML = this.root.innerHTML + itemITML;
    };
    add(type) {
        if (type instanceof Module)
            this.menuHtml(type);
    }
};