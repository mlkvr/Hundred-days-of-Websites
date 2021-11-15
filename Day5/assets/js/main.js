let colors = document.getElementsByTagName("svg");
let hexcolors = ["#009999","#336699","#3366cc","#003399","#000099","#0000cc","#006600","#00cc00","#00ff00","#66ff99","#cc99ff","#cc33ff","#99cc00","#ffff66","#ff9966","#ff6666","#cc3399","#990099","#996633","#cc9900","#cc6600","#ff0000","#990033","#800000"];
for (let i = 0; i < colors.length; i++) {
  colors[i].setAttribute("fill", hexcolors[i]);
}
let color = '';

$(document).ready(function(){
  $("svg").hover(function(){
    color = $( this ).css( "fill" );
    console.log(color);
    $("body").css("background-color",color);
    }, function(){
    $("body").css("background-color", "white");
  });
});
