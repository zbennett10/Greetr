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

    Greetr.init = function(firstName, lastName, language) {
        var self = this;

        self.firstName = firstName || 'John';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';
    }
    

}(window, jQuery));