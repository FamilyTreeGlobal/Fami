$(document).ready(function(){


	$("#cidop").click(function(){     
		$("#ciop2").hide();
		$("#ciop1").show();
		$("#cnp2").hide();
		$("#cnp1").show();
		$("#conpwd2").hide();
		$("#conpwd1").show();
	});
	
	$("#cname").click(function(){     
		$("#ci2").hide();
		$("#ci1").show();
		$("#cn2").hide();
		$("#cn1").show();
		$("#co2").hide();
		$("#co1").show();
	});
	
	$("#conpwd").click(function(){     
		$("#ci2").hide();
		$("#ci1").show();
		$("#cn2").hide();
		$("#cn1").show();
		$("#co2").hide();
		$("#co1").show();
	});
	
	
		
    $("#saverp").click(function(){     
		if(document.getElementById("txtopfname").value=="")
		{
			$("#ciop1").hide();
			$("#ciop2").show();
			document.getElementById("txtopfname").focus();
			return false;
		}
		else if(document.getElementById("txtnplname").value=="")
		{
			$("#cnp1").hide();
			$("#cnp2").show();
			document.getElementById("txtnplname").focus();
			return false;
		}
		else if(document.getElementById("txtconnpwd").value=="")
		{
			$("#conpwd1").hide();
			$("#conpwd2").show();
			document.getElementById("txtconnpwd").focus();
			return false;
		} 
		
    });
	

	
});


function cidop() 
{
$("#ciop1").show();
$("#ciop2").hide();
}

function cnp() 
{
$("#cnp1").show();
$("#cnp2").hide();
}

function connpwd() 
{
$("#conpwd1").show();
$("#conpwd2").hide();
}
