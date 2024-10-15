const can=document.createElement("canvas");
document.body.appendChild(can);
can.width=600,can.height=600;
const ctx=can.getContext("2d");
const field={x:0,y:0,w:400,h:600};
const draw=()=>{
    ctx.clearRect(0,0,can.width,can.height);
    ctx.strokeStyle="black";
    ctx.strokeRect(field.x,field.y,field.w,field.h);

}
const loop=()=>{
    console.log("success");
    draw();
    requestAnimationFrame(loop);
}
loop();

class ball{
    constructor(x,y,dx,dy,r=2){
        this.x=x,this.y=y,this.dx=dx,this.dy=dy,this.r=r;
    }
    update(){
        //ctx.fillRect(this.x-this.r,this.y-this.r,2*this.r,2*this.r);
        //this.x=max(0,min(this.x+this.dx,field.w));
        this.y=max(0,min(this.y+this.dy,field.h));
    }
}
class board{
    constructor(x,y,w,h){
        this.x=x,this.y=y,this.w=w,this.h=h;
    }
}
class button{
    constructor(x,y,w,h){
        this.x=x,this.y=y,this.w=w,this.h=h;
    }
}
function iscrossing(p1,p2,p3,p4){
    if(f12(p3)*f12(p4)>0||f34(p1)*f34(p2)>0)return undefined;
    else {
        const x=0;
        y=(y2-y1)/(x2-x1) (x-x1)+y1
        (x-x1)*(y2-y1)*(x4-x3)-(x-x3)*(y4-y3)*(x2-x1)+(y1-y3)*(x2-x1)*(x4-x3)
    }
    function f12(p){
        return (p.y-p1.y)*(p2.x-p1.x)-(p2.y-p1.y)*(p.x-p1.x);
    }
    function f34(p){
        return (p.y-p3.y)*(p4.x-p3.x)-(p4.y-p3.y)*(p.x-p3.x);
    }
}