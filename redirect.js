var res;
var f3;
function light(v){
	var apikey = "VBANF87J758CB1MA";
	var status = v;
	var loc = "https://api.thingspeak.com/update.json?api_key=" + apikey + "&field3=" + status;
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
	       		$('body').addClass("night");
	       }
	       else if(f3 == 0)
	       {
				$('body').removeClass("night");	
	       }

	       //document.getElementById("demo").innerHTML = res;
	    }
	};
	xhttp.open("GET", loc, true);
	xhttp.send();
	return false;
}

function light1(v){
	var apikey = "VBANF87J758CB1MA";
	var status = v;
	//var loc = "https://api.thingspeak.com/update.json?api_key=" + apikey + "&field3=" + status;
	var loc = "https://thingspeak.com/channels/256692/fields/3/last.json";
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
	       		$('body').addClass("night");
	       		console.log("yes");
	       }
	       else if(f3 == 0)
	       {
	       		$('body').removeClass('night');
	       }
	       //document.getElementById("demo").innerHTML = res;
	    }
	};
	xhttp.open("GET", loc, true);
	xhttp.send();
	return false;
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