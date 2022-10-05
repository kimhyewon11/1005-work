


        //함수 정의  (countUp 되는 )
        function countUp(inc,sel,des,speed){
            moveCheck = false;
            let num = 0;
            let desChange = "";
        
            let autoCount = setInterval(function(){
                num += inc;
                document.querySelector(sel).innerHTML = num;

                if(num >= des){
                    clearInterval(autoCount);
                    desChange=des;
                    document.querySelector(sel).innerHTML = desChange;
                }
            },speed);
        }
            
        //cont3

        //객체 세팅 
        let countValue =[
            {
                plus:21,
                tag:".count1",
                Compelet:1391,
                loop:25
            },
            {
                plus:7,
                tag:".count2",
                Compelet:445,
                loop:25
            },
            {
                plus:3,
                tag:".count3",
                Compelet:133,
                loop:40
            },
            {
                plus:15,
                tag:".count4",
                Compelet:775,
                loop:30
            }
        ];
        //함수 사용 (객체 반복문 forEach 이용해서)
        // countValue.forEach(function(el){
        //     countUp(
        //         el.plus,
        //         el.tag,
        //         el.Compelet,
        //         el.loop
        //     );
        // });

        //스크롤 이벤트 구간 
        let contStart = document.querySelector(".cont3").offsetTop;
        let moveCheck = true;

        window.addEventListener("scroll",function(){
            let scTop = window.scrollY;

            if(scTop >= contStart){
                if(moveCheck == true){
                    countValue.forEach(function(el){
                        countUp(
                            el.plus,
                            el.tag,
                            el.Compelet,
                            el.loop
                        );
                    });
                }
            }

        });