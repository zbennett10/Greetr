// When given a first name, last name, and optional language, it generates formal/informal greetings
//supports english/spanish languages
//Reusable library/framework
//Easy to type 'G$()' structure
//supports jquery


//IIFE that creates a safe structure for Greetr library initialization
(function (global, $) {
    var Greetr = function(firstName, lastName, language) {

        //return results of a different function constructor so that 'new' keyword is not needed
        return new Greetr.init(firstName, lastName, language);
    }
    //holds Greetr methods/object in order to conserve memory space
    Greetr.prototype = {};

    //initializes a new Greetr object
    Greetr.init = function(firstName, lastName, language) {
        var self = this;

        self.firstName = firstName || 'John';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';
    }
    
    //globals
     var supportedLangs = ['en', 'es'];
     var greetings = {
         en: 'Hello',
         es: 'Hola'
     };

     var formalGreetings = {
         en: 'Greetings',
         es: 'Saludos'
     };

     var logMessages = {
         en: 'Logged in',
         es: 'Inicio sesion'
     }

      //helper methods on Greetr prototype chain
      Greetr.prototype = {
          fullName: function() {
              return this.firstName + ' ' + this.lastName;
          },

          validate: function() {
              if(supportedLangs.indexOf(this.language) === -1) {
                  throw "Invalid language";
              }
          },

          greeting: function() {
              return greetings[this.language] + ' ' + this.firstName + '!';
          },

          formalGreeting: function() {
              return formalGreetings[this.language] + ',' + ' ' + this.firstName + '.';
          },

          greet: function(formal) {
              var msg;
              if(formal) {
                  msg = this.formalGreeting();
              }
              else {
                  msg = this.greeting();
              }
              if(console) {
                  console.log(msg);
              }

              //makes this functional chainable by returning the object that invoked this message
              return this;
          },

          log: function() {
              if(console) {
                  console.log(logMessages[this.language] + ':' + this.fullName + '.');
              }

              return this;
          },

          setLang: function(language) {
              if(supportedLangs.indexOf(language) !== -1) {
                  this.language = language;
              } else {
                  throw "Invalid language!";
              }

              return this;
          }
      };

      //any objects created with init function point to Greetr prototype chain
       Greetr.init.prototype = Greetr.prototype;

    //both Greetr and G$ point to Greetr library
    global.Greetr = global.G$ = Greetr;
}(window, jQuery));