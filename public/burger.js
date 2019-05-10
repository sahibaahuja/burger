$(function() {
    $("#submit-button").on("click", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        
      };
console.log(newBurger)
      $.ajax({
        url:"/api/burgers", 
        type: "POST",
        data: newBurger
      }).then(
        function(res) {
          console.log("Added New Burger");
          // location.reload();
        }
      );
    });
  
})