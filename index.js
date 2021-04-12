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

// Button when moving

const penEraserButtonMoved = 32;
const penBarrelButtonMoved = 2;
const penContactMoved = 1;

function getpointerdata(event) {
    if (event.pointerType == penPointertype) {
        if (event.pressure != noPressureSupport) {
            console.log("pressure: " + event.pressure);
        }
        else {
            console.log("No Pressure Support Detected.");
        }

        if (event.tangentialPressure != notangentialPressureSupport) {
            console.log("tangentialPressure: " + event.tangentialPressure);
        }
        else {
            console.log("No Tangential Pressure Support Detected.");
        }

        if (event.tiltX != notiltXSupport && event.tiltY != notiltYSupport){
            console.log("tiltX: " + event.tiltX);
            console.log("tiltY: " + event.tiltY);
        }
        else {
            console.log("No Tilt Support Detected");
        }

        if (event.twist != notwistSupport) {
            console.log("twist: " + event.twist);
        }
        else {
            console.log("No Twist Support Detected");
        }
        if (event.width != noWidthSupport && event.height != noHeightSupport) {
            console.log("width: " + event.width);
            console.log("height: " + event.height);
        }
        else {
            console.log("No Contact Geometry Support Detected")
        }

        if (event.button == penContact) {
            console.log("Pen Contact Dectected");
        }
        if (event.button == penEraserButton) {
            console.log("Eraser Detected");
        }
        if (event.button == penBarrelButton) {
            console.log("Pen Barrel Button Detected");
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
    }
    else {
        console.log("Pen Device not Detected.");
    }
    console.log("pointerType: " + event.pointerType);
    // console.log("isPrimary: " + event.isPrimary); //used for multitouch
    console.log("pointerId: " + event.pointerId);
    console.log("clientX: " + event.clientX);
    console.log("clientY: " + event.clientY);
    console.log("button: " + event.button);
    // console.log("buttons: " + event.buttons); //used for when pointer is moved
}

canvas.onpointerenter = function(event) {
    canvas.onpointerdown = getpointerdata;
    // canvas.onpointermove = getpointerdata;


};