$(document).ready(function(){


	$("#cgroup").click(function(){     
		$("#cgroup2").hide();
		$("#cgroup1").show();
		
	});
	
	
	
	
	
		
    $("#savegroup").click(function(){     
		if(document.getElementById("txtcgroup").value=="")
		{
			$("#cgroup1").hide();
			$("#cgroup2").show();
			document.getElementById("txtcgroup").focus();
			return false;
		}
		
			
					
	
		
    });
	

	
});


function cgroup() 
{
$("#cgroup1").show();
$("#cgroup2").hide();
}

