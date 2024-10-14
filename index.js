const can=document.createElement("canvas");
document.body.appendChild(can);
can.width=400,can.height=400;
const ctx=can.getContext("2d");
const draw=()=>{
    ctx.fillStyle="black";
    ctx.fillRect(10,10,300,300);
}
const loop=()=>{
    console.log("success");
    draw();
    requestAnimationFrame(loop);
}
loop();