//헤더 스크롤 기능 구현 
const header = document.querySelector("#header");
const cont = document.querySelectorAll(".cont");
const gnb = document.querySelectorAll(".gnb >li ");


//햄버거빵 메뉴 클릭시 . depth2 나오게 처리 
const subMenu = document.querySelector((".subMenu"));
const sideMenu = document.querySelector(".sideMenu");
const closebtn = document.querySelector(".closebtn");

subMenu.addEventListener("click",function(e){
    e.preventDefault();
    sideMenu.classList.add("on");
});
closebtn.addEventListener("click",function(e){
    e.preventDefault();
    sideMenu.classList.remove("on");
});



//스크롤 했을 때 cont , cont1  //cont 위치값 담아줄 변수(배열)
let contStart1 = [];

window.addEventListener("scroll",function(){
    let scTop = window.scrollY;

        // for(let i =0 ; i < cont.length; i++ ){
        //     contStart1[i] = cont[i].offsetTop;
        // }
        cont.forEach(function(el,index){
            contStart1[index] = el.offsetTop;
        });
        

        for(let i = 0; i <gnb.length; i++){

            if(scTop >= contStart1[i]){
                for(let j=0;j<gnb.length;j++){
                    gnb[j].classList.remove("on");
                }
                gnb[i].classList.add("on");

            }
        }
        if(scTop >= contStart1[1]-80){
            header.classList.add("fixed");
        }

        else{
            header.classList.remove("fixed");

        }
});


//gnb 클릭시 해당 화면으로 이동, 스크롤바의 위치가 부드럽게 이동
for(let i = 0; i <gnb.length; i ++){
    gnb[i].addEventListener("click",function(e){
        e.preventDefault();

        let scrollMove = cont[i].offsetTop;
        console.log(scrollMove);
        window.scrollTo({
            top:scrollMove,
            behavior:"smooth"
        });
    });

}