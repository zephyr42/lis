var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'classes.html');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request.responseXML.getElementsByClassName('coursetitle'));
		
		var items = request.responseXML.getElementsByClassName('coursetitle');
		var output = '<ul>';
		for (var i = 0; i < items.length; i++) {
			output += '<li>' + '</li>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
request.send();