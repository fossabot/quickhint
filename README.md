# quickhint
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fo-micron%2Fquickhint.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fo-micron%2Fquickhint?ref=badge_shield)


`C++14` `emscripten` `javascript`



### What is quickhint ?
`quickhint is a c++14 implementation of autocompletion algorithm that provides fastest response possible. I am using a new method I created my own that is a bit similar to how recurrent neural networks are structured but without any learning phase or perceptrons or anything. There is no multithreading or parallel computing here at all. Everything runs on a single thread.`



### Why just not using regular expressions ?
`because this is faster, the more the data grows the more you find out you need this.`<br>
`try it yourself and see the differece.`



### What can I build with this ?
`you can actually use this to build automatic cheating detection systems`<br>
`you can create a simple text editor`<br>
`and the most basic use case is in your website textfield`<br>



### Live example ?
`A demo could be found here ` [http://omarshariffathi.github.io/quickhint/](http://omarshariffathi.github.io/quickhint/)



### Getting Started `(just include quickhit.js before that code)`
```javascript


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

```

this should print in console `mono<br>mouse<br>monkey<br>mosquito<br>mosquito<br>moustique<br>`


## Would be happy to see you use this library in your next project !


## License
`MIT LICENSE` [here](https://github.com/omarshariffathi/quickhint/blob/gh-pages/License.md)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fo-micron%2Fquickhint.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fo-micron%2Fquickhint?ref=badge_large)