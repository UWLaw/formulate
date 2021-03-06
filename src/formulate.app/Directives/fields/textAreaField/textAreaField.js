﻿// Variables.
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateTextAreaField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/textAreaField/textAreaField.html")
    };
}