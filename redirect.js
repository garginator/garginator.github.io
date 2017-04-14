function light(){
	var apikey = "EWRCRYWKHZG5R19S";
	var status = document.getElementById('light_status').value;
	window.open("https://api.thingspeak.com/update.json?api_key=" + apikey + "&field1=" + status,'_blank');
	//$.getJson("https://thingspeak.com/channels/249150.json")
	window.location.reload();
	return false;
	}
