describe("The Style Guide Controller", function () {
    var _controller, _service, _$rootScope;
    var _controllerID = 'styleGuideController';

    beforeEach(setup);

    it("Exists", function () {
        expect(styleGuideController).toBeDefined();
    });

    describe("when initializing", function () {
        it("populates the styles", function () {
            expect(_service.getStylesObject).toHaveBeenCalled();
            expect(_$scope.styles).toEqual(_mockStylesObject());
        });
        it("transpiles the styles object to css format", function () {
            expect(_$scope.transpiledStyles).toEqual("body{color:#fff;}");
        })
    });

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
