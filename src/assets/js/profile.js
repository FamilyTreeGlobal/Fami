$(document).ready(function(){


	$("#pfname").click(function(){     
		$("#pfname2").hide();
		$("#pfname1").show();
		$("#pcname2").hide();
		$("#pcname1").show();
		$("#pcdate2").hide();
		$("#pcdate1").show();
		$("#pcpwd2").hide();
		$("#pcpwd1").show();
		
	});
	
	$("#pcname").click(function(){     
		$("#pfname2").hide();
		$("#pfname1").show();
		$("#pcname2").hide();
		$("#pcname1").show();
		$("#pcdate2").hide();
		$("#pcdate1").show();
		$("#pcpwd2").hide();
		$("#pcpwd1").show();
	});
	
	$("#pcdate").click(function(){     
		$("#pfname2").hide();
		$("#pfname1").show();
		$("#pcname2").hide();
		$("#pcname1").show();
		$("#pcdate2").hide();
		$("#pcdate1").show();
		$("#pcpwd2").hide();
		$("#pcpwd1").show();
	});
	
	
	
	$("#pcpwd").click(function(){     
		$("#pfname2").hide();
		$("#pfname1").show();
		$("#pcname2").hide();
		$("#pcname1").show();
		$("#pcdate2").hide();
		$("#pcdate1").show();
		$("#pcpwd2").hide();
		$("#pcpwd1").show();
	});
	
	
	
		
    $("#saveprofile").click(function(){     
		if(document.getElementById("txtpfname").value=="")
		{
			$("#pfname1").hide();
			$("#pfname2").show();
			document.getElementById("txtpfname").focus();
			return false;
		}
		else if(document.getElementById("txtplname").value=="")
		{
			$("#pcname1").hide();
			$("#pcname2").show();
			document.getElementById("txtplname").focus();
			return false;
		}
			else if(document.getElementById("pdate").value=="")
		{
			$("#pcdate1").hide();
			$("#pcdate2").show();
			document.getElementById("pdate").focus();
			return false;
		} 
	
		else if(document.getElementById("txtppwd").value=="")
		{
			$("#pcpwd1").hide();
			$("#pcpwd2").show();
			document.getElementById("txtppwd").focus();
			return false;
		} 
		
	/*	else if(document.getElementById("txtem").value=="")
		{
			$("#em2").show();
					document.getElementById("txtem").focus();
					return false;
		} */
		
			
					
	
		
    });
	

	
});


function pfname() 
{
$("#pfname1").show();
$("#pfname2").hide();
}

function pcname() 
{
$("#pcname1").show();
$("#pcname2").hide();
}

function pcdate() 
{
$("#pcdate1").show();
$("#pcdate2").hide();
}


function pcpwd() 
{
$("#pcpwd1").show();
$("#pcpwd2").hide();
}

/*function em() 
	{
	$("#em2").hide();
	}*/
	
	
	
	
	
	
	
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
	
	
	
	
	
	
	