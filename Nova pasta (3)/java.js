// Material Select Initialization
$(document).ready(function() {
    $('.mdb-select').materialSelect();
    });











    $('.mdb-select').materialSelect();


            $("#avaria4").click(function(){
              if($("#placa_traseira, #placa_dianteira, #pneu, #lataria").is(":enabled"))
              {
                $("#placa_traseira, #placa_dianteira, #lataria, #pneu").prop("disabled",true);


              }
              else{
                $("#placa_traseira, #placa_dianteira, #lataria, #pneu").prop("disabled",false);

              }

          }
      )