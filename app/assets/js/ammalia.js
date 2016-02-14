var Cat = function() {
    var cat = this;
    var img = document.createElement('img');
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png';
    img.style.position = 'absolute';
    img.onload = function() {
        cat.setTransform([window.innerWidth / 2, window.innerHeight / 2], 0);
        document.body.appendChild(img);
    };

    var b, c = 0;
    cat.setTransform = function(b, c, zm1, zm2) {

        wid = img.width;
        ht = img.height;

        img.style.width = (wid * zm) + "px";
        img.style.height = (ht * zm) + "px";
        img.style.marginLeft = -(img.width / 2) + "px";
        img.style.marginTop = -(img.height / 2) + "px";

        img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
            img.style.OTransform = img.style.transform;

    };
};
cats[0] = new Cat();

var cats = {};

Leap.loop(function(frame) {

    frame.hands.forEach(function(hand, index) {

        var cat = (cats[index] || (cats[index] = new Cat()));
        cat.setTransform(hand.screenPosition(), hand.roll());

    });

}).use('screenPosition', {
    scale: 0.25
});

Leap.loop({
    hand: function(hand) {
        if (hand.pinchStrength > 0) {
            var pincher;
            var closest = 500;
            var a;
            for (var f = 1; f < 5; f++) {
                current = hand.fingers[f];
                distance = Leap.vec3.distance(hand.thumb.tipPosition, current.tipPosition);
                if (current != hand.thumb && distance < closest) {
                    closest = distance;
                    pincher = current;
                    a = hand.pinchStrength;
                }
            }
            if (pincher == hand.indexFinger) {
                var cat = (cats[0] || (cats[0] = new Cat()));
                document.write(" the finger is index " + pincher.type + "<br />");
            }
            if (0.50 > a && a >= 0) {
                //  var cat =( cats[0] || (cats[0] = new Cat()));
                cat.setTransform(0, 0, 1.1, 1.1);
                //zoom(1.1);
                document.write(" the finger is index 22222222222 " + "<br />");
            }
            if (1 > a && a >= 0.50) {
                // var cat =( cats[0] || (cats[0] = new Cat()));
                cat.setTransform(0, 0, 0.9, 0.9);
                //zoom(0.9);
                document.write(" the finger is index 11111111111 " + "<br />");
            }
        }
    }
});

var controller = new Leap.Controller({
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

controller.connect();

var Cat = function() {
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
Leap.loopController.setBackground(true)