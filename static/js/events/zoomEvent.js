Leap.plugin('zoomEvent', function(scope){
    /*this.use('screenPosition', {
        scale: 0.25
    });*/
    this.use('screenPosition');

    return {
        hand: function(hand){
            var radius = hand.sphereRadius;
            //console.log("Sphere Radius: " + radius);
            /*if (hand.pinchStrength > 0) {
                var pincher;
                var closest = 500;
                var a;*/
                var cat;

                /*for (var f = 1; f < 5; f++) {
                    current = hand.fingers[f];
                    distance = Leap.vec3.distance(hand.thumb.tipPosition, current.tipPosition);
                    if (current != hand.thumb && distance < closest) {
                        closest = distance;
                        pincher = current;
                        a = hand.pinchStrength;
                    }
                }*/
                var extendedFingers = 0;
                for(var f = 0; f < hand.fingers.length; f++){
                    var finger = hand.fingers[f];
                    if(finger.extended) extendedFingers++;
                }
                //console.log("Extended fingers: " + extendedFingers);
                var normal = hand.palmNormal;
                //console.log("normal[0] = " + normal[0] + "normal[1] = " + normal[1] + "normal[2]" + normal[2]);
                if (normal[2] > -.2 && normal[2] < 0.5 && extendedFingers < 3  && extendedFingers > 0 && radius <= 60) {
                    cat = (cats[0] || (cats[0] = new Cat()));
                    //console.log(" the finger is index " + pincher.type + "<br />");

                    /*if (0.50 > a) {
                        //  var cat =( cats[0] || (cats[0] = new Cat()));
                        cat.setTransform(0, 0, 1.1, 1.1);
                        //zoom(1.1);
                        console.log(" the finger is index 22222222222 " + "<br />");
                    }*/
                    //FingerList extendedFingerList = hand.Fingers.Extended();
                    //console.log('Fingerlist: ' + extendedFingerList.length);
                    //if (a >= 0.3 && a <= 0.7) {
                        // var cat =( cats[0] || (cats[0] = new Cat()));
                        cat.setZoom(0, 0, 0.99, 0.99);
                        //zoom(0.9);
                        console.log(" zoom out");
                    //}


                } else if (normal[2] > -0.2 && normal[2] < 0.5 && extendedFingers > 0 && radius >= 50) {
                    cat = (cats[0] || (cats[0] = new Cat()));
                    //if (a >= 0.3 && a <= 0.7) {
                        // var cat =( cats[0] || (cats[0] = new Cat()));
                        cat.setZoom(0, 0, 1.01, 1.01);
                        //zoom(0.9);
                        console.log("zoom in");
                    //}
                }
            //}
        }
    }
});