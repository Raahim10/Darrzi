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


