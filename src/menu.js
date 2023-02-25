import { Menu } from './core/menu'
import { Module } from './core/module';
import { getStorage } from './utils';
import { setStorage } from './utils';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

        this.selector = selector;
        this.root = document.querySelector(this.selector);

        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.countClick('right', event);
            this.open(event);
        })
        this.menuObjct = [];
    }
    click(event) {
        const type = event.target.dataset.type;
        const index = this.menuObjct.findIndex(e => e.name === type);
        this.menuObjct[index]['type'].trigger(event);
    }


    open(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const countItem = this.root.querySelectorAll('.menu-item').length;
        console.log('ContextMenu', 'open', mouseX, mouseY, countItem);

        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        const maxHeight = Math.max(this.root.offsetHeight, countItem * 50);// countItem * 50;
        const maxWidth = Math.max(this.root.offsetWidth, 225);
        console.log(maxWidth, maxHeight);

        this.root.style.left = (winWidth - mouseX >= maxWidth + 50) ? `${mouseX}px` : `${mouseX - maxWidth}px`;
        this.root.style.top = (winHeight - mouseY >= maxHeight + 50) ? `${mouseY}px` : `${mouseY - maxHeight}px`;

        this.root.classList.remove('d-none');
    }

    close() {
        console.log('ContextMenu', 'close');
        this.root.classList.add('d-none');
    }

    countClick(button, event) {
        const elementClick = event.target
        console.log(elementClick);
        const countClickArrayAll = getStorage(`countClickArrayAll`);
        if (countClickArrayAll) {
            if (elementClick.tagName === 'LI') {
                const elMenuClick = elementClick.dataset.type;
                const index = countClickArrayAll.findIndex(e => e.name === elMenuClick);
                if (index > -1) {
                    const countClick = countClickArrayAll[index].count;
                    countClickArrayAll[index].count = countClick + 1;
                    setStorage(`countClickArrayAll`, countClickArrayAll);
                }
            } else if (elementClick.tagName === 'BODY') {
                const index = countClickArrayAll.findIndex(e => e.name === 'body');
                if (index > -1) {
                    const countClick = countClickArrayAll[index].count;
                    countClickArrayAll[index].count = countClick + 1;
                    setStorage(`countClickArrayAll`, countClickArrayAll);
                }
            }
        }
        const countClickArray = getStorage('countClickArray'); //JSON.parse(localStorage.getItem(`countClickArray`));
        if (countClickArray && Number(countClickArray[0]) === 1) {
            const leftOrRight = (button === 'left') ? 1 : 2;
            countClickArray[leftOrRight] = Number(countClickArray[leftOrRight]) + 1;
            setStorage(`countClickArray`, countClickArray);
            // localStorage.setItem(`countClickArray`, JSON.stringify(countClickArray));
        }
    }

    menuHtml(type) {
        this.root.classList.add('d-none');
        const itemITML = type.toHTML();
        this.root.innerHTML = this.root.innerHTML + itemITML;
    };
    add(type) {
        if (type instanceof Module)
            this.menuHtml(type);
        this.menuObjct.push({ name: type['type'], type: type });
    }
};