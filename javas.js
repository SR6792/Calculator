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
function outp(out)
{
    out.addEventListener("mouseenter",hovers);
    out.addEventListener("mouseleave",unhovers);
    out.addEventListener("click",()=>{
        const res=clrd(out);
        return res;
    });
}
function clrd(opt){//function for clr and del
    if(opt==="AC"){
        out.textContent="";
        x=null;
        y=null;
        op=null;//to ensure all values are reverted to basic
    }
    else if(opt==="dl"){
        out.textContent="";
    }
    else{
        out.textContent=opt;
    }
}

//the above code is to short instead of writing the entire thing

const a=document.querySelector(".clr");
outp("AC");

const a1=document.querySelector(".percent");
a1.addEventListener("mouseenter",hovers);
a1.addEventListener("mouseleave",unhovers);
a1.addEventListener("click",()=>{
    outp("%");
});

const a2=document.querySelector(".delete");
a2.addEventListener("mouseenter",hovers);
a2.addEventListener("mouseleave",unhovers);
a2.addEventListener("click",()=>{
    outp("dl");
});

const a3=document.querySelector(".divide");
a3.addEventListener("mouseenter",hovers);
a3.addEventListener("mouseleave",unhovers);
a3.addEventListener("click",()=>{
    const result=div(a,b);
    return result;
});

const a4=document.querySelector(".seven");
a4.addEventListener("mouseenter",hovers);
a4.addEventListener("mouseleave",unhovers);
a4.addEventListener("click",)

const a5=document.querySelector(".eight");
a5.addEventListener("mouseenter",hovers);
a5.addEventListener("mouseleave",unhovers);

const a6=document.querySelector(".nine");
a6.addEventListener("mouseenter",hovers);
a6.addEventListener("mouseleave",unhovers);

const a7=document.querySelector(".four");
a7.addEventListener("mouseenter",hovers);
a7.addEventListener("mouseleave",unhovers);

const a8=document.querySelector(".five");
a8.addEventListener("mouseenter",hovers);
a8.addEventListener("mouseleave",unhovers);

const a9=document.querySelector(".six");
a9.addEventListener("mouseenter",hovers);
a9.addEventListener("mouseleave",unhovers);

const a10=document.querySelector(".minus");
a10.addEventListener("mouseenter",hovers);
a10.addEventListener("mouseleave",unhovers);

const a11=document.querySelector(".one");
a11.addEventListener("mouseenter",hovers);
a11.addEventListener("mouseleave",unhovers);

const a12=document.querySelector(".two");
a12.addEventListener("mouseenter",hovers);
a12.addEventListener("mouseleave",unhovers);

const a13=document.querySelector(".three");
a13.addEventListener("mouseenter",hovers);
a13.addEventListener("mouseleave",unhovers);

const a14=document.querySelector(".add");
a14.addEventListener("mouseenter",hovers);
a14.addEventListener("mouseleave",unhovers);

const a15=document.querySelector(".double0");
a15.addEventListener("mouseenter",hovers);
a15.addEventListener("mouseleave",unhovers);

const a16=document.querySelector(".zero");
a16.addEventListener("mouseenter",hovers);
a16.addEventListener("mouseleave",unhovers);

const a17=document.querySelector(".decimal");
a17.addEventListener("mouseenter",hovers);
a17.addEventListener("mouseleave",unhovers);

const a18=document.querySelector(".equal");
a18.addEventListener("mouseenter",hovers);
a18.addEventListener("mouseleave",unhovers);

const a19=document.querySelector(".multiply");
a19.addEventListener("mouseenter",hovers);
a19.addEventListener("mouseleave",unhovers);

//dom ends

//create function for add,sub,mul,divide
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

let x;
let y;
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
let eq=document.querySelector(".equal");
eq.addEventListener("click",()=>{

    const result=operate(op,a,b);
    console.log(result);
} );

