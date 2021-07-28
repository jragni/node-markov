/** Command-line tool to generate Markov text. */
const axios = require('axios')
const fsP = require('fs/promises');
const { MarkovMachine } = require('./markov');
const markov = require('./markov');



async function writeMarkovText(){
	try {
		let path = process.argv[4] || 'newFile.txt';
    let content;
		// check if url or file path
		if(process.argv[2] === 'file') {
			
			content = await fsP.readFile(process.argv[3], 'utf8');
			
		}else if(process.argv[2] === 'url') {
			const response = await axios.get(process.argv[3]);
			content = response.data;

		}else {
			console.warn(`Error invalid kwarg ${process.argv[2]}`);
      process.exit(1);
		}
	
		let mm = new MarkovMachine(content);
		fsP.writeFile(path, data=mm.getText(), encoding='utf8');
	} catch(error) { 
		console.error(error);
		process.exit(1);
	}
}

writeMarkovText();
