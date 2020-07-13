import {
  createApp
} from './src/runtime-canvas';
import App from './src/App';
import { getCanvasRootContainer } from './src/Game';
import './assets/style.css';

createApp(App).mount(getCanvasRootContainer());