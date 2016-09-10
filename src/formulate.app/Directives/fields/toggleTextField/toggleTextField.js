// Variables.
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateToggleTextField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/textField/textField.html")
    };
}

