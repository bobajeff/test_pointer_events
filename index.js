const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const noPressureSupport = 0.5;
const notangentialPressureSupport = 0;
const notiltXSupport = 0;
const notiltYSupport = 0;
const notwistSupport = 0;
//Contact Geometry (for "touch")
const noWidthSupport = 1;
const noHeightSupport = 1;
//Buttons
const penEraserButton = 5;
const penBarrelButton = 2;
const penContact = 0;


var msg = {
    messages: "",
    error_messages: "",
    log: function (text) {
        this.messages += `<div>${text}<br></div>`;
        console.log(text);
    },
    warn: function (text) {
        // this.messages += `<div class=\"warning\">⚠️ ${text}<br></div>`;
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

msg.center("Tap inside the green rectangle to check for pressure and tilt events.");
msg.publish();


function getpointerdata(event) {
    msg.log("pointerType: " + event.pointerType);
    if (event.pointerType == "pen") {

        // ---------- PEN BUTTONS -------------
        msg.log("button:" + event.button);
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
        // ----------------------------------------
    }
    else {
        msg.err("Pen not Detected.");
    }

    //-----------PEN SENSORS-------------------
    msg.log("pressure: " + event.pressure);
    if (event.pressure == noPressureSupport) {
        msg.warn("No Pressure Detected.");
    }

    msg.log("tiltX: " + event.tiltX + " tiltY: " + event.tiltY);
    if (event.tiltX == notiltXSupport && event.tiltY == notiltYSupport) {
        msg.warn("No Tilt Detected");
    }

    //-------------------------------------------
    console.log("----------------------------------------------")

    msg.publish();
    // console.log(event);
}

canvas.onpointerenter = function (event) {
    canvas.onpointerdown = getpointerdata;
};