(function(){

	this.input  = document.getElementById("input");
	this.output = document.getElementById("output");

	this.varshifiedWords = {
		"lol"		: "lulz",
		"okay"		: "k",
		"you"		: "u",
		"you're"	: "ua",
		"there"		: "thr",
		"tell"		: "tel",
		"where"		: "whr",
		"what"		: "wut",
		"when"		: "wen",
		"are"		: "r",
		"doing"		: "duin",
		"to"		: "2",
		"no"		: "na",
		"and"		: "n",
		"thanks"	: "thx"
	}

	this.varshifiedMap = new Map();
	for ( word in varshifiedWords) {
		this.varshifiedMap.set(word, varshifiedWords[word]);
	}

	this.keyPressed = function() {
		output.value = varshify(input);
	}

	this.varshify = function(input) {
		return input.value.split(' ').reduce(function(varshifiedSentence, perfectWord){
			this.varshifiedWord = varshifiedMap.get(perfectWord); 
			return varshifiedSentence + ' ' 
			+ (this.varshifiedWord ? this.varshifiedWord : perfectWord.replace(/[aeiou\.\?\,]/gm,'')).toLowerCase();
		});
	}

})();
