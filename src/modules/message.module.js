import { setTimeout } from 'core-js';
import { Module } from '../core/module';


export class CustomMessage extends Module {
    trigger() {
        const userMessage = this.randomMessage(); //prompt('Введите любое сообщение')
        this.createBlockMessage(userMessage);
        this.deleteBlock(3000);
    }
    createBlockMessage(messageAsk) {
        let blockMessage = document.querySelector(`.custom-block__message`);
        if (blockMessage)
            blockMessage.remove();
        blockMessage = document.createElement('div');
        const blockText = document.createElement('span');
        blockMessage.className = 'custom-block__message';
        blockText.className = 'custom-text__message';
        blockText.textContent = messageAsk;
        blockMessage.append(blockText);
        return document.body.append(blockMessage);
    }
    deleteBlock(timer) {
        const blockMessage = document.querySelector('.custom-block__message')
        setTimeout(() => {
            blockMessage.remove()
        }, timer);
    }
    randomMessage() {
        let arr = [
            `Иксы — графический интерфейс в Unix, реже — обозначение операционной системы Linux.`,
            `Гит — инструмент для создания системы управления версиями с распределенной архитектурой. Стоит также знать про GitHub — это онлайн-сервис хостинга репозиториев.`,
            `Плюсы — язык программирования C++.`,
            `Пых, пыха — язык программирования PHP.`,
            `Мускул — база данных MySQL.`,
            `Мержить — соединять версии сорцов на гите.`,
            `Костыль — быстрое исправление в коде, на скорую руку, обычно некачественное.`,
            `Песочница — специальная среда для безопасного выполнения программ либо раздел под таким названием на профильных форумах для новичков.`,
        ]

        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
}