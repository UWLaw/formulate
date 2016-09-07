// Variables.
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateTextBlockField", directive);

// Directive.
function directive() {
    return {
        restrict: "E",
        replace: true,
        templateURL: "fields/textAreaField/textBlockField.html",
        controller: formulate.toggletext,
        scope: {
            configuration: "="
        }
    };
}