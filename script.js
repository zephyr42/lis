var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'coriolan.xml');
request.onreadystatechange = function() {
	if ((request.readyState === 4) &&
		(request.status === 200)) {
			console.log(request.responseXML);
			
console.log(request.responseXML.getElementbyTagName('SPEAKER')[1].firstChild.nodeValue);
		
	var items = request.responseXML.getElementsbyTagName('SPEAKER')[1];
	var output ='<ul>';
	for (var i = 0; i < items.length; i++) {
		output += '<li>' + items[i].firstChild.nodeValue + '</li>';
	}
	output += '</ul>';
	
		document.getElementById('update').innerHTML = output;

	}
}
request.send();