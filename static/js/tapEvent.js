window.onload = function() {
var stageWidth = 600;
var stageHeight = 400;

var tips = new Array(2);

var stage = new Kinetic.Stage({
    container: 'stage',
    width: stageWidth,
    height: stageHeight
});

var leap = new Leap.Controller();
leap.connect();

var layer = new Kinetic.Layer();

//Make ten circles to use as finger tips
for (var t = 0; t < 2; t++) {
    var tip = new Kinetic.Circle({
        x: 239,
        y: 75,
        radius: 20,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        opacity: .5,
        visible: false
    });
    tips[t] = tip;
    layer.add(tip);
}

// add the layer to the stage
stage.add(layer);

var count = 0;
var anim = new Kinetic.Animation(function (frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;

    // update finger tip display with data from latest frame
    var tipPointer = 0;
    var leapFrame = leap.frame();
    if (leapFrame.valid) {
        var iBox = leapFrame.interactionBox;
        for (var p = 0; p < leapFrame.pointables.length; p++) {
            var pointable = leapFrame.pointables[p];
            var pos = iBox.normalizePoint(pointable.tipPosition, true);
            console.log("length: " + tips.length);
            tips[tipPointer].setX(pos[0] * stageWidth);
            tips[tipPointer].setY(stageHeight - pos[1] * stageHeight);
            tips[tipPointer].setVisible(true);
            if (pointable.touchZone == "hovering") {
                tips[tipPointer].setOpacity(.375 - pointable.touchDistance * .2);
                tips[tipPointer].setFillRGB({r: 0, g: 128, b: 0});
            } else if (pointable.touchZone == "touching") {
                tips[tipPointer].setOpacity(.375 - pointable.touchDistance * .5);
                tips[tipPointer].setFillRGB({r: 128, g: 0, b: 0});
                count++;
                console.log("count: " + count);
            } else {
                tips[tipPointer].setOpacity(.1);
                tips[tipPointer].setFillRGB({r: 0, g: 0, b: 128});
            }
            if (tipPointer < 1) tipPointer++;
            if (count > 400) {
            	window.location.replace("./viewImage.html");
            }
        }
        while (tipPointer <= 1) tips[tipPointer++].setVisible(false);
    }
}, layer);

anim.start();
}

/*var LeapEx = {
  ws: null,
  ctx: null,
  width: null,
  height: null,
  debugEl: null,
  el: null,
  leapMinX: -200,
  leapMaxX: 200,
  leapMinY: 100,
  leapMaxY: 600,
  leapMinZ: -180,
  leapMaxZ: 180,
  started: false,

  init: function(el, debugEl) {
    LeapEx.el = $(el);
    LeapEx.debugEl = $(debugEl);

    // Support both the WebSocket and MozWebSocket objects
    if ((typeof(WebSocket) == 'undefined') &&
        (typeof(MozWebSocket) != 'undefined')) {
      WebSocket = MozWebSocket;
    }

    var w = LeapEx.width = $(window).width();
    var h = LeapEx.height = $(window).height();
    $(el).attr('width', w).css('width', w).attr('height', h).css('height', h);
    $(el).css('position', 'absolute').css('left', '0').css('top', '0');

    LeapEx.ctx = $(el)[0].getContext("2d");
    LeapEx.ws = new WebSocket("ws://localhost:6437/");

    LeapEx.ws.onopen = function(event) {
      LeapEx.debug("WebSocket connection open!");
    };

    LeapEx.ws.onclose = function(event) {
      LeapEx.ws = null;
      LeapEx.debug("WebSocket connection closed");
    };

    LeapEx.ws.onerror = function(event) {
      LeapEx.debug("Received error");
    };

    LeapEx.ws.onmessage = function(event) {
      if (LeapEx.started) {
        var obj = JSON.parse(event.data);
        var str = JSON.stringify(obj, undefined, 2);

        LeapEx.debug(str);

        if (typeof(obj.hands) != 'undefined' && obj.hands.length > 0) {
          var targets = [];

          for (var i=0; i<obj.hands.length; i++) {
            var hand = obj.hands[i];
            var x = hand.palmPosition[0];
            var y = hand.palmPosition[1];
            var z = hand.palmPosition[2];

            if (z < 10) { z = 10; }
            targets.push({ 'x': x, 'y': y, 'z': z });
          }

          LeapEx.draw(targets);
        }
      }
    };

    $(document.body).click(function() {
      LeapEx.toggle();
    });

    LeapEx.started = true;
    return LeapEx.el;
  },

  draw: function(targets) {
    LeapEx.ctx.clearRect(0, 0, LeapEx.width, LeapEx.height);
    LeapEx.ctx.beginPath();
    for (var i=0; i<targets.length; i++) {
      var target = targets[i];
      LeapEx.ctx.arc(LeapEx.scale(target.x, LeapEx.leapMinX, LeapEx.leapMaxX, -100, LeapEx.width),
                     LeapEx.scale(target.y, LeapEx.leapMinY, LeapEx.leapMaxY, LeapEx.height, -100),
                     target.z, 0, Math.PI*2, true);
      LeapEx.ctx.closePath();
      LeapEx.ctx.fill();
    }
  },

  scale: function(value, oldMin, oldMax, newMin, newMax) {
    return (((newMax - newMin) * (value - oldMin)) / (oldMax - oldMin)) + newMin;
  },

  toggle: function() {
    if (LeapEx.started) {
      LeapEx.started = false;
    } else {
      LeapEx.started = true;
    }
  },

  debug: function(message) {
    if (LeapEx.debugEl) {
      console.log("hey");
    }
  }
};

LeapEx.init('#canvas', '#debug');*/

//var controller = new Leap.Controller();
/*var count = 0;
controller.on('frame', function(hand){
    if(hand.pointables.length > 0)
    {
    	console.log("hand pointables: " + hand.pointables[0]);
        var touchDistance = hand.pointables[0].touchDistance;
        console.log("touchDistance: " + touchDistance);
        if (touchDistance < 0) {
        	count++;
        }
        if (count > 50) {
        	window.location.replace("./viewImage.html");
        }
    }
});
controller.connect();

}


/*Leap.loop(function (frame) {
	// state machine
	switch(state) {
		case 1:
			if(frame.hands.length > 0) {
				cardFlip(true);
			}
			else {
				cardFlip(false);				// if there are no hands detected, reset the rotations to 0
			}
		  break;
		case 2:
		  break;
		default:
	}

});*/

//}