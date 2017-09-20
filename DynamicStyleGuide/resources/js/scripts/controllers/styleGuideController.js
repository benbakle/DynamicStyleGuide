var app = app || angular.module("app", []);
app.controller('styleGuideController', styleGuideController);
styleGuideController.$inject = ['$scope', 'templateService'];

function styleGuideController($scope, service) {
    var _htmlStyles = document.getElementById("styles");

    $scope.transpiledStyles = "";

    $scope.styles = {};

    $scope.change = change;
    $scope.splitCamelCaseString = splitCamelCaseString;


    $scope.styles.root = {};
    $scope.styles.root.selector = ":root";
    $scope.styles.root.fontSize = "14px";

    $scope.styles.body = {};
    $scope.styles.body.selector = "body";
    $scope.styles.body.fontFamily = "Century Gothic";
    $scope.styles.body.fontSize = "1rem";
    $scope.styles.body.color = "#333";
    $scope.styles.body.transitionDuration = ".25s";

    $scope.styles.h1 = {};
    $scope.styles.h1.selector = "h1,.h1";
    $scope.styles.h1.fontSize = "2.5rem";
    $scope.styles.h1.color = "#222";
    $scope.styles.h1.marginTop = "1rem";
    $scope.styles.h1.marginBottom = "0rem";
    $scope.styles.h1.fontWeight = "700";
    $scope.styles.h1.transitionDuration = ".5s";


    $scope.styles.p = {};
    $scope.styles.p.selector = "p";
    $scope.styles.p.lineHeight = "1.7rem";
    $scope.styles.p.fontSize = "1.2rem";
    $scope.styles.p.color = "#555";

    $scope.styles.a = {};
    $scope.styles.a.selector = "a";
    $scope.styles.a.display = "inline-block";
    $scope.styles.a.fontSize = "1.2rem";
    $scope.styles.a.backgroundColor = "#555";
    $scope.styles.a.color = "#fff";
    $scope.styles.a.textDecoration = "none";
    $scope.styles.a.paddingTop = ".5rem";
    $scope.styles.a.paddingBottom = ".5rem";
    $scope.styles.a.paddingLeft = "1rem";
    $scope.styles.a.paddingRight = "1rem";
    $scope.styles.a.marginTop = ".5rem";
    $scope.styles.a.marginBottom = ".5rem";
    $scope.styles.a.marginLeft = "0";
    $scope.styles.a.marginRight = "15px";
    $scope.styles.a.border = ".1rem solid #555";
    $scope.styles.a.borderRadius = ".2rem";
    $scope.styles.a.fontWeight = "700";
    $scope.styles.a.transitionDuration = ".5s";

    $scope.styles.aHover = {};
    $scope.styles.aHover.selector = "a:hover";
    $scope.styles.aHover.background = "#fff";
    $scope.styles.aHover.color = "#555";

    $scope.styles.container = {};
    $scope.styles.container.selector = ".container";
    $scope.styles.container.paddingLeft = ".9rem";
    $scope.styles.container.paddingRight = "15px";
    $scope.styles.container.maxWidth = "992px";
    $scope.styles.container.margin = "0 auto";

    init();

    function init() {
        transpileCss();
        _htmlStyles.innerHTML = "<style>" + $scope.transpiledStyles + "</style>";
    }

    function transpileCss() {
        for (var selector in $scope.styles) {
            //   if (selector != "transpiledStyles") {
            $scope.transpiledStyles = $scope.transpiledStyles + $scope.styles[selector].selector + "{";
            printSelectorProperties($scope.styles[selector]);
            $scope.transpiledStyles = $scope.transpiledStyles + "}";
            //   }
        }
    }

    function printSelectorProperties(selector) {
        for (var property in selector) {
            if (property != "selector") {
                $scope.transpiledStyles = $scope.transpiledStyles + splitCamelCaseString(property, "-") + ":" + selector[property] + ";";
            }
        }
    }
    function splitCamelCaseString(ccString, splitString) {
        return ccString.replace(/([A-Z])/g, splitString + "$1").toLowerCase();
    }


    function change() {
        init();

    }
    //function getStuff() {
    //    service.getStuffByUsername('angular').then(function (response) {
    //        $scope.stuff = [response.data, { name: "Fake", url: "a sort example for url" }];
    //    });
    //}
}

