//cont2 객체 세팅 
let listData = [
    {
        icon :"wallpaper",
        title:"Unique Layout",
        text:"A robust, multipurpose template built with modularity at <br>the core."
    },
    {
        icon :"list",
        title:"Online Live Support",
        text:"You can build your site in-browser with modular <br> interface blocks."
    },
    {
        icon :"tablet_mac",
        title:"Responsive Design",
        text:"There are many variations of passages of lorem lpsum <br> available.."
    },
];


// cont2 text 반복문으로 태그 동적 생성 
let listWrap = document.querySelector(".listWrap");
let listBox = "";

listData.forEach(function(el){
    listBox += `<div class="list">
                    <span class="material-symbols-outlined">${el.icon}</span>
                    <div class="text">
                        <h6>${el.title}</h6>
                        <p>${el.text}</p>
                    </div>
                </div>`
});

listWrap.innerHTML = listBox;