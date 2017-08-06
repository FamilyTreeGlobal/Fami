$(document).ready(function(){


	$("#cfp").click(function(){     
		$("#cifp2").hide();
		$("#cifp1").show();
		
	});
	
	
	
		
    $("#savefp").click(function(){     
		if(document.getElementById("txtcfpname").value=="")
		{
			$("#cifp1").hide();
			$("#cifp2").show();
			document.getElementById("txtcfpname").focus();
			return false;
		}
		
		
    });
	

	
});


function cfp() 
{
$("#cifp1").show();
$("#cifp2").hide();
}
