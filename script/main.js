;(function(){
	var button = document.getElementById('buttons_wrap'),
			frame = document.getElementById('window');

	button.addEventListener('click', function(event) {
		var url = event.target.getAttribute('data-url'),
			flag = false,
			target = event.target;
		
		if(target.getAttribute('id') !== 'buttons_wrap') {
			if(target.classList.contains('active')) {
				flag = true;
			}
			for (var i = 0; i < button.children.length; i++) {
				button.children[i].classList.remove('active');
			};
			if(flag) {
				target.classList.remove('active');
			} else {
				target.classList.add('active');
			};
		}
		frame.setAttribute('src', 'http://www.tvmd.info/' + url);
	});
})();