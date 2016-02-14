Leap.plugin('zoomEvent', function(scope){
    this.use('screenPosition', {
        scale: 0.25
    });

    return {
        hand: function(hand){
            if (hand.pinchStrength > 0) {
                var pincher;
                var closest = 500;
                var a;
                var cat;

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
                    cat = (cats[0] || (cats[0] = new Cat()));
                    console.log(" the finger is index " + pincher.type + "<br />");
                    /*if (0.50 > a) {
                        //  var cat =( cats[0] || (cats[0] = new Cat()));
                        cat.setTransform(0, 0, 1.1, 1.1);
                        //zoom(1.1);
                        console.log(" the finger is index 22222222222 " + "<br />");
                    }*/
                    if (a >= 0.3 && a <= 0.7) {
                        // var cat =( cats[0] || (cats[0] = new Cat()));
                        cat.setTransform(0, 0, 0.9, 0.9);
                        //zoom(0.9);
                        console.log(" the finger is index 11111111111 " + "<br />");
                    }
                }
            }
        }
    }
});