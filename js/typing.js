  

      //cont1 text 자동 타이핑 기능 
      const typing =document.querySelector(".cont1 .text");
      const context = ["Publisher","Web Designer","frontEnd","backEnd"];
      
      //context 배열 변수 순번값 변경 
      let stringNum = 0;
      //증가 변수 
      let charIndex = 0;
      //감소 변수 
      let maxIndex ;

      //자동 실행 함수 (글자 타이핑)
      let autoTyping = setInterval(function(){
          textToggle();
      },200);

      function textToggle (){
        
          if(charIndex < context[stringNum].length){
              typing.innerText += context[stringNum].charAt(charIndex);
              charIndex++;
              if(charIndex >= context[stringNum].length){
                  maxIndex = context[stringNum].length;
                  stopAndStart ()
              }
          }
          else if(maxIndex >=0){
              typing.innerText = context[stringNum].substring(0,maxIndex);
              maxIndex--;

              if(maxIndex <0){
                  charIndex = 0;
                  stopAndStart ()
                  if(stringNum ==context.length-1){
                    stringNum =0;
                  }
                  else{
                    stringNum++;
                  }
              }
          }
      };

      function stopAndStart(){
            clearInterval(autoTyping);
            setTimeout(function(){
                autoTyping = setInterval(function(){
                    textToggle();
                },200);
            },2000);
        }