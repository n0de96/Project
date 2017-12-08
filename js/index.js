$(document).ready(function(){
    $("div").mouseenter(function(){
    $("#box1").fadeIn("slow");
    $("#box2").fadeIn("slow");
    $("#box3").fadeIn("slow");
    $("#box4").fadeIn("slow");
    $("#low").fadeIn("slow");
    $("#min").fadeIn("slow");
    $("#mid").fadeIn("slow");
    $("#hi").fadeIn("slow");
})
});

$(document).ready(function(){
    $("div").click(function(){
        $(this).css("z-index", "100");
         $("div").dblclick(function(){
        $(this).css("z-index", "0");
})
})
});