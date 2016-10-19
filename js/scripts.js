$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#user-name").val();
    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $(".user-name").text(nameInput);
    $(".food").text(food);
    $(".music").text(music);
    $(".born").text(dob);
    $(".color").text(favoriteColor);

    $("#submitted").show();

    event.preventDefault();

  });
});
