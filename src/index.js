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

    $("a[name^=lucas]").css("color", "red");

    let aElement = $("a[name=lucas]");

    console.log(aElement);

    $(":submit").on("click", function(){
        $(":text").css("border", "3px solid red");
    });

    $(".content-btn").on("click", function(){
        $(".name-son").attr("data-game", "valorant melhor jogo de FPS");
        $(".name-son").removeAttr("data-dad");
        $(".name-son").addClass("dev");
        var valueData = $(".name-son").attr("data-game");

        alert(`VALOR: ${valueData}`);
    });

    $(".content-val > button").on("click", function(){
        const valueP = $(".content-val > p").html(); // pode pegar o valor, alterar o conteudo de um elemento e alterar o conteudo como se fosse um outro atributo.
        const pValue = $(".content-val > p").text()
        const clone = $(".content-val > p").clone();

        $(".content-val > div").replaceWith(clone);

        alert(pValue);
    });

    $(".createImage-area > button").on("click", function(){
        const skills = ["Q - CAÇADOR DE CABEÇAS", "E - RENDEZVOUS", "C - MARCA REGISTRADA", "X - TOUR DE FORCE"];
        const image = $("<img />", {
            src: "./chamber.png",
            title: "O melhor agente do Valorant",
            click: function(){
                alert("EU AMO ESSA ARMA ");
            },
        });

        const li = [];

        skills.forEach((e)=>{
            li.push($("<li/>").append(e));
        });

        const ul = $("<ul/>").append(li);

        $(".createImage-area > div.area").append(image).append(ul);
    });

    $(".agents > button").not(".clear").on("click", function(){
        console.log("1")

        $(".agents > ul").append($("<li/>").append("viper"));
        $(".agents > ul").prepend($("<li/>").append("killjoy"));

        $(".agents > ul").before("<h1>Minha lista de agentes favoritos</h1>");
        $(".agents > ul").after("<span>GOSTOU?</span>");
        $(".agents > ul").wrap("<fieldset></fieldset>");
    });

    $(".agents  button.clear").on("click", function(){
        $(".agents > ul").empty();
        $(".agents fieldset > ul").empty();
    });

    // $(".containerEventJQUERY > button").on("click", function (){ 
    //     $(".containerEventJQUERY > .containerResult").text("Foi apenas um click normal").css("color", "red");
    // });

    $(".containerEventJQUERY > button").dblclick(function(){
        $(".containerEventJQUERY > .containerResult").text("Foram dois clicks").css("color", "red");
    });

    $(".containerEventJQUERY > button").mousemove(function(){
        $(this).css("background", "blue");
    });

    $(".containerEventJQUERY > button").mouseout(function(){
        $(this).css("background", "brown");
    });
});