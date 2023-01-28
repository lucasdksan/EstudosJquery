$(document).ready(function(){
    $(".btn").on("click", function(){
        $(".title").css("color", "red")
            .text("Lucas Gostoso");
    });
    // Seletor descendente:

    $("nav span").css("color", "red");

    // Seletor filhos do elemento:

    $("li > ul").css("color", "pink");

    // Seletor irmão do elemento:

    $("#item1_1 + li").css("background-color", "yellow");

    // Seletor de todos os irmãos do elemento:

    $("#item1_1 ~ li").css("background-color", "yellow");

    $("tbody tr:not(tbody tr:last)").css("background-color", "#012345").css("color", "white");

    $("td:contains(Bb)").css("background-color", "red").css("color", "white");

    $("td:parent()").css("background-color", "yellow").css("color", "black");
});