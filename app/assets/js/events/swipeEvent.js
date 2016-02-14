Leap.plugin('swipeEvent', function(scope){
  this.use('screenPosition', {
      scale: 0.25
  });

  return {
    frame: function(frame) {
      var controllerOptions = {enableGestures: true};

      if (frame.gestures.length > 0) {
        for (var i = 0; i < frame.gestures.length; i++) {
          var gesture = frame.gestures[i];

          if (gesture.type == "swipe") {
              //Classify swipe as either horizontal or vertical
              var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
              //Classify as right-left or up-down
              if(isHorizontal){
                  if(gesture.direction[0] > 0){
                      swipeDirection = "right";
                  } else {
                      swipeDirection = "left";
                  }
              } else { //vertical
                  if(gesture.direction[1] > 0){
                      swipeDirection = "up";
                  } else {
                      swipeDirection = "down";
                  }                  
              }
              console.log("swipeDirection: " + swipeDirection);
           }
         }
      }
    }
  }
});

