//define functions here
getIt = $('p').on("dblclick keypress", function(){
  alert("Hey!")
});

frameIt = $('load')
pressIt = $("form").on('keydown', function(key) {
  if(key.which == 83){
      alert('G was pressed');
  }
});
submitIt = $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now');}
// call functions here

});
