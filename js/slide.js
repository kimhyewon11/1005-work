//cont8 사람 클릭시 슬라이드 기능 
const circle = document.querySelectorAll(".circle li");
const view = document.querySelector(".view");
let boxImg = document.querySelectorAll(".box .writer img");

circle.forEach(function(el,index){
    el.addEventListener("click",function(e){
        let imgSrc = e.currentTarget.querySelector(" img").getAttribute("src");
        e.preventDefault();
       
        view.style.marginLeft = -100 *index +"%";
        boxImg[index].setAttribute("src",imgSrc);  
        boxImg[index].style.borderRadius = "50%";
        //circle.classList.remove("chg");
      circle.forEach(function(item,index){
          item.classList.remove("chg");
      });
      circle[index].classList.add("chg");
    });
});
