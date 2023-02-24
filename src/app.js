import './styles.css';
import './menu.css';

import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';

const contextMenu = new ContextMenu('.menu');

const backgroundModule = new BackgroundModule('backgroundModule', 'Случайный фон');
contextMenu.add(backgroundModule);

const clicksModule = new ClicksModule('clicksModule', 'Аналитика кликов');
contextMenu.add(clicksModule);

const shapeModule = new ShapeModule('shapeModule', 'Случайная фигура');
contextMenu.add(shapeModule);


// const menuObj = [
//     { type: clicksModule, text: 'Аналитика кликов ' },
//     { type: shapeModule, text: 'Случайная фигура' },
//     { type: 3, text: 'Таймер отсчета' },
//     { type: 4, text: 'Случайный звук' },
//     { type: backgroundModule, text: 'Случайный фон' },
//     { type: 6, text: 'Кастомное сообщение' },
// ]
//contextMenu.add(menuObj);

