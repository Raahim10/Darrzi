


if (window.matchMedia('(min-width: 767px)').matches) {


    Shery.mouseFollower({
        skew: true,

    });



    Shery.makeMagnet(".magnet");
    Shery.imageEffect(".back", { style: 5, gooey: true, config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -1, "range": [-1, 1] }, "aspect": { "value": 2.211908931698774 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.39, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } } });

    Shery.imageMasker(".superhero, .view-card " /* Element to target.*/, {
        //Parameters are optional.
        mouseFollower: true,
        text: "VIEW",
        ease: "0s",
        // duration: ,
    });







    $('#tick2').html($('#tick').html());
    //alert($('#tick2').offset.left);

    var temp = 0, intervalId = 0;
    $('#tick li').each(function () {
        var offset = $(this).offset();
        var offsetLeft = offset.left;
        $(this).css({ 'left': offsetLeft + temp });
        temp = $(this).width() + temp + 10;
    });
    $('#tick').css({ 'width': temp + 80, 'margin-left': '20px' });
    temp = 0;
    $('#tick2 li').each(function () {
        var offset = $(this).offset();
        var offsetLeft = offset.left;
        $(this).css({ 'left': offsetLeft + temp });
        temp = $(this).width() + temp + 10;
    });
    $('#tick2').css({ 'width': temp + 80, 'margin-left': temp + 40 });

    function abc(a, b) {

        var marginLefta = (parseInt($("#" + a).css('marginLeft')));
        var marginLeftb = (parseInt($("#" + b).css('marginLeft')));
        if ((-marginLefta <= $("#" + a).width()) && (-marginLefta <= $("#" + a).width())) {
            $("#" + a).css({ 'margin-left': (marginLefta - 1) + 'px' });
        } else {
            $("#" + a).css({ 'margin-left': temp });
        }
        if ((-marginLeftb <= $("#" + b).width())) {
            $("#" + b).css({ 'margin-left': (marginLeftb - 1) + 'px' });
        } else {
            $("#" + b).css({ 'margin-left': temp });
        }
    }

    function start() { intervalId = window.setInterval(function () { abc('tick', 'tick2'); },) }

    $(function () {
        $('#outer').mouseenter(function () { window.clearInterval(intervalId); });
        $('#outer').mouseleave(function () { start(); })
        start();
    });


} else { }


