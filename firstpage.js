let UI=document.getElementById("UI")
let U1=document.getElementById("U1")
let U2=document.getElementById("U2")
let Z1=document.getElementById("Z1")
Z1.addEventListener("mouseover",()=>{
    UI.style=`
    position:relative;
    top:10px;
    left:10px
    
    `
    U1.style=` border: 2px solid;`

    U2.style=`
    background-color: hsla(248, 53%, 58%,0.5);
    top:11px;
    left:30px
    
    `

    U2.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i>&#8594</i></a>`
  Z1.style=` cursor: pointer;`
})

Z1.addEventListener("mouseout",()=>{
    UI.style=`
    position:relative;
    top:0px;
    left:0px
    
    `

    U1.style=` border: none;`

    U2.style=`
    background-color:none;
    position:absolute;
   
    `
    
    U2.innerHTML=`<a href="" style="text-decoration: none;"  ></a>`
})

//image 2

let BI=document.getElementById("BI")
let U3=document.getElementById("U3")
let U4=document.getElementById("U4")
let Z2=document.getElementById("Z2")
Z2.addEventListener("mouseover",()=>{
    BI.style=`
    position:relative;
    top:10px;
    left:10px
    
    `
    U3.style=` border: 2px solid;`

    U4.style=`
    background-color: hsla(248, 53%, 58%,0.5);
    top:11px;
    left:24px
    
    `
    Z2.style=` cursor: pointer;`
    U4.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i>&#8594</i></a>`
})

Z2.addEventListener("mouseout",()=>{
    U3.style.border=`none`;

    BI.style=`
    position:relative;
    top:0px;
    left:0px
    
    `

    U4.style=`
    background-color:none;
   position:absolute;
    
    `
    U4.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i></i></a>`

})

//IMAGE 3

let AI=document.getElementById("AI")
let U5=document.getElementById("U5")
let U6=document.getElementById("U6")
let Z3=document.getElementById("Z3")

console.log(U6);
Z3.addEventListener("mouseover",()=>{
    U5.style=`border: 2px solid;`

    AI.style=` position:relative;
    transform: translate(10px,10px);
    
    `
  U6.style=`   background-color: hsla(248, 53%, 58%,0.5);
  transform: translate(10px,10px);
  `
  U6.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i>&#8594</i></a>`

  Z3.style=` cursor: pointer;`
   
})

Z3.addEventListener("mouseout",()=>{
    U5.style.border=`none`;

    AI.style=`
    transform: translate(0px,0px);
    `

    U6.style=`background-color: none;
    transform: translate(0px,0px);`

    U6.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i></i></a>`
})

//IMAGE 4

let U7=document.getElementById("U7")
let U8=document.getElementById("U8")
let CI=document.getElementById("CI")
let Z4=document.getElementById("Z4") 
Z4.addEventListener("mouseover",()=>{
    U7.style.border=`2px solid`

    CI.style=`transform: translate(10px,10px);`

    U8.style=` background-color: hsla(248, 53%, 58%,0.5);
    transform: translate(10px,10px);
    `
    U8.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i>&#8594</i></a>`
    Z4.style=` cursor: pointer;`
})

Z4.addEventListener("mouseout",()=>{
    U7.style.border=`none`

    CI.style=`transform: translate(0px,0px);`

    U8.style=` background-color:none;
    transform: translate(0px,0px);
    `
    U8.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i></i></a>`

})

//IMAGE 5

let U9=document.getElementById("U9")
let U10=document.getElementById("U10")
let DI=document.getElementById("DI")
let Z5=document.getElementById("Z5") 
Z5.addEventListener("mouseover",()=>{
    U9.style.border=`2px solid`

    DI.style=`transform: translate(10px,10px);`

    U10.style=` background-color: hsla(248, 53%, 58%,0.5);
    transform: translate(10px,10px);
    `
    U10.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i>&#8594</i></a>`
    Z5.style=` cursor: pointer;`
})

