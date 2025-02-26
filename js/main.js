"use strict";
    //ハンバーガーメニュー
    const hamburger = document.querySelector("#js-hamburger");
    const nav = document.querySelector(".l-sidebar__nav");
    const closemenu = document.querySelector("#js-close");
    const backgroundblack = document.querySelector(".l-sidebar__background");
    const fix = document.querySelector(".l-wrapper");
    const fixButton = document.querySelector(".c-button__close__area");


    hamburger.addEventListener('click',function(){
        nav.classList.toggle('open');
        backgroundblack.classList.toggle('appear');
        fix.classList.toggle('fix');
        fixButton.classList.toggle('fixButton');
    });
    closemenu.addEventListener('click',function(){
        nav.classList.toggle('open');
        backgroundblack.classList.toggle('appear');
        fix.classList.toggle('fix');
        fixButton.classList.toggle('fixButton');
        
    });
    
/*
    //黒背景１回目クリックで出現。その後さらに２回クリックで消えるハンバーガーメニューのコード。（メニューを×で消す時、l-wrapperもクリックしてしまっているのでここで１回とカウント）

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
    const close = document.querySelector("#js-wrapper");
    
    
    close.addEventListener('click',function(){
            backgroundclickcount++;
        if(! nav.classList.contains('open') && backgroundclickcount >= 2
        //ここで２以上としておかないと、×以外を何度かクリックした後に×でメニューを閉じたとき、背景が同時に閉じてしまう
        ){
            backgroundblack.classList.remove('appear');
        }
        else {
        }
    });

//検索窓に検索ワードを残す
const urlParams = new URLSearchParams(window.location.search);
  // 「q」という名前のパラメータの値を取得
  const searchWord = urlParams.get('q'); 
  // 検索ワードが存在すれば、検索窓にセットする
  if (searchWord) {
    document.getElementById('js-search').value = searchWord;
  }
*/