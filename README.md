# quickhint

`C++14` `emscripten` `javascript`



### What is quickhint ?
`quickhint is a c++14 implementation of autocompletion algorithm that provides fastest response possible.`



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

## C++14 example code
`You can find a very simple example of the code here` [C++14 quickhint](https://github.com/omarshariffathi/Autocompletion)


## License
`check ` [License](https://github.com/omarshariffathi/quickhint/blob/gh-pages/License.md)
