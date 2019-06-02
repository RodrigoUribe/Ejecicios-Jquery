                    // DOM

//ejercicio 1

$(":input < #search").addClass(".n1");


//ejercicio 2

$("#mylist .current").removeClass(".current").next("li").addClass(".n2");

//ejercicio 3

$("#slideshow li:fist").addClass(".current");
$("#slideshow li:fist + li + li").addClass(".disabled");


                    //Manipular

//ejercicio #1

var items = [],
  $myList = $("#myList");

for (var i = 0; i < 5; i++) {
  items.push("<li>elemento " + i + "</li>");
}

$myList.append(items.join(""));


//ejercicio #2

$("li:odd").remove();

//ejercicio N3

$("div.module:last").append("<h2>.....</h2>");

//select N4

$("select").append("<option values='wednesday'>Wednesday<option/>");

//select N5

$("div.module:last").append("<div class='module'></div>").after($("img").clone());