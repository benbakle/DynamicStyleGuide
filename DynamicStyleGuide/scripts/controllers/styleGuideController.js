var app = app || angular.module("app", ['ngSanitize']);
app.controller('styleGuideController', styleGuideController);
styleGuideController.$inject = ['$scope', 'styleGuideService'];

function styleGuideController($scope, service) {
    var _htmlStyles = document.getElementById("styles");
    var _htmlPrintStyles = document.getElementById("printStyles");

    $scope.htmlStyles = null;
    $scope.htmlPrintStyles = null;
    $scope.styles = {};
    $scope.transpiledStyles = "";
    $scope.printStyles = "";

    $scope.getStylesObject = getStylesObject;
    $scope.change = change;
    $scope.splitCamelCaseString = splitCamelCaseString;
    $scope.getSelectorProperties = getSelectorProperties;

    init();

    function init() {
        getStylesObject();
        stringifyStylesObject();


        //storeStylesObject();
       // addSelector("camelCase", ".testy");
       // addPropertyToSelector("camelCase", "fontSize", "12px");
       // addPropertyToSelector("camelCase", "sampleHtml", "<div class='testy'>Test Biatch</div>");
        console.log($scope.styles);
    }

    //function getStylesObject() {
    //    service.getStylesObject().then(function (response) {
    //        $scope.styles = response.data;
    //    });
    //}

    function getStylesObject() {
        $scope.styles = service.getStylesObject();
    }

    function stringifyStylesObject() {
        for (var selector in $scope.styles) {
            $scope.transpiledStyles = $scope.transpiledStyles + $scope.styles[selector].selector + "{";
            appendSelectorProperties($scope.styles[selector]);
            $scope.transpiledStyles = $scope.transpiledStyles + "}";
        }
    }

    function storeStylesObject() {
        window.localStorage.setItem("styles", JSON.stringify($scope.styles));
    }

    function getStoredStylesObject() {
        return window.localStorage.getItem("styles");
    }

    function addSelector(selectorName, selector) {
        $scope.styles[selectorName] = { selector: selector };
    }

    function addPropertyToSelector(selectorName, propertyName, propertyValue) {
        $scope.styles[selectorName][propertyName] = propertyValue;
    }


    function appendSelectorProperties(selector) {
        for (var property in selector) {
            if (property != "selector" && property != "sampleHtml") {
                $scope.transpiledStyles = $scope.transpiledStyles + splitCamelCaseString(property, "-") + ":" + selector[property] + ";";
            }
        }
    }

    function getSelectorProperties(selectorString) {
        return $scope.styles[selectorString];
    }

    function splitCamelCaseString(ccString, splitString) {
        return ccString.replace(/([A-Z])/g, splitString + "$1").toLowerCase();
    }


    function change() {
        $scope.transpiledStyles = "";
        stringifyStylesObject();

    }
    //function getStuff() {
    //    service.getStuffByUsername('angular').then(function (response) {
    //        $scope.stuff = [response.data, { name: "Fake", url: "a sort example for url" }];
    //    });
    //}
}

