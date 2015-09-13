var button = document.getElementById('buttons_wrap'),
		frame = document.getElementById('window');

button.addEventListener('click', function(event) {
	var url = event.target.getAttribute('data-url');
	console.log(url);
	frame.setAttribute('src', url);
}, false);