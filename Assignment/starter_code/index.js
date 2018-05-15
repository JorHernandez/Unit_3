
$(function(){
    $(".readmore").click(function(e){
        e.preventDefault();
        $("#show-this-on-click").slideDown();
        $(".readless").slideDown();
        $(".readmore").hide();
    })
})

$(function(){
    $(".learnmore").click(function(e){
        e.preventDefault();
        $("#learnmoretext").slideDown();
        $(".learnmore").hide();
    })
})

$(function(){
    $(".readless").click(function(e){
        e.preventDefault();
        $("#show-this-on-click").slideUp();
        $(".readmore").show();
        $(".readless").hide();
    })
})

