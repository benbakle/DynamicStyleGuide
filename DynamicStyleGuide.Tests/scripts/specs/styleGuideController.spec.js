describe("The Style Guide Controller", function () {
    var _controller, _service, _$rootScope;
    var _controllerID = 'styleGuideController';

    beforeEach(setup);

    describe("when initializing", function () {
        it("populates the styles", function () {
            expect(_service.getStylesObject).toHaveBeenCalled();
            expect(_$scope.styles).toEqual(_mockStylesObject());
        });
        it("transpiles the styles object to css format", function () {
            expect(_$scope.transpiledStyles).toEqual("body{color:#fff;}");
        })
    });

    describe("when adding a selector", function () {
        it("adds a new selector to the styles", function () {
            _$scope.newSelector = _newSelector();
            _$scope.addSelector();

            expect(_$scope.styles).toEqual(_mockAddedSelectorStylesObject());
            expect(_$scope.addSelector).toBeDefined();
        });
    });

    describe("when adding a property", function () {
        it("adds a new property and value to an existing selector", function () {
            _$scope.addPropertyToSelector("body", "fontSize", "1rem");
            expect(_$scope.styles).toEqual(_mockAddedPropertyStylesObject());
        })
    })

    //:: METHODS FOR TESTS :://
    function setup() {
        module('app');
        module(mocks);
        inject(values);
    }

    //Subs the mockService for the development service
    function mocks($provide) {
        $provide.value('styleGuideService', mockService());
    }

    //provides a list of values to be injected
    function values($controller, $rootScope, styleGuideService) {
        _service = styleGuideService;
        _$scope = $rootScope.$new();

        //spys before controller initializes in order to see the service(s) ran during init();
        spyOn(_service, 'getStylesObject').and.callThrough();

        _controller = $controller(_controllerID, { $scope: _$scope, styleGuideService: _service });
    }
});

function mockService() {
    return {
        getStylesObject: function () {
            return _mockStylesObject()
        }
    }
}
function _mockStylesObject() {
    return {
        body: {
            selector: "body",
            color: "#fff",
        }
    }
}
function _mockAddedSelectorStylesObject() {
    return {
        body: {
            selector: "body",
            color: "#fff",
        },
        added: {
            selector: ".added"
        }
    }
}

function _mockAddedPropertyStylesObject() {
    return {
        body: {
            selector: "body",
            color: "#fff",
            fontSize: "1rem"
        }
    }
}

function _newSelector() {
    return { name: "added", selector: ".added" }
}