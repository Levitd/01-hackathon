import { setTimeout } from 'core-js';
import { Module } from '../core/module';


export class CustomMessage extends Module{
    trigger(){
        const userMessage = prompt('Введите любое сообщение');
        this.createBlockMessage(userMessage);
        this.deleteBlock();
    }
    createBlockMessage(messageAsk) {
        const blockMessage = document.createElement('div');
        const blockText = document.createElement('span');
        blockMessage.className = 'custom-block__message';
        blockText.className = 'custom-text__message';
        blockText.textContent = messageAsk;
        blockMessage.append(blockText);
        return document.body.append(blockMessage);
    }
    deleteBlock(){
        const blockMessage = document.querySelector('.custom-block__message')
        setTimeout(() =>{
            blockMessage.remove()
        }, 3000);
    }
}