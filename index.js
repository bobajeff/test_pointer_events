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

function getpointerdata(event) {
    console.log("pointerType: " + event.pointerType);
    if (event.pointerType == penPointertype) {

        if (event.button == penContact) {
            console.log("[Pen Contact]");
        }
        else if (event.button == penEraserButton) {
            console.log("[Eraser]");
        }
        else if (event.button == penBarrelButton) {
            console.log("[Pen Barrel Button]");
        }
        else {
            console.log("button: " + event.button);
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
            console.log("pressure: " + event.pressure);
        }
        else {
            console.warn("No Pressure Support Detected.");
        }

        if (event.tangentialPressure != notangentialPressureSupport) {
            console.log("tangentialPressure: " + event.tangentialPressure);
        }
        else {
            console.warn("No Tangential Pressure Support Detected.");
        }

        if (event.tiltX != notiltXSupport && event.tiltY != notiltYSupport) {
            console.log("tilt X: " + event.tiltX + "Y: " + event.tiltY);
        }
        else {
            console.warn("No Tilt Support Detected");
        }

        if (event.twist != notwistSupport) {
            console.log("twist: " + event.twist);
        }
        else {
            console.warn("No Twist Support Detected");
        }
        if (event.width != noWidthSupport && event.height != noHeightSupport) {
            console.log("contact: width: " + event.width + "height: " + event.height);
        }
        else {
            console.warn("No Contact Geometry Support Detected")
        }

    }
    else {
        console.warn("Pen not Detected.");
        console.log("button: " + event.button);
    }
    // console.log("isPrimary: " + event.isPrimary); //used for multitouch
    console.log("pointerId: " + event.pointerId);
    console.log("client: X: " + event.clientX + " Y: " + event.clientY);
    console.log("----------------------------------------------")
    // console.log("buttons: " + event.buttons); //used for when pointer is moved
}

canvas.onpointerenter = function (event) {
    canvas.onpointerdown = getpointerdata;
    // canvas.onpointermove = getpointerdata;


};