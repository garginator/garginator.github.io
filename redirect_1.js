var res;
var f3 = 2;
function light(loc){
	//var apikey = "VBANF87J758CB1MA";
	//var status = document.getElementById('light_status').value;
	//var loc = "https://api.thingspeak.com/update.json?api_key=" + apikey + "&field3=" + status;
	//window.open("https://api.thingspeak.com/update.json?api_key=" + apikey + "&field3=" + status,'_blank');
	//$.getJson("https://thingspeak.com/channels/249150.json")
	//window.location.reload();
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       // Typical action to be performed when the document is ready:
	       res = xhttp.responseText;
	       var a = JSON.parse(res);
	       f3 = a.field3;
	       if(f3 == 1){
	       		document.getElementById("indicator").style.background = "green";
	       }
	       else if(f3 == 0)
	       {
	       		document.getElementById("indicator").style.background = "red";
	       }
	       else
	       {

	      		document.getElementById("indicator").style.background = "purple";

	       }
	       //document.getElementById("demo").innerHTML = res;
	    }
	};
	xhttp.open("GET", loc, true);
	xhttp.send();
	return false;
}

function callingfn(){
	var status = document.getElementById('light_status').value;
	var apikey = "VBANF87J758CB1MA";
	var loc = "https://api.thingspeak.com/update.json?api_key=" + apikey + "&field3=" + status;
	light(loc);
}
function threshold(){
	var thresh = document.getElementById('threshold_status').value;
	var apikey = "VBANF87J758CB1MA";
	var loc = "https://api.thingspeak.com/update.json?api_key=" + apikey + "&field4="+thresh;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", loc, true);
	xhttp.send();
	return false;
}
function first(){
	var loc = "https://thingspeak.com/channels/256692/fields/3/last.json";
	light(loc);
}