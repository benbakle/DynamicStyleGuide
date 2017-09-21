function stylesObject() {
    return {
        root: {
            selector: ":root",
            fontSize: "16px"
        },
        body: {
            selector: "body",
            fontFamily: "Century Gothic",
            color: "#fff",
            backgroundColor: "#333"
        },
        p: {
            selector: "p",
            lineHeight: "1.7rem",
            fontSize: "1.2rem",
            color: "#fff",
            transitionDuration: ".5s",
            sampleHtml: "<p>Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada</p>"
        },
        h1: {
            selector: "h1, .h1",
            fontSize: "4.2rem",
            fontFamily: "Century Gothic",
            color: "#fff",
            margin: "15px 0 10px",
            fontWeight: "700",
            transitionDuration: ".5s",
            sampleHtml: "<h1>Quisque velit nisi</h1>"
        },
        a: {
            selector: "a",
            display: "inline",
            fontSize: "1.2rem",
            fontFamily: "Century Gothic",
            backgroundColor: "transparent",
            color: "#ccc",
            textDecoration: "underline",
            padding:"0",
            margin:"0",
            border: "none",
            borderRadius: "none",
            fontWeight: "400",
            transitionDuration: ".5s",
            sampleHtml: "<a href='javascript:void(0)'>click here</a>"
        },
        aHover: {
            selector: "a:hover, a.hover",
            background: "transparent",
            color: "#555",
            textDecoration: "none"

        },
        button: {
            selector: ".button",
            display: "inline-block",
            fontSize: "1.2rem",
            fontFamily: "Century Gothic",
            backgroundColor: "#fff",
            color: "#333",
            textDecoration: "none",
            padding: "7px 15px",
            margin: "5px",
            border: "1px solid #333",
            borderRadius: "4px",
            fontWeight: "400",
            transitionDuration: ".5s",
            cursor: "pointer",
            sampleHtml: "<a href='javascript:void(0)' class='button'>Submit</a><a href='javascript:void(0)' class='button'>Cancel</a>"
        },
        buttonHover: {
            selector: ".button:hover, .button.hover",
            background: "#333",
            color: "#fff",
            textDecoration: "none"
        },
        container: {
            selector: ".container",
            margin: "50px auto",
            padding: "0 15px",
            maxWidth: "992px"
        },
        printStyles: {
            selector: "#printStyles",
            color: "#fff",
            fontFamily: "Courier New",
            fontWeight: "700"
        },
        sample: {
            selector: ".sample",
            margin: "20px 0",

        },

        selector: {
            selector: ".selector",
            margin: "20px auto",
            width: "100%"

        }
    }
}

//$scope.styles.root = {};
//$scope.styles.root.selector = ":root";
//$scope.styles.root.fontSize = "14px";

//$scope.styles.body = {};
//$scope.styles.body.selector = "body";
//$scope.styles.body.fontFamily = "Century Gothic";
//$scope.styles.body.fontSize = "1rem";
//$scope.styles.body.color = "#333";
//$scope.styles.body.transitionDuration = ".25s";

//$scope.styles.h1 = {};
//$scope.styles.h1.selector = "h1,.h1";
//$scope.styles.h1.fontSize = "2.5rem";
//$scope.styles.h1.color = "#222";
//$scope.styles.h1.marginTop = "1rem";
//$scope.styles.h1.marginBottom = "0rem";
//$scope.styles.h1.fontWeight = "700";
//$scope.styles.h1.transitionDuration = ".5s";


//$scope.styles.p = {};
//$scope.styles.p.selector = "p";
//$scope.styles.p.lineHeight = "1.7rem";
//$scope.styles.p.fontSize = "1.2rem";
//$scope.styles.p.color = "#555";

//$scope.styles.a = {};
//$scope.styles.a.selector = "a";
//$scope.styles.a.display = "inline-block";
//$scope.styles.a.fontSize = "1.2rem";
//$scope.styles.a.backgroundColor = "#555";
//$scope.styles.a.color = "#fff";
//$scope.styles.a.textDecoration = "none";
//$scope.styles.a.paddingTop = ".5rem";
//$scope.styles.a.paddingBottom = ".5rem";
//$scope.styles.a.paddingLeft = "1rem";
//$scope.styles.a.paddingRight = "1rem";
//$scope.styles.a.marginTop = ".5rem";
//$scope.styles.a.marginBottom = ".5rem";
//$scope.styles.a.marginLeft = "0";
//$scope.styles.a.marginRight = "15px";
//$scope.styles.a.border = ".1rem solid #555";
//$scope.styles.a.borderRadius = ".2rem";
//$scope.styles.a.fontWeight = "700";
//$scope.styles.a.transitionDuration = ".5s";

//$scope.styles.aHover = {};
//$scope.styles.aHover.selector = "a:hover";
//$scope.styles.aHover.background = "#fff";
//$scope.styles.aHover.color = "#555";

//$scope.styles.container = {};
//$scope.styles.container.selector = ".container";
//$scope.styles.container.paddingLeft = ".9rem";
//$scope.styles.container.paddingRight = "15px";
//$scope.styles.container.maxWidth = "992px";
//$scope.styles.container.margin = "0 auto";
