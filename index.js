alert("hello , this is calculator");
var list=[];
$(".btn").click(function () {
   $(this).removeClass("bg-orange-600");
   $(this).addClass("pressed");
   var button = $(this);
   setTimeout(function(){
        button.removeClass("pressed");
        button.addClass("bg-orange-600");
   },200);

   var curr_val = $(this).text();
   var value = $("#name").val();
   $("#name").val(value+curr_val);

});

$(".btn_equal").click(function() {

    var button = $(this);

    button.addClass("press_equal");

    setTimeout(function(){
        button.removeClass("press_equal");
    },200);

    var ans = eval($("#name").val());
    $("#name").val(ans);

});

$(".btn_clear").click(function(){
    $("#name").val("");
});

$("#name").keydown(function(event){
    if(event.key === '='){
        var ans = $("#name").val();
        $("#name").val(eval(ans));
    }
});
