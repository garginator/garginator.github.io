function light(){
	var apikey = "VBANF87J758CB1MA";
	var status = document.getElementById('light_status').value;
	window.open("https://api.thingspeak.com/update.json?api_key=" + apikey + "&field3=" + status,'_blank');
	//$.getJson("https://thingspeak.com/channels/249150.json")
	window.location.reload();
	return false;
	}
