$(document).ready(function() {
  var arrayMain = [];
  $("#form").submit(function(event) {
    // debugger;
    var nameInput = $("#name").val();
    var favorite1Input = $("#favorite1").val();
    var favorite2Input = $("#favorite2").val();
    var favorite3Input = $("#favorite3").val();
    var favorite4Input = $("#favorite4").val();

    // var arrayUser = [nameInput,favorite1Input, favorite2Input, favorite3Input, favorite4Input]
    var arrayUser = ["<br><li>Name: "+nameInput+"</li>", "<li>Favorite Thing 1: "+favorite1Input+"</li>", "<li>Favorite Thing 2: "+favorite2Input+"</li>", "<li>Favorite Thing 3: "+favorite3Input+"</li>", "<li>Favorite Thing 4: "+favorite4Input+"</li>"]

    arrayMain.push(...arrayUser);

    $("input#name").val("");
    $("input#favorite1").val("");
    $("input#favorite2").val("");
    $("input#favorite3").val("");
    $("input#favorite4").val("");


    event.preventDefault();

  });

  $("#btnDelete").click(function() {
    arrayMain.splice(-5);

  });

  $("#btnDisplay").click(function() {
    $("#showList").empty();
    $("#showList").append(arrayMain);
  });


});
