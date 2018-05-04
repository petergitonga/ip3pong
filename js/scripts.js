//user interface logic

  $(document).ready(function() {
    $("#button").click(function() {
      var pong= parseInt($("#mynumbers").val());
      ping(pong);
      yourNumbers.forEach(function(pong){
        $("#result").append("<li>" + pong + "</li>");
      });
    });
  });

  //business logic
var yourNumbers=[];
function ping(pong) {
  for (var index=1; index<=pong; index++)
if (index%15===0) {
	yourNumbers.push("ping-pong");
}
  else if (index %5===0){
   yourNumbers.push("pong");
}
  else if (index %3===0){
	yourNumbers.push("ping");
}else {
  yourNumbers.push(index);
}

}
