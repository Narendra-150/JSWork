const readline = require('readline');
const jD = require('./japaneseDictionary');
let log = (data) => (console.log(data), data);

var cli = readline.createInterface(process.stdin, process.stdout);
var question = function(q) {
	return new Promise((res, rej) => {
		cli.question(q, (answer) => {
			res(answer);
		});
	});
};

(async function main() {
	var answer;
	let ipName = await question('Enter Name : ');
	log(ipName + ' in Japanese "' + ipName.toUpperCase().split('').map((i) => jD[i]).join('') + '"');
	process.exit(0);
})();
