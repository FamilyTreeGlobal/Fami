$(document).ready(function(){


	$("#old").click(function(){     
		$("#old2").hide();
		$("#old1").show();
		$("#onew2").hide();
		$("#onew1").show();
		$("#cnew2").hide();
		$("#cnew1").show();
	});
	
	$("#onew").click(function(){     
		$("#old2").hide();
		$("#old1").show();
		$("#onew2").hide();
		$("#onew1").show();
		$("#cnew2").hide();
		$("#cnew1").show();
	});
	
	$("#cnew").click(function(){     
		$("#old2").hide();
		$("#old1").show();
		$("#onew2").hide();
		$("#onew1").show();
		$("#cnew2").hide();
		$("#cnew1").show();
	});
	
	
	
		
    $("#savechangebt").click(function(){     
		if(document.getElementById("txtoldfname").value=="")
		{
			$("#old1").hide();
			$("#old2").show();
			document.getElementById("txtoldfname").focus();
			return false;
		}
		else if(document.getElementById("txtnewlname").value=="")
		{
			$("#onew1").hide();
			$("#onew2").show();
			document.getElementById("txtnewlname").focus();
			return false;
		}
	
		else if(document.getElementById("txtcnewpwd").value=="")
		{
			$("#cnew1").hide();
			$("#cnew2").show();
			document.getElementById("txtcnewpwd").focus();
			return false;
		} 
		
		
			
					
	
		
    });
	

	
});


function old() 
{
$("#old1").show();
$("#old2").hide();
}

function onew() 
{
$("#onew1").show();
$("#onew2").hide();
}

function cnew() 
{
$("#cnew1").show();
$("#cnew2").hide();
}
$(document).ready(function(){
		var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'mm/dd/yyyy',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})