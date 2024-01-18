let details = document.querySelectorAll('.accordion details')

details.forEach(function (d, index) {
  d.onclick = () => {
    details.forEach(function(c, i) {
      index === i ?'':c.removeAttribute('open')
    });
  };
});

$(document).ready(function(){
    $("#plus-1").click(function(){
        $("#plus-1").hide();
        $("#minus-1").show();
    });
    $("#minus-1").click(function(){
        $("#minus-1").hide();
        $("#plus-1").show();
    });

    $("#plus-2").click(function(){
        $("#plus-2").hide();
        $("#minus-2").show();
    });
    $("#minus-2").click(function(){
        $("#minus-2").hide();
        $("#plus-2").show();
    });

    $("#plus-3").click(function(){
        $("#plus-3").hide();
        $("#minus-3").show();
    });
    $("#minus-3").click(function(){
        $("#minus-3").hide();
        $("#plus-3").show();
    });

    $("#plus-4").click(function(){
        $("#plus-4").hide();
        $("#minus-4").show();
    });
    $("#minus-4").click(function(){
        $("#minus-4").hide();
        $("#plus-4").show();
    });

    $("#plus-5").click(function(){
        $("#plus-5").hide();
        $("#minus-5").show();
    });
    $("#minus-5").click(function(){
        $("#minus-5").hide();
        $("#plus-5").show();
    });

    $("#plus-6").click(function(){
        $("#plus-6").hide();
        $("#minus-6").show();
    });
    $("#minus-6").click(function(){
        $("#minus-6").hide();
        $("#plus-6").show();
    });
});