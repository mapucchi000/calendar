function Play(){
  var main = document.getElementById("Main");
  var sound = [
    document.getElementById("0"),
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
    document.getElementById("10"),
    document.getElementById("11"),
    document.getElementById("12"),
    document.getElementById("13")
  ];
  var text = [
    "今日は3月8日",
    "卒業まであと3日です",
    "3年3組での思い出といえば",
    "ボケにボケを重ねたり",
    "バカみたいな話で盛り上がったりした",
    "そんないつもの日々です。",
    "",
    "クラスメートへのメッセージ",
    "3年3組で過ごすことができて",
    "1年間、とても楽しかったです。",
    "卒業したら、なかなか会えなくなってしまうけど",
    "一生会えないわけではありません",
    "また、どこかで会うと信じて、",
    "それぞれの道を歩んでいきましょう。"
  ];
  var element = [
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p")
  ]
  for(let i=0;i<sound.length;i++){
    sound[i].addEventListener("ended",()=>{
      sound[i+1].play();
      element[i+1].textContent = text[i+1];
      main.appendChild(element[i+1]);
      
    },false);
  }
  sound[0].play();
  element[0].textContent = text[0];
  main.appendChild(element[0]);
}