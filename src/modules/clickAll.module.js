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
    }
    trigger() {
        const itemMunuClickAll = document.querySelector('.menu-item[data-type="' + this.type + '"]');
        if (itemMunuClickAll.textContent === this.text) {
            itemMunuClickAll.textContent = this.textRemove;
            //ToDo Отобразим статистику
            this.printStatistic();
        } else {
            itemMunuClickAll.textContent = this.text;
            //ToDo Убрать статистику
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
        if (!this.storage) {
            this.storage = [{ name: 'body', count: 0 }];
        }
        contextMenu.menuObjct.forEach(element => {
            const index = this.storage.findIndex(e => e.name === element['name']);
            if (index < 0) {
                this.storage.push({ name: element['name'], count: 0 });
            }
        });
        console.log(this.storage);
        this.setStorage();
    }

    printStatistic() {
        this.getStorage();
        const countElementStatistic = this.storage.length;
        console.log(countElementStatistic);
        //const ce
    }

}