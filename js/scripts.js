$(document).ready(function() {
    $("#button").click(function() {
      var ping= parseInt($("#mynumbers").val());
      pong(ping);
      yourNumbers.forEach(function(ping){
        $("#result").append("<li>" + ping + "</li>");
      });
    });
  });
