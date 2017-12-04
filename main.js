const keyboard = {
	layouts: {
		en: {
			topRow: ['q','w','e','r','t','y','u','i','o','p','[',']'],
			middleRow: ['a','s','d','f','g','h','j','k','l',';','\''],
			bottomRow: ['z','x','c','v','b','n','m',',','.','/']
		},
		ru: {
			topRow: ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\'],
			middleRow: ['ф','ы','в','а','п','р','о','л','д','ж','э'],
			bottomRow: ['я','ч','с','м','и','т','ь','б','ю','.']
		},
		ua: {
			topRow: ['й','ц','у','к','е','н','г','ш','щ','з','х','ї','\\'],
			middleRow: ['ф','і','в','а','п','р','о','л','д','ж','є'],
			bottomRow: ['я','ч','с','м','и','т','ь','б','ю','.']
		}
	},
	langs: ['en', 'ru', 'ua'],
	currentLang: ''
};

function enteringNumber(choiceOfLanguage){
	if (choiceOfLanguage !== null){
		if (choiceOfLanguage >= 0 && choiceOfLanguage <=2){
			if (choiceOfLanguage == 0){
				return keyboard.currentLang = '0 это en';
			}else if (choiceOfLanguage == 1){
				return keyboard.currentLang = '1 это ru';
			}else {
				return keyboard.currentLang = '2 это ua'
			}
		}else {
			alert('Выбрын не доступный язык');
			return prompt('Введите число соответственно языку en - 0, ru - 1, ua - 2', '');	
		};
	}else {
		alert('Stop');
	};
	return;
};
enteringNumber(prompt('Введите число соответственно языку en - 0, ru - 1, ua - 2', ''));

function getRandCharInAlph(){
	var array = [];
	let letter;
	if (keyboard['currentLang'] === '0 это en'){
		for (let key in keyboard.layouts.en){
			array.push(keyboard.layouts.en[key]);
		};
		letter = array[Math.floor(Math.random() * array.length)][Math.floor(Math.random() * (array.length + 9))];		
		return console.log(letter);			

	}else if (keyboard['currentLang'] === '1 это ru'){
		for (let key in keyboard.layouts.ru){
			array.push(keyboard.layouts.ru[key]);
		};
		letter = array[Math.floor(Math.random() * array.length)][Math.floor(Math.random() * (array.length + 9))];		
		return console.log(letter);
	}else {
		for (let key in keyboard.layouts.ua){
			array.push(keyboard.layouts.ua[key]);
		};
		letter = array[Math.floor(Math.random() * array.length)][Math.floor(Math.random() * (array.length + 9))];		
		return console.log(letter);
	}
};
getRandCharInAlph();