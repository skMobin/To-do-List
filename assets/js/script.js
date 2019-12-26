//check off the todos
$("ul").on("click", "li",function(){  
    $(this).toggleClass("completed");
 })
//click on delete icon to delete particular to-do
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut("500",function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//adding new to-do
$("input[type='text']").on("keypress",function(event){
    if(event.which == 13){
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fa fa-trash"></i></span> '+ toDoText + "</li>");
    }
});
//add input control
$("#icon").on("click",function(){   
    $("input[type='text']").fadeToggle("400");
    if (document.getElementsByClassName("pencil-icon")[0].classList[2] == "fa-pencil"){
        console.log("working");
        $(".pencil-icon").removeClass("fa-pencil");
        $(".pencil-icon").addClass("fa-minus");
    }
    else{
        $(".pencil-icon").addClass("fa-pencil");
        $(".pencil-icon").removeClass("fa-minus");
    }
});  