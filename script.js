'use strict'

// Declare const 
 const home = document.getElementById("home");
 const skills = document.getElementById("skills");
 const mainHome = document.getElementById("SectionHome");
 const mainAboutMe = document.getElementById("SectionAboutMe");
 const burguerMenu = document.getElementById("toggle");
 const menuAside = document.getElementById("menuAside");
 const toggleLabel = document.getElementById("toggleLabel"); 

 // Declare var 
 // Declare let

 // Onload function , document is ready!
window.onload = function(){
    onClick(e);
    onclickBurguerMenu(burguerMenu,menuAside,mainHome,toggleLabel);
    toggleMenu();
    toggleFooter();
    mainText();
}

// Declare fuctions ..
function preVisualizer(){
 const bodyContainerPos = {
     element : document.getElementById("bodyContainerPos"),
     displayed : function() {
        console.log(this.element);
        setTimeout(()=>{this.element.style.display="grid";},10000);
     }
 };
 const bodyContainerpre = {
    element : document.getElementById("bodyContainerPre"),
    display : function() {
        setTimeout(()=>{this.element.style.display="block";});
    },
    nonDisplayed : function() {
        setTimeout(()=>{this.element.style.display="none";},10000);
    }
 };

 bodyContainerpre.display();
 bodyContainerpre.nonDisplayed();
 setTimeout(bodyContainerPos.displayed(),500);

}
function onClick(e){
    console.log(e);
    const section = document.getElementsByClassName("show-content")[0];
    let flag = !(e.getAttribute("value") == section.id);
    if(flag){
        section.classList.remove("show-content","transition-smooth");
        const sectionTarget = document.getElementById(e.getAttribute("value"));
        sectionTarget.classList.add("show-content");
        setTimeout(()=>{sectionTarget.classList.add("transition-smooth");},500);   
    }
    
}
function onclickBurguerMenu(burguerMenu,menuAside,mainHome,toggleLabel){
    burguerMenu.onclick = ()=>{
        let mainElement = document.getElementsByTagName("main");
        let mainElementLenght = mainElement.length;
        let mainElementArray = [];
        console.log(mainElement);
        for (let i = 0; i < mainElementLenght; i++){
            mainElementArray.push(mainElement[i]);
        }
        console.log(typeof(mainElementArray));
        mainElementArray.forEach(function (current,index,arr){
            let arrayClassList = current.className;
            arr[index] = (arrayClassList.includes("hidden-content")) ? null : current;
        });
        let mainCurrent = mainElementArray.filter(function (value,index){
            return value !== null ;
        });
        console.log(typeof(mainCurrent));
        if (mainCurrent.length <= 1){
            mainCurrent = mainCurrent[0];
        }
        console.log(mainCurrent);
        toggleLabel.classList.toggle("burguer-tab-active");
        mainCurrent.classList.toggle("opacity");
        menuAside.classList.toggle("menu-burguer-show"); 
    }
}
function toggleMenu(){
    const menuAside = document.getElementById("menuAside");
    menuAside.classList.toggle("show-aside");
    const opacity = (menuAside.classList.contains("show-aside"))? "0.1": "1";
    document.querySelector(".main").style.opacity = opacity;
}
function toggleFooter(){
    const footer = document.getElementById("footer");
    const arrowUp = document.getElementById("arrow-up");
    const form = document.getElementById("form");
    const formNodes = [...form.children];
    const main = document.querySelector(".main");
    footer.classList.toggle("show-footer");
    if (footer.classList.contains("show-footer")){
        setTimeout(()=>{
            arrowUp.style.display = "block";
            form.style.display = "grid";
            formNodes.forEach((value,index,arr)=>{
                console.log(value);
            value.style.display="flex";
        })
        },500);
        main.style.opacity = "0.10";
    }
    else{

        arrowUp.style.display = "none";
        setTimeout(()=>{form.style.display = "none";},300);
        setTimeout(()=>{
            formNodes.forEach((value,index,arr)=>{
                value.style.display="none";
            })
            main.style.opacity = "1";
        },500)
    }
}
