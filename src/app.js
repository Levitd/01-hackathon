import './styles.css';
import './menu.css';

import { numFormat } from './utils';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { TimerModule } from './modules/timer.module';
import { CustomMessage } from './modules/message.module';
import { SoundModule } from './modules/sound.module';
import { ClickAllModule } from './modules/clickAll.module';

const contextMenu = new ContextMenu('.menu');

const timerBackgroundColor = 2000;
const addMessageBackground = (timerBackgroundColor > 0) ? ` (${numFormat(timerBackgroundColor / 1000, 0)} сек)` : '';
const backgroundModule = new BackgroundModule('backgroundModule', `Случайный фон${addMessageBackground}`, timerBackgroundColor);
contextMenu.add(backgroundModule);

const timerClickAnalize = 5000;
const addMessageClick = (timerClickAnalize > 0) ? ` (${numFormat(timerClickAnalize / 1000, 0)} сек)` : '';
const clicksModule = new ClicksModule('clicksModule', `Аналитика кликов${addMessageClick}`, timerClickAnalize, contextMenu);
contextMenu.add(clicksModule);

const shapeModule = new ShapeModule('shapeModule', 'Случайная фигура');
contextMenu.add(shapeModule);

const timerModule = new TimerModule('timerModule', 'Таймер отсчета',);
contextMenu.add(timerModule);

const customMessage = new CustomMessage('customMessage', 'Вызвать сообщение');
contextMenu.add(customMessage);

const soundModule = new TimerModule('soundModule', 'Случайный звук',);
contextMenu.add(soundModule);

const clickAllModule = new ClickAllModule('clickAllModule', `Отобразить статистику`, 'Убрать статистику');
contextMenu.add(clickAllModule, clickAllModule.refresh);
clickAllModule.initObj(contextMenu);

