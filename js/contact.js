  //cont10 정규표현식 이용해서 폼유형 검사  

  let input =document.querySelectorAll(".Wrap input");
  const conBtn = document.querySelector(".contactbtn");

  let datalist = [
        {
            regexCheck : /^[\ㄱ-힣]{2,4}$/,
            okmsg : "이름을 제대로 입력하였습니다.",
            nomsg : "이름 형식에 맞게 입력하세요",
            yesOrno :false
        },
        {
            regexCheck : /^[\w]+\@+[a-z]+\.[a-z]{2,3}$/,
            okmsg : "이메일을 제대로 입력하였습니다.",
            nomsg : "이메일 형식에 맞게 입력하세요",
            yesOrno :false
        },
        {
            regexCheck : /^(010)\-[0-9]{4}\-\d{4}$/,
            okmsg : "휴대폰 번호을 제대로 입력하였습니다.",
            nomsg : "휴대폰 번호형식에 맞게 입력하세요",
            yesOrno :false
        },
        {
            regexCheck : /^[\w\#\$\!\*\{\ㄱ-힣}]{5,20}$/,
            okmsg : "부제목을 제대로 입력하였습니다.",
            nomsg : "부제목 형식에 맞게 입력하세요",
            yesOrno :false
        }
    ];

    let lastChk = false;

    input.forEach(function(el,index){
        el.addEventListener("keyup",function(){
            inputChk (el,datalist[index]);
        });
    });
    
    function inputChk (tag,data){
        let values = tag.value;
        let chkComp = data.regexCheck.test(values);

        if(chkComp){
            tag.parentElement.className = "Wrap ok";
            tag.nextElementSibling.innerText = data.okmsg;
            data.yesOrno =true;
        }
        else{
            tag.parentElement.className = "Wrap no";
            tag.nextElementSibling.innerText = data.nomsg;
            data.yesOrno =false;
        }
    }
    
conBtn.addEventListener("click",function(e){
    e.preventDefault();

    lastChk =datalist.every(el => el.yesOrno ==true);
    if(lastChk){
        alert("다음화면")
    }
    else{
        alert("형식에 맞게 다시 입력해주세요")
    }
});