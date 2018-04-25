
$(".post").hover(function(){
    $(this).css("box-shadow", "1.5em 2em 40px 0 rgba(0, 0, 0, 0.4)");
    $(this).css("border", "#20A8D8 3px solid");
        }, function(){
    $(this).attr('style','');
});

$(".categories-ul").hover(function(){
    $(this).css("box-shadow", "1.5em 2em 40px 0 rgba(0, 0, 0, 0.4)");
    $(this).css("border", "#20A8D8 .1px solid");
        }, function(){
    $(this).attr('style','');
});



$( ".post" ).click(function() {
   var id = $(this).attr('id');
   var s1 = "../html/"+id+".html";
   window.location.href = s1;
});

