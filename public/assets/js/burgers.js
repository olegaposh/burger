$(document).ready(function () {
$("#bob").hide()

$(function () {
  // devour/update button
    $(".change-devour").on("click", function (event) {
      event.preventDefault()
      var id = $(this).data("id");
      $("#bob").show()
      setTimeout(function() { $("#bob").hide(); }, 3000);
      var newDevourState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function () {
          console.log("Devoured burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  // new burger created
    $("#spongebobform").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      var newBurger = {
        burger_name: $("#input").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

  });
})