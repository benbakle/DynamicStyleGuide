var app = app || angular.module("app", ['ngSanitize']);
app.controller('styleGuideController', styleGuideController);
styleGuideController.$inject = ['$scope', 'styleGuideService'];

function styleGuideController($scope, service) {
    var _htmlStyles = document.getElementById("styles");
    var _htmlPrintStyles = document.getElementById("printStyles");

    $scope.htmlStyles = null;
    $scope.htmlPrintStyles = null;
    $scope.styles = {};
    $scope.selectorArray = [];
    $scope.transpiledStyles = "";
    $scope.printStyles = "";

    $scope.newSelector = { name: null, selector: null }
    $scope.newProperty = { selector: null, name: null, value: null };
    $scope.addSelector = addSelector;
    $scope.addPropertyToSelector = addPropertyToSelector;

    $scope.getStylesObject = getStylesObject;
    $scope.change = change;
    $scope.splitCamelCaseString = splitCamelCaseString;
    $scope.getSelectorProperties = getSelectorProperties;
    $scope.getPropertyType = getPropertyType;

    $scope.selectorKeyCount = 0;
    $scope.selectorKey = "selector" + $scope.selectorKeyCount;
    $scope.incrementSelectorKeyCount = incrementSelectorKeyCount;

    $scope.isCssProperty = isCssProperty;

    init();

    function init() {
        getStylesObject();
        stringifyStylesObject();
        setSelectorArray();
    }

    //:: SAVE FOR ACTUAL SERVICE CALL :://    
    //function getStylesObject() {
    //    service.getStylesObject().then(function (response) {
    //        $scope.styles = response.data;
    //    });
    //}
    function getStylesObject() {
        $scope.styles = service.getStylesObject();
        //$scope.styles = {};
    }


    function isCssProperty(prop) {
        return prop != "sampleHtml" && prop != "selector";
    }

    function incrementSelectorKeyCount() {
        $scope.selectorKeyCount++;
    }


    function stringifyStylesObject() {
        for (var selector in $scope.styles) {
            $scope.transpiledStyles = $scope.transpiledStyles + $scope.styles[selector].selector + "{";
            appendSelectorProperties($scope.styles[selector]);
            $scope.transpiledStyles = $scope.transpiledStyles + "}";
        }
    }

    function addSelector() {
        incrementSelectorKeyCount();
        $scope.selectorKey = "selector" + $scope.selectorKeyCount;
        debugger;
        $scope.styles[$scope.selectorKey] = { selector: $scope.newSelector.selector };
        change();
    }

    function addPropertyToSelector() {
        $scope.styles[$scope.newProperty.selector][$scope.newProperty.name] = $scope.newProperty.value;
        change();
    }

    function setSelectorArray() {
        for (var selector in $scope.styles) {
            $scope.selectorArray.push($scope.styles[selector]);
        }
        //   $scope.selectorARray = Object.keys($scope.styles)
    }

    function getPropertyType(prop) {
        if (prop == "color" || prop == "backgroundColor") {
            return "color";
        }
        else {
            return "text";
        }
    }

    function storeStylesObject() {
        window.localStorage.setItem("styles", JSON.stringify($scope.styles));
    }

    function getStoredStylesObject() {
        return window.localStorage.getItem("styles");
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
}