Z5.addEventListener("mouseout",()=>{
    U9.style.border=`none`

    DI.style=`transform: translate(0px,0px);`

    U10.style=` background-color:none;
    transform: translate(0px,0px);
    `
    U10.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i></i></a>`

})

//IMAGE 6

let U11=document.getElementById("U11")
let U12=document.getElementById("U12")
let EI=document.getElementById("EI")
let Z6=document.getElementById("Z6") 
Z6.addEventListener("mouseover",()=>{
    U11.style.border=`2px solid`

    EI.style=`transform: translate(10px,10px);`

    U12.style=` background-color: hsla(248, 53%, 58%,0.5);
    transform: translate(10px,10px);
    `
    U12.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i>&#8594</i></a>`
    Z6.style=` cursor: pointer;`
})

Z6.addEventListener("mouseout",()=>{
    U9.style.border=`none`

    EI.style=`transform: translate(0px,0px);`

    U12.style=` background-color:none;
    transform: translate(0px,0px);
    `
    U12.innerHTML=`<a href="" style="text-decoration: none;  font-size: 40px;  color: black; font-weight: 700;"  ><i></i></a>`

})

//inputs

let n=document.getElementById("Name")

n.addEventListener("click",()=>{
})

//pop up
let services=document.getElementById("services")
let pop=document.getElementById("pop")


services.addEventListener("mouseover",()=>{
    pop.style=`display:block`;
    ball1.style=`transition: all 3s ease;
display:block;
transform: translateY(30px);
`
    
})

services.addEventListener("mouseout",()=>{
    pop.style=`display:none`
    ball1.style=`display:none`
})

//ball dowm

let home=document.getElementById("home")
let About=document.getElementById("About")
let help=document.getElementById("help")
let ball=document.getElementById("ball")
let ball1=document.getElementById("ball1")
let ball2=document.getElementById("ball2")
let ball3=document.getElementById("ball3")

home.addEventListener("mouseover",()=>{

ball.style=`transition: all 3s ease;
display:block;
position:relative;
top:30px;
transition-duration: 2s;
transition-timing-function: linear;
`
})

home.addEventListener("mouseout",()=>{
    ball.style=`display:none`
    })


    About.addEventListener("mouseover",()=>{

        ball2.style=`transition: all 3s ease;
        display:block;
        transform: translateY(30px);
        `
        })
        
        About.addEventListener("mouseout",()=>{
            ball2.style=`display:none`
            })

            help.addEventListener("mouseover",()=>{

                ball3.style=`transition: all 3s ease;
                display:block;
                transform: translateY(30px);
                `
                })
                
                help.addEventListener("mouseout",()=>{
                    ball3.style=`display:none;
                    transform: translateY(0px);
                    `
                    })


//nav 
let nav=document.querySelector("nav")
console.log(nav);
nav.addEventListener("scroll",()=>{
    nav.style=`border-bottom: 2px gray;`
})

//

let t1=document.getElementById("t1")
let p1=document.getElementById("p1")
let a1=document.getElementById("a11")
t1.addEventListener("click",()=>{
    p1.style=`z-index:7;`
    p2.style=`z-index:5;`
    p3.style=`z-index:6;`
    a1.style=`border-bottom: 3px solid #72dfe9;color:black;`
    a2.style=`border-bottom: 3px solid #f2f5f2;color:#bcbcbd;`
    a3.style=`border-bottom: 3px solid #f2f5f2;color:#bcbcbd;`
})

let t2=document.getElementById("t2")
let p2=document.getElementById("p2")
let a2=document.getElementById("a21")
t2.addEventListener("click",()=>{
    p2.style=`z-index:7;`
    p1.style=`z-index:5;`
    p3.style=`z-index:6;`
    a2.style=`border-bottom: 3px solid #72dfe9;color:black;`
    a1.style=`border-bottom: 3px solid #f2f5f2;color:#bcbcbd;`
    a3.style=`border-bottom: 3px solid #f2f5f2;color:#bcbcbd;`
})

let t3=document.getElementById("t3")
let p3=document.getElementById("p3")
let a3=document.getElementById("a31")
t3.addEventListener("click",()=>{
    p3.style=`z-index:7;`
    p2.style=`z-index:5;`
    p3.style=`z-index:6;`
    a3.style=`border-bottom: 3px solid #72dfe9;color:black;`
    a2.style=`border-bottom: 3px solid #f2f5f2;color:#bcbcbd;`
    a1.style=`border-bottom: 3px solid #f2f5f2;color:#bcbcbd;`
})
