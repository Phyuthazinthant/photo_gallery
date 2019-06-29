var x;
$(document).ready(function(){
$.get("op.php",function(data){$("#iearch").html(data);});
});

$("#iearch").on("change",function (){
setInterval(function(){
var some=$("#iearch option:selected").text();
$.ajax({
	method:"POST",
	url:"thidsearch.php",
	data:{sear:some}
}).done(function(data){
	$("#result").html(data);
});},100);
});
$(document).ready(function(){
$.get("op1.php",function(data){$("#isearch").html(data);});
});

$("#isearch").on("change",function(){
function go(){
var some=$("#isearch option:selected").text();
$.ajax({
	method:"POST",
	url:"edit1.php",
	data:{gid:some}
}).done(function(data){
	$(".resultdiv").html(data);
});
}go();
});


var con;
	function editin(x) {
	con=confirm("ပြင်ဆင်ခြင်းကိုအတည်ပြုပါမည်");
	if(con==true){
		var y=$("#"+x+"").text();
		$.ajax({
				method:"POST",
			url:"edit2.php",
			data:{id:x,iname:y,name:"in"}
		}).done(function(data){
				$(".datareturnresult").html(data);
go();
		});}
		else{

		}
	}
		function editig(x) {
			con=confirm("ပြင်ဆင်ခြင်းကိုအတည်ပြုပါမည်");
			if(con==true){
			var b=$("#ig"+x+"").text();
			$.ajax({
					method:"POST",
				url:"edit2.php",
				data:{id:x,gid:b,name:"ig"}
			}).done(function(data){
					$(".datareturnresult").html(data);
			});
		}
		}
			function editinip(x) {
				con=confirm("ပြင်ဆင်ခြင်းကိုအတည်ပြုပါမည် ");
				if(con==true){
				var d=$("#inip"+x+"").text();
				$.ajax({
						method:"POST",
					url:"edit2.php",
					data:{id:x,inip:d,name:"inip"}
				}).done(function(data){
					$(".datareturnresult").html(data);

				});
			}
		}
			function editsp(x) {
				con=confirm("ပြင်ဆင်ခြင်းကိုအတည်ပြုပါမည် ");
				if(con==true){
							var e=$("#sp"+x+"").text();
				$.ajax({
						method:"POST",
					url:"edit2.php",
					data:{id:x,sp:e,name:"sp"}
				}).done(function(data){
						$(".datareturnresult").html(data);
				});
			}
		}
$(".datareturnresult").click(function(){
	$(".datareturnresult").hide();
});
var g;
function editdel(g,x) {
	$.ajax({
	method:"POST",
	url:"delete.php",
	data:{id:x,sv:g}
	}).done(function(data){
	$(".resultdiv").html(data);
});
}


var a,b,c,d;
function additem(a,b,c,d){
	$.ajax({
		method:"POST",
		url:"additem.php",
		data:{iname:a,igroup:b,iniprice:c,sprice:d}
}).done(function (data) {
alert(data);
});

}


function admin() {
	$.get("admin.php",function(data){$("#result").replaceWith(data);});

}

function add() {
var a =	$("#iname").text();
var b =	$("#igroup").text();
var c =parseInt(	$("#iniprice").text());
var d =parseInt(	$("#saleprice").text());
if(a.length>=1&&b.length>=1&&c>=1&&d>=1){
additem(a,b,c,d);
}else {
	alert("please fill all field ");
}
}
$.get("thsearch.php",function(data){$("#result").html(data);});
$("#search").on("input",function(){
	$search=$("#search").val();
	if($search.length>0){
		$.post("thsearch.php",{"search":$search},function(data){
			$("#result").html(data);
		})
	}
});
	$("#edit").click(function(){
				showdialog();
				$("#search").hide();});
				$("#overlay").click(function(){
				$("#search").show();});
				function showdialog(){
				document.getElementById("overlay").style.display="block";
				document.getElementById("dialog").style.display="block";
				}
				function hidedialog(){
				document.getElementById("overlay").style.display="none";
				document.getElementById("dialog").style.display="none";
				$("#search").show();
			}
				function additemhide() {
					$("#additem").toggle();
				}
				function showadditem() {
					$("#additem").toggle();
				}
				