//testing functionality

var g = G$('John', 'Rambo', 'en');
g.setLang('es').log().greet();
g.greet('poop');

g.log();

g.setLang('en');
g.greet();
g.greeting();
g.greet('f');
