const n=10000000;
let minfact=Array.from({length:n},(v,i)=>i);
minfact.forEach((v,i)=>{
    if(i==0||i==1||v!=i)return;
    for(let j=i*2;j<n;j+=i)if(minfact[j]==j)minfact[j]=i;
})
function onEntered(){
    let numv=document.getElementById("numinput").value;
    let num=Number(numv);
    let text=document.getElementById("textinput"),ret="";
    let com=1;
    if(numv.length==0){
        text.value=`Error`+(com?`: Please type a number above.`:``);
        return;
    }
    if(num>=n){
        text.value=`Error`+(com?`: The number must be less than ${n}.`:``);
        return;
    }
    if(num<=1){
        text.value=`Error`+(com?`: The number must be greater than or equal to 2.`:``);
        return;
    }
    if(!Number.isInteger(num)){
        text.value=`Error`+(com?`: The number must be an integer.`:``);
        return;
    }
    while(num>1){
        const minf=minfact[num];
        let count=0;
        while(num%minf==0)num/=minf,count++;
        ret+=(ret.length==0?"":"*")+minf+(count>1?"^"+count:"");
    }
    text.value=ret;
}
document.getElementById("enter").addEventListener("click",onEntered);
document.getElementById("numinput").addEventListener("input",ev=>{
    onEntered();
})