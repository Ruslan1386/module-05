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

//let choiceOfLanguage = prompt('Введите число соответственно языку en - 0, ru - 1, ua - 2', '');
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



for (let key in keyboard){
	console.log(`${key}: ${keyboard[key]}`);
	//console.log( Object.keys(keyboard));
};

 console.log(Object.keys(keyboard.layouts.en));
function getRandCharInAlph(){
	if (keyboard['currentLang'] === '0 это en'){
		console.log(keyboard.layouts.en);
		// for (let i = 0; i < keyboard.length; i++){	
		// 	for (let j = 0; j < keyboard.length + 9; j++){
		// };
	}else if (keyboard['currentLang'] === '1 это ru'){
		console.log(keyboard.layouts.ru);
	}else {
		console.log(keyboard.layouts.ua);
	}
};
getRandCharInAlph();