$(document).ready(function(){


	$("#cid").click(function(){     
		$("#ci2").hide();
		$("#ci1").show();
		$("#cn2").hide();
		$("#cn1").show();
		$("#da2").hide();
		$("#da1").show();
		$("#fn2").hide();
		$("#fn1").show();
		$("#vt2").hide();
		$("#vt1").show();
	});
	
	$("#cname").click(function(){     
		$("#ci2").hide();
		$("#ci1").show();
		$("#cn2").hide();
		$("#cn1").show();
		$("#da2").hide();
		$("#da1").show();
		$("#fn2").hide();
		$("#fn1").show();
		$("#vt2").hide();
		$("#vt1").show();
	});
	
	$("#cdate").click(function(){     
		$("#ci2").hide();
		$("#ci1").show();
		$("#cn2").hide();
		$("#cn1").show();
		$("#da2").hide();
		$("#da1").show();
		$("#fn2").hide();
		$("#fn1").show();
		$("#vt2").hide();
		$("#vt1").show();
	});
	
	$("#cemail").click(function(){     
		$("#ci2").hide();
		$("#ci1").show();
		$("#cn2").hide();
		$("#cn1").show();
		$("#da2").hide();
		$("#da1").show();
		$("#fn2").hide();
		$("#fn1").show();
		$("#vt2").hide();
		$("#vt1").show();
	});
	
	$("#cpwd").click(function(){     
		$("#ci2").hide();
		$("#ci1").show();
		$("#cn2").hide();
		$("#cn1").show();
		$("#da2").hide();
		$("#da1").show();
		$("#fn2").hide();
		$("#fn1").show();
		$("#vt2").hide();
		$("#vt1").show();
	});
	
	
	
		
    $("#savecreate").click(function(){     
		if(document.getElementById("txtfname").value=="")
		{
			$("#ci1").hide();
			$("#ci2").show();
			document.getElementById("txtfname").focus();
			return false;
		}
		else if(document.getElementById("txtlname").value=="")
		{
			$("#cn1").hide();
			$("#cn2").show();
			document.getElementById("txtlname").focus();
			return false;
		}
			else if(document.getElementById("date").value=="")
		{
			$("#da1").hide();
			$("#da2").show();
			document.getElementById("date").focus();
			return false;
		} 
		else if(document.getElementById("txtcemail").value=="")
		{
			$("#fn1").hide();
			$("#fn2").show();
			document.getElementById("txtcemail").focus();
			return false;
		} 
		else if(document.getElementById("txtpwd").value=="")
		{
			$("#vt1").hide();
			$("#vt2").show();
			document.getElementById("txtpwd").focus();
			return false;
		} 
	
		
    });
	

	
});


function cid() 
{
$("#ci1").show();
$("#ci2").hide();
}

function cname() 
{
$("#cn1").show();
$("#cn2").hide();
}

function cdate() 
{
$("#da1").show();
$("#da2").hide();
}
function cemail() 
{
$("#fn1").show();
$("#fn2").hide();
}

function cpwd() 
{
$("#vt1").show();
$("#vt2").hide();
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