function hovers(key){
    const btn=key.target;
    btn.style.transform="scale(1.4)";
    btn.style.backgroundColor="black";
    btn.style.color="white";
}

function unhovers(key){
    const btn=key.target;
    btn.style.transform="scale(1)";
    btn.style.backgroundColor="transparent";
    btn.style.color="black";
}
const out=document.querySelector(".output");//declare output globally
//dom for hover effect and revert back to normal effect and then on click to enter value
let flag=0;//to check x and y check before op(x) and aftger (y) so flag
function outp(btn,value)
{
    btn.addEventListener("mouseenter",hovers);
    btn.addEventListener("mouseleave",unhovers);
    btn.addEventListener("click",()=>{
        const res=clrd(value);
        return res;
    });
}
function clrd(opt){//function for clr and del
    if(opt==="AC"){
        x="";
        y="";
        result=null;
        op=null;//to ensure all values are reverted to basic
        out.textContent="";

    }
    else if(opt==="dl"){
        out.textContent="";
    }
    else if(opt==="eq"){
        if(op==="+"||op==="-"||op==="*"||op==="/")
        {
            const result=operate(op,Number(x),Number(y));
            out.textContent=result;
            x=result.toString();
            y="";
            op="";
            flag=0;
        }
        else if(x===""){
            out.textContent="Error";
        }
    }
    else if(opt==="00")
    {
        if(flag===0){//before flag
            x+=opt;
            out.textContent=x;
        }
        else{
            y+=opt;
            out.textContent=y;
        }
    }
    else if((opt==="+"||opt==="-"||opt==="*"||opt==="/"))
    {
        if(x===""){
            out.textContent="Enter number";
        }
        else{
            flag=1;
            op=opt;
            out.textContent=opt;
        }
    }
    else{
        if(flag===0){//before flag
            x+=opt;
            out.textContent=x;
        }
        else{
            y+=opt;
            out.textContent=y;
        }
    }
}
//the above code is to short instead of writing the entire thing

const a=document.querySelector(".clr");
outp(a,"AC");

const a1=document.querySelector(".percent");
outp(a1,"%");

const a2=document.querySelector(".delete");
outp(a2,"dl");

const a3=document.querySelector(".divide");
outp(a3,"/");

const a4=document.querySelector(".seven");
outp(a4,7);

const a5=document.querySelector(".eight");
outp(a5,8);

const a6=document.querySelector(".nine");
outp(a6,9);

const a7=document.querySelector(".four");
outp(a7,4);

const a8=document.querySelector(".five");
outp(a8,5);

const a9=document.querySelector(".six");
outp(a9,6);

const a10=document.querySelector(".minus");
outp(a10,"-");

const a11=document.querySelector(".one");
outp(a11,1);

const a12=document.querySelector(".two");
outp(a12,2);

const a13=document.querySelector(".three");
outp(a13,3);

const a14=document.querySelector(".add");
outp(a14,"+");

const a15=document.querySelector(".double0");
outp(a15,"00");

const a16=document.querySelector(".zero");
outp(a16,0);

const a17=document.querySelector(".decimal");
outp(a17,".");

const a18=document.querySelector(".equal");
outp(a18,"eq");

const a19=document.querySelector(".multiply");
outp(a19,"*");

//dom ends
let result;
//create function for add,sub,mul,divide
function add(a,b){
    result=a+b;
    return result;
}

function sub(a,b){
    result=a-b;
    return result;
}

function mul(a,b){
    result=a*b;
    return result;
}

function div(a,b){
    result=a/b;
    return result;
}

let x="";
let y="";
let op;

function operate(op,a,b){
    if(op==='+')
    {
        return add(a,b);
    }
    else if(op==='-')
    {
        return sub(a,b);
    }
    else if(op==='*'){
        return mul(a,b);
    }
    else if(op==='/'){
        return div(a,b);
    }
}
//function to get result

