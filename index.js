const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const penPointertype = "pen";
const pointerId = 1;
const noPressureSupport = 0.5;
const notangentialPressureSupport = 0;
const notiltXSupport = 0;
const notiltYSupport = 0;
const notwistSupport = 0;
const noWidthSupport = 1;
const noHeightSupport = 1;

// Button when not moving

const penEraserButton = 5;
const penBarrelButton = 2;
const penContact = 0;

// Buttons state when moving

const penEraserButtonMoved = 32;
const penBarrelButtonMoved = 2;
const penContactMoved = 1;


var msg = {
    messages: "",
    log: function(text){ this.messages += `<p class=\"log\">${text}</p>`},
    warn: function(text){ this.messages += `<p class=\"warning\">⚠️ ${text}</p>`},
    center: function(text){ this.messages += `<div class=\"center\"><p>${text}</p></div>`},
    publish: function(){
        log.innerHTML = this.messages;
        this.messages = "";
    }    
}

// msg.log = console.log;
// msg.warn = console.warn;

msg.center("Tap inside the green rectangle to test if your browser detects your digitizer");
msg.publish();


function getpointerdata(event) {  
    msg.log("pointerType: " + event.pointerType);
    if (event.pointerType == penPointertype) {

        if (event.button == penContact) {
            msg.log("[Pen Contact]");
        }
        else if (event.button == penEraserButton) {
            msg.log("[Eraser]");
        }
        else if (event.button == penBarrelButton) {
            msg.log("[Pen Barrel Button]");
        }
        else {
            msg.log("button: " + event.button);
        }



        // Detect Buttons Pressed During movement
        // if (event.buttons == penContactMoved) {
        //     console.log("Pen Contact Dectected");
        // }
        // if (event.buttons == penEraserButtonMoved) {
        //     console.log("Eraser Detected");
        // }
        // if (event.buttons == penBarrelButtonMoved) {
        //     console.log("Pen Barrel Button Detected");
        // }

        if (event.pressure != noPressureSupport) {
            msg.log("pressure: " + event.pressure);
        }
        else {
            msg.warn("No Pressure Detected.");
        }

        if (event.tangentialPressure != notangentialPressureSupport) {
            msg.log("tangentialPressure: " + event.tangentialPressure);
        }
        else {
            msg.warn("No Tangential Pressure Detected.");
        }

        if (event.tiltX != notiltXSupport && event.tiltY != notiltYSupport) {
            msg.log("tilt X: " + event.tiltX + " Y: " + event.tiltY);
        }
        else {
            msg.warn("No Tilt Detected");
        }

        if (event.twist != notwistSupport) {
            msg.log("twist: " + event.twist);
        }
        else {
            msg.warn("No Twist Detected");
        }
        if (event.width != noWidthSupport && event.height != noHeightSupport) {
            msg.log("contact: Width: " + event.width + " Height: " + event.height);
        }
        else {
            msg.warn("No Contact Geometry Detected")
        }

    }
    else {
        msg.warn("Pen not Detected.");
        msg.log("button: " + event.button);
    }
    // console.log("isPrimary: " + event.isPrimary); //used for multitouch
    msg.log("pointerId: " + event.pointerId);
    msg.log("client: X: " + event.clientX + " Y: " + event.clientY);
    msg.log("----------------------------------------------")
    // console.log("buttons: " + event.buttons); //used for when pointer is moved
    msg.publish();
}

canvas.onpointerenter = function (event) {
    canvas.onpointerdown = getpointerdata;
    // canvas.onpointermove = getpointerdata;


};