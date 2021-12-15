var result = confirm("자대여신 '이지은'을 아시나요?");
if(result){
    alert("자대여신 '이지은'을 모른다면 간첩이죠~ㅎㅎ");
}else{
    alert("거짓말하지마세요. 자대여신 '이지은'을 모를 수 없습니다.");
    location.href="index2.html";
}

function getPopup(){
    window.open('popup.html','_blank','left=200, right=200, width=300, height=250');
}