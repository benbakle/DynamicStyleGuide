describe("The Style Guide Controller", function () {
    var _controller, _service, _$rootScope;
    var _controllerID = 'styleGuideController';

    beforeEach(setup);

    it("Exists", function () {
        expect(styleGuideController).toBeDefined();
    });

    describe("when initializing", function () {
        it("populates the styles", function () {
            expect(_$scope.styles).toEqual(_mockStuff());
        });
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
        // spyOn(_service, 'getStylesObject').and.callThrough();

        _controller = $controller(_controllerID, { $scope: _$scope, styleGuideService: _service });
    }
});

function mockService() {
    return {
        getStylesObject: function () {
            return _mockStuff()
        }
        //getStuffByUsername: function (username) {
        //    return {
        //        then: function (callback) {
        //            callback({ data: _mockStuff() });
        //        }
        //    }
        //}
        //editPayee: function () {
        //    return {
        //        then: function (callback) {
        //            callback({ data: "void" });
        //        }
        //    }
        //}
    }
}
function _mockStuff() {
    return [_mockStuff1(), _mockStuff2()];
}

function _mockStuff1() {
    return { Name: "Stuff1", Contact: "contact1", ImageUrl: "imgUrl1" };
}
function _mockStuff2() {
    return { Name: "Stuff2", Contact: "contact2", ImageUrl: "imgUrl2" };
}