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
        const countItem = this.root.querySelectorAll('.menu-item').length;
        console.log('ContextMenu', 'open', mouseX, mouseY, countItem);

        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        const maxHeight = Math.max(this.root.offsetHeight, countItem * 50);// countItem * 50;
        const maxWidth = Math.max(this.root.offsetWidth, 150);
        console.log(maxWidth, maxHeight);

        this.root.style.left = (winWidth - mouseX >= maxWidth + 50) ? `${mouseX}px` : `${mouseX - maxWidth}px`;
        this.root.style.top = (winHeight - mouseY >= maxHeight + 50) ? `${mouseY}px` : `${mouseY - maxHeight}px`;

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