var app = app || angular.module("app", ['ngSanitize']);
app.controller('styleGuideController', styleGuideController);
styleGuideController.$inject = ['$scope', 'styleGuideService'];

function styleGuideController($scope, service) {
    var _htmlStyles = document.getElementById("styles");
    var _htmlPrintStyles = document.getElementById("printStyles");

    $scope.styles = {};
    $scope.htmlStyles = null;
    $scope.transpiledStyles = "";
    $scope.htmlPrintStyles = null;
    $scope.printStyles = "";

    $scope.newSelector = "";
    $scope.newProperty = { selector: null, name: null, value: null };
    $scope.addSelector = addSelector;
    $scope.addPropertyToSelector = addPropertyToSelector;

    $scope.updateStylesObject = updateStylesObject;
    $scope.splitCamelCaseString = splitCamelCaseString;
    $scope.getSelectorProperties = getSelectorProperties;
    $scope.getPropertyType = getPropertyType;


    $scope.isCssProperty = isCssProperty;

    init();

    function init() {
        getStylesObject();
        stringifyStylesObject();
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
        return prop != "sampleHtml";
    }

    function stringifyStylesObject() {
        for (var query in $scope.styles) {
            var queryObj = $scope.styles[query]
            for (var selector in queryObj) {
                if (selector != "mediaQuery") {
                    $scope.transpiledStyles = $scope.transpiledStyles + selector + "{";
                    appendSelectorProperties(queryObj[selector]);
                    $scope.transpiledStyles = $scope.transpiledStyles + "}";
                }
            }
        }
    }

    function addSelector() {
        $scope.styles.xs[$scope.newSelector] = {};
        updateStylesObject();
    }

    function addPropertyToSelector() {
        $scope.styles.xs[$scope.newProperty.selector][$scope.newProperty.name] = $scope.newProperty.value;
        updateStylesObject();
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
            if (property != "sampleHtml") {
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


    function updateStylesObject() {
        $scope.transpiledStyles = "";
        stringifyStylesObject();

    }
}

