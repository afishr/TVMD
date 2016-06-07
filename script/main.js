;(function(){
	var button = document.getElementById('buttons_wrap'),
			frame = document.getElementById('window');

	button.addEventListener('click', function(event) {
		var url = event.target.getAttribute('data-url');

		var htmlClass = event.target.className;		
		for (var i = 0; i < button.childNodes.length; i++) {
			button.childNodes[i].className = htmlClass;
		};

		event.target.className = htmlClass + ' ' + 'active';

		frame.setAttribute('src', 'http://www.tvmd.info/' + url);
	});
})();