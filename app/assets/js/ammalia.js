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
    cat.setZoom = function(b, c, zm1, zm2) {
        b = img.width;
        c = img.height;
        var percentHeight = c / img.parentNode.clientHeight;

        console.log(" height: " + c + "parentHeight: " + img.parentNode.clientHeight);
        console.log(" percentHeight: " + percentHeight);
        if (zm1 > 1 || (zm1 < 1 && percentHeight > 1)) {
            img.style.width = (b * zm1) + "px";
            img.style.height = (c * zm2) + "px";

            percentHeight = img.height / img.parentNode.clientHeight;
            if (percentHeight >= 0.95) {
                img.style.top = 0 + 'px';
                img.style.bottom = 0 + 'px';
            }

            //img.style.marginLeft = -(img.width / 2) + "px";
            //img.style.marginTop = -(img.height / 2) + "px";

            img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
                img.style.OTransform = img.style.transform;
        }

    };
    cat.setSwipe = function(position) {
        var b = img.width;
        var c = img.height;

        var percentWidth = b / img.parentNode.clientWidth;
        var percentHeight = c / img.parentNode.clientHeight;

        /*img.style.left = position[0] - img.width  / 2 + 'px';

        var top = position[1] - img.height / 2;
        var topLimit = ((percentHeight - 1) * img.parentNode.clientHeight);
        console.log("%Height: " + percentHeight + " top potential: " + Math.abs(top) + " limit: " + topLimit);
        if (percentHeight > 1 && (Math.abs(top) < ((percentHeight - 1) * img.parentNode.clientHeight))) {
            img.style.top  = position[1] - img.height / 2 + 'px';
        }

        img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
        img.style.OTransform = img.style.transform;*/

        var left = position[0] - img.width / 2;
        var leftLimit = ((percentWidth - 1) * img.parentNode.clientWidth);
        console.log("%Width: " + percentWidth + " top potential: " + left + " limit: " + leftLimit);
        if (percentWidth > 1 && (left < ((percentWidth - 1) * img.parentNode. clientWidth))) {
            img.style.left = position[0] - img.width  / 2 + 'px';
        }

        /*var top = position[1] - img.height / 2;
        var topLimit = ((percentHeight - 1) * img.parentNode.clientHeight);
        console.log("%Height: " + percentHeight + " top potential: " + top + " limit: " + topLimit);
        topLimit = -1 * topLimit;
        if (percentHeight > 1 && topLimit <= 0 && topLimit >= (-1 * img.height)) {
            img.style.top  = topLimit + 'px';
        }*/
        console.log("position[1]: " + position[1] + " position[2]: " + position[2]);
        var top = position[1] - img.height / 2;
        var topLimit = ((percentHeight - 1) * img.parentNode.clientHeight);
        console.log("%Height: " + percentHeight + " top potential: " + Math.abs(top) + " limit: " + topLimit);
        if (percentHeight > 1 && (Math.abs(top) < ((percentHeight - 1) * img.parentNode.clientHeight))) {
            img.style.top = Math.min(0, position[1] - img.height / 2) + 'px';
            img.style.bottom = Math.max(position[1] - img.height / 2, -1 * img.height);
        }

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

