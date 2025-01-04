function load2D_bg(){
    var background = document.getElementById("background");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var yValue = calcValue(y, window.innerHeight);
            var xValue = calcValue(x, window.innerWidth);
            
                    
            background.style.backgroundPositionX = xValue * 1 -200+ "px ";
            background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
        })
    },false);

}

function load2D_bg2(){
    var background = document.getElementById("background2");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var yValue = calcValue(y, window.innerHeight);
            var xValue = calcValue(x, window.innerWidth);
            
            background.style.backgroundPositionX = xValue *1 -200+ "px ";
            background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
        })
    },false);

}

function load2D_bg2_2(){
    var background = document.getElementById("background2");
    document.onmousemove=function(){
        console.log(window.outerHeight);
        background.style.opacity=1-(getMousePos()/window.outerHeight*2.5);
    }
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
});


var i=0;
function motto(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    var image = document.querySelector('.logo1 .logo2');
    var name=document.querySelector('.proflieCard .name');
    image.src='img/mypicture.jpg';
    name.textContent='Ruoyao Cai';
    
    if(i==0){
        i=1;
        slogan.style.height="120px";
        slogan2.innerHTML="The greatest test of courage on earth is to bear defeat without losing heart.";}
    else if(i==1){
        i=2;
        slogan.style.height="80px";
        slogan2.innerHTML="纸上得来终觉浅&nbsp;,&nbsp;绝知此事要躬行。<footer>——<cite>陆游</cite></footer>";

        }
    else{
        i=0;
        slogan.style.height="150px";
        slogan2.innerHTML="That which we call a rose by any other name would smell as sweet.<footer>——<cite>William Shakespeare</cite></footer>";
}}
var i=0;
function sports(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    var image = document.querySelector('.logo1 .logo2');
    var name=document.querySelector('.proflieCard .name');
    image.src='img/mypicture.jpg';
    name.textContent='Ruoyao Cai';
    
    if(i==0){
        i=1;
        slogan.style.height="70px";
        slogan2.innerHTML="Badminton";}
    else if(i==1){
        i=2;
        slogan.style.height="150px";
        slogan2.innerHTML="<strong>Table tennis</strong><br>(I have played table tennis from I was 6 years old to 12 years old)";

        }
    else if(i==2){
        i=3;
        slogan.style.height="70px";
        slogan2.innerHTML="Jogging";
    }
    else {
        i=0;
        slogan.style.height="70px";
        slogan2.innerHTML="Swimming";
}

}
var i=0;
function hobbies(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    var image = document.querySelector('.logo1 .logo2');
    var name=document.querySelector('.proflieCard .name');
    image.src='img/mypicture.jpg';
    name.textContent='Ruoyao Cai';
    
    if(i==0){
        i=1;
        slogan.style.height="200px";
        slogan2.innerHTML="I enjoy reading various books, such as historical biographies, romance novels, psychology.<br>Recently, I read a book about <em>Catherine the Great</em> in Russia.";}
    else if(i==1){
        i=2;
        slogan.style.height="100px";
        slogan2.innerHTML="I enjoy playing various games, such as immersive interactive games and so on.";

        }
    else{
        i=0;
        slogan.style.height="150px";
        slogan2.innerHTML="I enjoy following international news through Bilibili or Xiaohongshu.";
}}
var i=0;
function family(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    var image = document.querySelector('.logo1 .logo2');
    var name=document.querySelector('.proflieCard .name');
    
    
    if(i==0){
        i=1;
        slogan.style.height="100px";
        image.src='img/mypicture.jpg';
        name.textContent='Ruoyao Cai';
        slogan2.innerHTML="I have three younger brothers in my home.";}
    else if(i==1){
        i=2;
        image.src = 'img/newpicture.jpg';
        name.textContent="Shelley";
        slogan.style.height="100px";
        slogan2.innerHTML="fff";

        }
    else if(i==2){
        i=3;
        image.src='img/cat.jpg';
        name.textContent="Wanzi （丸子）";
        slogan.style.height="100px";
        slogan2.innerHTML="Jogging";
    }
    else {
        i=0;
        image.src='img/dog.jpg';
        name.textContent="Happy";
        slogan.style.height="70px";
        slogan2.innerHTML="Swimming";
    }
    
    }
