/* main2.js */

window.onload = function() {
    /* 주메뉴 */
var gnbMenu = document.querySelectorAll('.gnb > ul > li');
var headerWrap = document.querySelector('.header_wrap');
console.log(gnbMenu);
/* .querySelectorAll() - 괄호안에 해당하는 모든것들을 가져옴 */
/* .querySelector() - 괄호안에 해당하는 요소만 가져옴 */

for(var i=0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener('mouseover',function(){ /* .addEventListener() - 괄호안의 이벤트를 추가해라 */
        this.className += 'on'; /* li 하나하나에 class 'on'을 더해준다 */
        var ht = this.children[1].offsetHeight; /* offsetHeight - 높이값을 가져온다 */
        headerWrap.style.height = 70 + ht + 'px';
    });

    gnbMenu[i].addEventListener('mouseout',function(){ // 마우스를 떼면
        this.classList.remove('on'); // 클래스 리스트에서 on을 지워준다
        headerWrap.style.height = '70px';
    });
}

/* 검색버튼 */

var srchBtn = document.querySelector('.btn_srch');
var srchCloseBtn = document.querySelector('a.btn_srch_close');
var srchWrap = document.querySelector('.srch_wrap');

   srchBtn.addEventListener("click", function(){
      srchWrap.className += ' on';
   });

   srchCloseBtn.addEventListener("click", function(){
      srchWrap.classList.remove('on');
   });

/* 오토배너 */
var btnNext = document.querySelector('.btn_next');
var btnPrev = document.querySelector('.btn_prev');
var slide = document.querySelectorAll('.slide');
var slideRoll = document.querySelectorAll('.slide_roll li');
var btnPlay = document.querySelector('.btn_play');

var bnnNum = 0;
var lastNum = document.querySelectorAll('.slide_wrap > li').length -1;

// next 버튼
btnNext.addEventListener('click',function(){
    bnnNum++;
    if(bnnNum > lastNum){ bnnNum = 0;}

    slide.forEach(function(item){
        item.classList.remove('actvie');
    });
    slide[bnnNum].classList.add('active');

    slideRoll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideRoll[bnnNum].classList.add('on');
});

// prev 버튼
btnPrev.addEventListener('click',function(){
    bnnNum--;
    if(bnnNum<0){ bnnNum = lastNum;}

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[bnnNum].classList.add('active');

    slideRoll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideRoll[bnnNum].classList.add('on');

});

// 오토배너
function autoBanner(){
    // next버튼 눌렀을 때
    bnnNum++;
    if(bnnNum > lastNum){ bnnNum=0; }

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[bnnNum].classList.add('active');

    slideRoll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideRoll[bnnNum].classList.add('on');
}
var autoBnn = setInterval(autoBanner,5000);

// 배너 재생 멈춤 버튼
var flag = true;
btnPlay.addEventListener('click',function(){
    if(flag){
        clearInterval(autoBnn);
        this.classList.add('on');
        flag = flase;
    }else{
        autoBnn = setInterval(AutoBanner,5000);
        this.classList.remove('on');
        flag = true;
    }
});

// 롤링버튼클릭
// $(".box").next();
// $(".box").prev();
// $(".box").parent();

// var box = document.querySelector(".box");
// box.nextSibling;
// box.previousSibling;
// box.parentElement;

slideRoll.forEach(function(item){
    item.addEventListener('click', rollAction);
});

function rollAction(item){
    curRoll = item.currentTarget; // 클릭이벤트가 전달된 엘리먼트
    parentRoll = curRoll.parentElement; // 연결된 엘리먼트의 부모
    childRoll = parentRoll.children; // 부모 엘리먼트의 자식 엘리먼트들
    curIdx = Array.from(childRoll).indexOf(curRoll); // 연결된 엘리먼트의 인덱스

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[curIdx].classList.add('active');

    slideRoll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideRoll[curIdx].classList.add('on');
    bnnNum = curIdx;

}

// top 버튼
var btnTop = document.querySelector('.btn_top');

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('html').scrollTop;
    console.log(scroll);

    if(scroll <= 0){
        btnTop.classList.remove("on","ab");
    }else if(scroll > 0 && scroll < 2700){
        btnTop.classList.remove("ab");
        btnTop.classList.add("on");
    }else{
        btnTop.classList.add("ab");
    }
});

btnTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

}
