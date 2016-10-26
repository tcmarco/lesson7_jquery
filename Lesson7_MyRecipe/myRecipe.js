/*
Program Name: Recipe Display Application
Author: Marco Prazeres
Date: 10/25/2016
Filename: myRecipe.js
*/

//displays the next element after the current target

function display(event) {
    
    $(event.currentTarget).css("background-color", "#FAFF7E");
    $(event.currentTarget).next().toggle("slow");
    $(event.currentTarget).next().children().css("background-color", "#51FF0D");
   
    

}//end of display

//attach event listener to h3 elements to invoke display function when clicked

 $("h3").click(display);

//displays and animates the next element after the current target

function display2(event) {

$(event.currentTarget).animate( {height: '500'}, "slow");

$(event.currentTarget).animate( {width: '500'}, "slow");

}//end of display2

//attach event listener to h3 elements to invoke display function when clicked

$("img").click(display2);


//change the background color h3 element when mouse hovers over it
function hover2(event){

$("img").hover(
    
    function(){
       
       $(this).css("border", "5px solid #FF0000");
    }, 
    
    function(){
    
       $(this).css("border", "none");
});
};
//hover() will trigger display2 method each time mouse hovers over header

$("img").hover(hover2);

function display3(event) {
    
    $("img").toggle("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked

 $("h2").click(display3);