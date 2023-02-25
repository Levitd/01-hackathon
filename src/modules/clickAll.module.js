import { Module } from '../core/module'
import { getStorage } from '../utils';
import { setStorage } from '../utils';

export class ClickAllModule extends Module {
    constructor(type, text, textRemove) {
        super(type, text);
        this.type = type;
        this.text = text;
        this.textRemove = textRemove;
        this.storage;
        this.itemMunuClickAll;
        this.winHeight;
    }
    trigger() {
        this.winHeight = window.innerHeight;
        this.itemMunuClickAll = document.querySelector('.menu-item[data-type="' + this.type + '"]');
        if (this.itemMunuClickAll.textContent === this.text) {
            this.itemMunuClickAll.textContent = this.textRemove;
            this.printStatistic();
        } else {
            this.defaultText(this.itemMunuClickAll, this.text);
        }
    }

    setStorage() {
        setStorage('countClickArrayAll', this.storage);
    }

    getStorage() {
        this.storage = getStorage(`countClickArrayAll`);
    }

    initObj(contextMenu) {
        this.getStorage();
        //console.log(this.storage[0]['name'], this.storage[0]['count'], this.storage[0]['text']);
        if (!this.storage || !this.storage[0]['name'] || !this.storage[0]['count'] || !this.storage[0]['text']) {
            this.storage = [{ name: 'body', count: 0, text: 'BODY' }];
        }
        contextMenu.menuObjct.forEach(element => {
            const index = this.storage.findIndex(e => e.name === element['name']);
            console.log(index, element);
            if (index < 0) {
                this.storage.push({ name: element['name'], count: 0, text: element['text'] });
            }
        });
        console.log(this.storage);
        this.setStorage();
    }

    printStatistic() {
        this.getStorage();
        const countElementStatistic = this.storage.length;
        const winHeight = window.innerHeight;

        console.log(countElementStatistic);
        const rootEl = document.createElement('div');
        rootEl.className = 'clickAll clickAll-conteiner';
        document.body.append(rootEl);

        let maxCount = 0;
        console.log(this.storage);
        this.storage.forEach((el) => {
            const divEl = document.createElement('div');
            divEl.className = `item_clickAll graph_${el['name']}`;
            rootEl.append(divEl);
            maxCount = (maxCount < el['count']) ? el['count'] : maxCount;
        });
        const scaleX = (this.winHeight - 100) / maxCount;
        setTimeout(() => {
            this.storage.forEach((el) => {
                const divEl = document.querySelector(`.graph_${el['name']}`);
                divEl.classList.add('item_clickAll_visible');
                divEl.style.height = `${el['count'] * scaleX}px`;
                const divE2 = document.createElement('div');
                const textDivCount = el['text'].indexOf('(');
                divE2.innerHTML = ((textDivCount > -1) ? el['text'].slice(0, textDivCount) : el['text']) + `<span class="countClick span_${el['name']}">${el['count']}</span>`;
                divE2.className = 'item_text';
                rootEl.append(divE2);
            });
        }, 10)
    }
    refresh() {
        console.log("refresh");
        const clickConteiner = document.querySelector('.clickAll-conteiner');
        console.log(clickConteiner);
        if (clickConteiner) {
            this.winHeight = window.innerHeight;
            this.storage = getStorage('countClickArrayAll');
            let maxCount = 0;
            this.storage.forEach((el) => {
                const countEl = clickConteiner.querySelector(`.span_${el['name']}`);
                countEl.textContent = el['count'];
                maxCount = (maxCount < el['count']) ? el['count'] : maxCount;
            });
            console.log(maxCount, this.winHeight);
            const scaleX = (this.winHeight - 100) / maxCount;
            this.storage.forEach((el) => {
                const countEl = clickConteiner.querySelector(`.graph_${el['name']}`);
                console.log(countEl, el['count'], scaleX);
                countEl.style.height = `${el['count'] * scaleX}px`;
            });
        }
    }

    defaultText(elem, text) {
        elem.textContent = text;
        const conteiner = document.querySelector('.clickAll-conteiner');
        if (conteiner)
            conteiner.remove();
    }

}