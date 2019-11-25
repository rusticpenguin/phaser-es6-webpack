import idiom from 'idiom.js';
import { englishMenuText } from './text/gametext';

const lang = idiom({
  default: {
    menuTitle: englishMenuText.GAME_TITLE,
    menuStart: englishMenuText.MENU_START
  },
  'pt-BR': { menuTitle: 'BRAZILLL' }
});

export default lang(window.navigator.language);
