const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function getpointerdata(event) {
    console.log("pressure: " + event.pressure);
    console.log("tangentialPressure: " + event.tangentialPressure);
    console.log("pointerType: " + event.pointerType);
    console.log("isPrimary: " + event.isPrimary);
    console.log("pointerId: " + event.pointerId);
    console.log("tiltX: " + event.tiltX);
    console.log("tiltY: " + event.tiltY);
    console.log("twist: " + event.twist);
    console.log("width: " + event.width);
    console.log("height: " + event.height);
    console.log("clientX: " + event.clientX);
    console.log("clientY: " + event.clientY);
    console.log("button: " + event.button);
    console.log("buttons: " + event.buttons);
}

canvas.onpointerenter = function(event) {
    canvas.onpointerdown = getpointerdata;
    // canvas.onpointermove = getpointerdata;


};