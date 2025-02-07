"use strict";
{   const hamburger = document.querySelector("#js-hamburger");
    const sidebackground = document.querySelector(".l-sidebar__background");
    const nav = document.querySelector(".l-sidebar__nav");
    const closemenu = document.querySelector("#js-close");

    console.log(hamburger, sidebackground, nav,  closemenu);

        hamburger.addEventListener('click',function(){
            console.log("Hamburger clicked!");
        /*sidebackground.classList.toggle('appear');*/
        nav.classList.toggle('open');
        });

        closemenu.addEventListener('click',function(){
            console.log("Close menu clicked!");
            nav.classList.toggle('open');
        });
    }{
        const close = document.querySelector("#js-wrapper");
        const background = document.querySelector(".l-sidebar__background");

          close.addEventListener('click',function(){
                console.log("Background clicked!");
        background.classList.add('appear');/*もう一回押したら消えるように*/

        });

    }
    