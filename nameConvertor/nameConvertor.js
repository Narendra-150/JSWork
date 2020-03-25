const japaneseDictionary = {
	A: 'ka',
	B: 'tu',
	C: 'mi',
	D: 'te',
	E: 'ku',
	F: 'lu',
	G: 'ji',
	H: 'ri',
	I: 'ki',
	J: 'zu',
	K: 'me',
	L: 'ta',
	M: 'rin',
	N: 'to',
	O: 'mo',
	P: 'no',
	Q: 'ke',
	R: 'shi',
	S: 'ari',
	T: 'chi',
	U: 'do',
	V: 'ru',
	W: 'mei',
	X: 'na',
	Y: 'fu',
	Z: 'zi'
};

let ipName = 'Narendra';
let opName = ipName.toUpperCase().split('').map((i) => japaneseDictionary[i]).join('');
console.log('Converted Name : ' + opName);
