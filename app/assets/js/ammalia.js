/*var cats = {};

Leap.loop(function(frame) {

    frame.hands.forEach(function(hand, index) {

        var cat = (cats[index] || (cats[index] = new Cat()));
        cat.setTransform(hand.screenPosition(), hand.roll());

    });

}).use('screenPosition', {
    scale: 0.25
});*/
Leap.loop()
    .use('zoomEvent')
    .use('swipeEvent');

// Setup Leap loop with frame callback function

/*var controller = new Leap.Controller({
    enableGestures: true
});

controller.on('frame', function(frame) {
    if (frame.valid) {
        for (var p = 0; p < frame.pointables.length; p++) {
            var pointable = frame.pointables[p];
            if (pointable.touchZone == 'touching') {
                //if fingers are expanded
                // detect zoom gesture
                //else
                // detect pinch gesture
            }
        }
        if (frame.gestures.length > 0) {
            // detect swipe gesture ...
        }
    }
    lastFrame = frame;
});

controller.connect();*/

var cats = {};

var Cat = function() {
    var cat = this;
    /*var img = document.createElement('img');
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png';
    img.style.position = 'absolute';
    img.onload = function() {
        cat.setTransform([window.innerWidth / 2, window.innerHeight / 2], 0);
        document.body.appendChild(img);
    };*/
    var img = document.getElementById("mainImage");
    console.log("source: " + img.src);
    img.style.position = 'absolute';

    var b, c = 0;
    cat.setTransform = function(b, c, zm1, zm2) {

        b = img.width;
        c = img.height;

        img.style.width = (b * zm1) + "px";
        img.style.height = (c * zm2) + "px";
        img.style.marginLeft = -(img.width / 2) + "px";
        img.style.marginTop = -(img.height / 2) + "px";

        img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
            img.style.OTransform = img.style.transform;

    };
    
};

cats[0] = new Cat();



/*var Cat = function() {
    var cat = this;
    var img = document.createElement('img');
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png';
    img.style.position = 'absolute';
    img.onload = function() {
        cat.setTransform([window.innerWidth / 2, window.innerHeight / 2], 0);
        document.body.appendChild(img);
    }
    cat.setTransform = function(position, rotation) {
        img.style.left = position[0] - img.width / 2 + 'px';
        img.style.top = position[1] - img.height / 2 + 'px';
        img.style.transform = 'rotate(' + -rotation + 'rad)';
        img.style.webkitTransform = img.style.MozTransform = img.style.msTransform = img.style.OTransform = img.style.transform;
    };
};

cats[0] = new Cat();

// This allows us to move the cat even whilst in an iFrame.
Leap.loopController.setBackground(true);*/

