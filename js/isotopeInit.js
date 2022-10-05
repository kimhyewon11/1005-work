//cont7 isotope 이용해서 메뉴별 정렬기능 

        //btns (메뉴들)클릭시 정렬 
        const btns = document.querySelectorAll(".btns li");

        btns.forEach(function(el,index){
            el.addEventListener("click",function(e){
                e.preventDefault();
                
                let data= el.getAttribute("data-port");
                console.log(data);

                iso.arrange({
                    filter: data,
                    transitionDuration: '0.5s'
                  })


                btns.forEach(function(e,index){
                    e.classList.remove("on");
                });
                el.classList.add("on");
            });
        });


        //정렬해줄 태그들 감싸는 부모
        let elem = document.querySelector('.boxes');
        let iso = new Isotope(elem, {
            // options
            itemSelector: '.all',
            layoutMode: 'masonry'
        });

        