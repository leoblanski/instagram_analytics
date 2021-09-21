
$(document).ready(function(){

  $("#process_list").on("click", function(){
    
    array_accounts = $("#array_accounts").val();


    array_accounts.forEach(function(i){
      console.log(i);
    })


  });

});