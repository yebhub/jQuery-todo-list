//Check off specific todos by clicking 

//you can pass an object into the .css() function 

$("ul").on("click", "li", function(){
    //toggling a class defined in css file 
    $(this).toggleClass("completed");
});

//click on X to delete todo 
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //prevents event bubbling 
    event.stopPropagation();
    
});

$("input[type= 'text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("")
        //create a new li and add to ul 
        $("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }

});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})