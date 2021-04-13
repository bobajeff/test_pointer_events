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
    error_messages: "",
    log: function (text) {
        this.messages += `<div>${text}<br></div>`;
        console.log(text);
    },
    warn: function (text) {
        this.messages += `<div class=\"warning\">⚠️ ${text}<br></div>`;
        console.warn(text);
    },
    err: function (text) {
        this.error_messages += `${text}<br><br>`;
        console.error(text);
    },
    center: function (text) { this.messages += `<div class=\"center\"><div>${text}</div></div>` },
    publish: function () {
        if (this.error_messages != "") {
            log.classList.add("redbg");
            this.red = true;
            this.messages += `<div class=\"center\"><div>${this.error_messages}</div></div>`;
            log.innerHTML = this.messages;
            this.error_messages = "";
            this.messages = "";
        }
        else {
            if (this.red == true) {
                log.classList.remove("redbg");
                this.red = false;
            }
            log.innerHTML = this.messages;
            this.messages = "";
        }
    }
}

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

    }
    else {
        msg.err("Pen not Detected.");
        msg.err("pointerType = \"" + event.pointerType + "\"");
    }

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
    msg.log("pointerId: " + event.pointerId);
    msg.log("client: X: " + event.clientX + " Y: " + event.clientY);
    msg.log("----------------------------------------------")

    msg.publish();
}

canvas.onpointerenter = function (event) {
    canvas.onpointerdown = getpointerdata;
};