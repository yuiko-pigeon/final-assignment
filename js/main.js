"use strict";
    //ハンバーガーメニュー
    const hamburger = document.querySelector("#js-hamburger");
    const nav = document.querySelector(".l-sidebar__nav");
    const closemenu = document.querySelector("#js-close");
    const backgroundblack = document.querySelector(".l-sidebar__background");
    let backgroundclickcount = 0;


    hamburger.addEventListener('click',function(){
        nav.classList.toggle('open');
        backgroundblack.classList.add('appear');
       
    });
    closemenu.addEventListener('click',function(){
        nav.classList.toggle('open');
        backgroundclickcount = 0;
    });
    

    //黒背景。１回目クリックで出現。3回目のクリックで消える。
    const close = document.querySelector("#js-wrapper");
    
    
    close.addEventListener('click',function(){
            backgroundclickcount++;
        if(! nav.classList.contains('open') && backgroundclickcount >= 2){
            backgroundblack.classList.remove('appear');
            
        }
        else {
        }
    });
        

    
    