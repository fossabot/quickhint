// add a new environment for animals names only, seperated cache !
var animals = [
	// english, french, spanish
	"dog", "chien", "perro",
	"cat", "chat", "gato",
	"parrot", "perroquet", "loro",
	"fish", "poisson", "pescado",
	"mosquito", "moustique", "mosquito",
	"girafe", "giraffe", "jirafa",
	"crocodile", "crocodile", "cocodrilo",
	"monkey", "singe", "mono",
	"snake", "serpent", "serpiente",
	"mouse", "souris", "raton",
	"donkey", "ane", "burro",
	"horse", "cheval", "caballo"
];
var animals_cache_tag = "animals";
animals.forEach(function(animal){
	Module.loadWord(animal, animals_cache_tag);
});




// add a new environment for greetings only, seperated cache !
var greetings = [ "hello", "bonjour", "hola" ];
var greetings_cache_tag = "greetings";
greetings.forEach(function(greeting){
	Module.loadWord(greeting, greetings_cache_tag);
});




// callback function once got a response !
function onCompletionResults(completion) {
	console.log(completion);
}

var position = "START"; // START or END or ANYWHERE
var isSortedResult = true; // true or false
var incompleteWord = "mo"; // the very first two characters typed for example
var cache_tag = "animals"; // which cache to search in ?
var callbackFunctionName = "onCompletionResults"; // which we have just created above
Module.complete(position, isSortedResult, incompleteWord, cache_tag, callbackFunctionName);
