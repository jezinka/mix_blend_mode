function addParrots() {
    var imageSrc = 'rainbow-33201_1280.png';
    var colors = ['red', 'green', 'blue', 'yellow', 'brown', 'orange'];
    var blendMode = ["unset", "screen", "multiply", "exclusion", "saturation", "luminosity", "color", "hue", "overlay", "darken", "lighten", "difference", "soft-light", "hard-light", "color-burn", "color-dodge"];

    blendMode.forEach(function (blendModus) {
        colors.forEach(function (color) {
            var cssClassText = "col-xs-2 " + color + "-background";
            $('<div></div>', {
                "class": cssClassText
            }).append($("<img/>", {
                src: imageSrc,
                "class": blendModus
            })).append($("<span></span>", {
                text: '\n' + blendModus
            })).appendTo('.container');
        });
        $('<div/>', {
            "class": "col-sm-12 clearfix"
        }).appendTo(".container")
    })
}