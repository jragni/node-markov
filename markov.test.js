/** Tests for Markov Machine */

const {MarkovMachine} = require('./markov');

describe('Markov Machine class tests', function () {

	test('should create an instance of markov machine', () =>{
		let mm = new MarkovMachine('the cat in the hat');
		expect(mm).toBeInstanceOf(MarkovMachine)
	});

  test('should create an object of markov chains', function () { 

		let mm = new MarkovMachine('the cat in the hat');
    expect(mm.makeChains()).toEqual({
                                        the:['cat','hat'], 
                                        cat:['in'],
                                        'in':['the'], 
                                        hat:[null]});
  });

 test('should create a string of words', function () {
    
		let mm = new MarkovMachine('the cat the');
    expect(mm.getText()).toContain('the');

 }); 

});
// end 
