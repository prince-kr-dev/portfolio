function gsapScroll(){

    gsap.from("#home nav a", {
        y:-50,
        opacity: 0,
        duration: 1,
        stagger:0.1,
    })
    gsap.from(".name-container h1",{
        y:60,
        opacity:0,
        duration:0.8
    })
    gsap.from(".name-container h4",{
        y:-60,
        opacity:0,
        duration:0.8
    })
    gsap.from(".btm-wrap .socials a",{
        y:50,
        opacity:0,
        duration: 0.7,
        stagger:0.1
    })


    gsap.from("#pg2-right",{
        y:200,
        opacity:0,
        duration:2,
        delay:0.9,
        scrollTrigger:{
            trigger:"#about #pg2-right",
            scroll:"body",
            // markers:true,
            start:"top 75%",
            end:"top 30%",
            scrub:true
        }
    })


    gsap.from(".skills",{
        y:150,
        opacity:0,
        duration:2,
        delay:0.9,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#skills .skills",
            scroll:"body",
            // markers:true,
            start:"top 100%",
            end:"top 75%",
            scrub:true
        }
    })
    gsap.from("#pg3-left h1",{
        y:200,
        opacity:0,
        duration:2,
        delay:0.9,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#pg3-left h1",
            scroll:"body",
            // markers:true,
            start:"top 100%",
            end:"top 75%",
            scrub:true
        }
    })
    gsap.from("#pg3-left .line",{
        y:200,
        opacity:0,
        duration:2,
        delay:0.9,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#pg3-left .line",
            scroll:"body",
            // markers:true,
            start:"top 100%",
            end:"top 75%",
            scrub:true
        }
    })
    gsap.from(".hidden-nav .wrapper a",{
        y:-100,
        opacity: 0,
        duration: 1,
        stagger:0.2,
        delay:1.2
    })


}

function hiddenNav(){
    let menu = document.querySelector("#menu");
    let hide = document.querySelector("#close");
    let hiddenNav = document.querySelector(".hidden-nav");
    
    menu.addEventListener("click", ()=>{
        hiddenNav.style.top = "0%";
    })
    hide.addEventListener("click", ()=>{
        hiddenNav.style.top = "-50%";
    })  
}


gsapScroll();
hiddenNav();


let home = document.querySelector("#btn1");
let about = document.querySelector("#btn2");
let skills = document.querySelector("#btn3");
let contact = document.querySelector("#btn4");


home.addEventListener("click", ()=>{
    home.style.backgroundColor = "#F1E1FB";
    about.style.backgroundColor = "transparent";
    skills.style.backgroundColor = "transparent";
    contact.style.backgroundColor = "transparent";
})
about.addEventListener("click", ()=>{
    home.style.backgroundColor = "transparent";
    about.style.backgroundColor = "#F1E1FB";
    skills.style.backgroundColor = "transparent";
    contact.style.backgroundColor = "transparent";
})
skills.addEventListener("click", ()=>{
    home.style.backgroundColor = "transparent";
    about.style.backgroundColor = "transparent";
    skills.style.backgroundColor = "#F1E1FB";
    contact.style.backgroundColor = "transparent";
})
contact.addEventListener("click", ()=>{
    home.style.backgroundColor = "transparent";
    about.style.backgroundColor = "transparent";
    skills.style.backgroundColor = "transparent";
    contact.style.backgroundColor = "#F1E1FB";
})