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
            backgroundColor: "#333",
            transitionDuration: ".5s",
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
            backgroundColor: "#333",
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
            fontWeight: "400"
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