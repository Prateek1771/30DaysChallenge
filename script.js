$(document).ready(function(){
  $("#loading-center").click(function(){
    $("#loading").fadeOut(1000, function(){
      return false;
    });
  });
}); 

function splash(param) {
  var time = param;
  setTimeout(function() {
    $('#loading').fadeOut(1000, function(){
      return false;
    });
  }, time);
}
