// function toggleReadMore() {

//     $('#show-this-on-click').slideToggle();
// }
// $('.readmore').click(toggleReadMore);

// function toggleLearnMore() {
//     $("#learnmoretext").slideToggle();
// }

// $(".learnmore").click(toggleLearnMore)



// $(".readmore").click(toggleReadMore);



// $(function (){
//     event.preventDefault();
// });

//readmored -> show-this-on-click

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

