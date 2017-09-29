function stylesObject() {
    return {
        xs: {
            mediaQuery: "320",
            //mediaQuery: "@media only screen and (min-width : 480px)",
            ":root": {
                fontSize: "16px"
            },
            "body": {
                backgroundColor: "#144A66",
                color: "#ffffff",
                fontFamily: "century gothic",
                fontSize: "1rem",
                transitionDuration: ".5s",
            },
            "p, .p, article, .article": {
                sampleHtml: "<p>Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>",
                color: "",
                fontFamily: "",
                fontSize: "1rem",
                letterSpacing: "",
                lineHeight: "1.5em",
                transitionDuration: ".5s",
            },
            "h1, .h1": {
                sampleHtml: "<h1>Lorem Ipsum Dolar</h1>",
                color: "",
                fontFamily: "century gothic",
                fontSize: "3.5rem",
                fontStyle: "normal",
                fontWeight: "700",
                transitionDuration: ".5s"
            },
            "h2, .h2": {
                sampleHtml: "<h2>Lorem Ipsum Dolar</h2>",
                color: "",
                fontFamily: "century gothic",
                fontSize: "3rem",
                fontStyle: "normal",
                fontWeight: "400",
                transitionDuration: ".5s",
            },
            "h3, .h3": {
                sampleHtml: "<h3>Lorem Ipsum Dolar</h3>",
                color: "",
                fontFamily: "century gothic",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: "400",
                transitionDuration: ".5s",
            },
            "h4, .h4": {
                sampleHtml: "<h4>Lorem Ipsum Dolar</h4>",
                color: "",
                fontFamily: "century gothic",
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: "400",
                transitionDuration: ".5s",
            },
            "h5, .h5": {
                sampleHtml: "<h5>Lorem Ipsum Dolar</h5>",
                color: "",
                fontFamily: "century gothic",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: "400",
                transitionDuration: ".5s",
            },
            "h6, .h6": {
                sampleHtml: "<h6>Lorem Ipsum Dolar</h6>",
                color: "",
                fontFamily: "century gothic",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: "400",
                transitionDuration: ".5s",
            },
            "a": {
                sampleHtml: "<p><a href='#'>Read More</a><p><p>Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar <a href='#'>Read More</a>.</p>",
                color: "#ffa800",
                textDecoration: "underline",
                transitionDuration: ".5s",
            },
            "a:hover, a.hover": {
                sampleHtml: "<a href='#' class='hover'>Read More</a>",
                color: "#ffffff",
                textDecoration: "none"
            },
            ".button": {
                sampleHtml: "<a href='#' class='button'>submit</a><a href='#' class='button'>cancel</a>",
                backgroundColor: "#FFA800",
                borderRadius: ".25em",
                boxShadow: "rgba(0,0,0,.3) 5px 5px 10px",
                color: "#ffffff",
                display: "inline-block",
                fontSize: "1rem",
                margin: "1em 1em 1em 0",
                padding: ".5em 1em",
                textDecoration: "none",
                transitionDuration: ".5s"
            },
            ".button:hover, .button.hover": {
                sampleHtml: "<a href='#' class='button hover'>submit</a><a href='#' class='button hover'>cancel</a>",
                color: "#FFA800",
                backgroundColor: "#ffffff",
                textDecoration: "none"
            },
            ".large": {
                sampleHtml: "<p class='large'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.</p><a href='#' class='button large'>submit</a><a href='#' class='button large'>cancel</a>",
                fontSize: "2rem",
            },
            ".small": {
                sampleHtml: "<p class='small'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.</p><a href='#' class='button small'>submit</a><a href='#' class='button small'>cancel</a>",
                fontSize: ".8rem",
            }
        },
        sm: {
            mediaQuery: "480",

        },
        md: {
            mediaQuery: "768"
        },
        lg: {
            mediaQuery: "992"
        },
        xl: {
            mediaQuery: "1200"
        }
    }
}
