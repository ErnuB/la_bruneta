
document.querySelectorAll('.clickable-text').forEach(function(text) {
	text.addEventListener('click', function() {
		var imageUrl = this.getAttribute('data-image-url');
		document.querySelector('#overlay-image').setAttribute('src', imageUrl);
		document.querySelector('#overlay').style.display = 'flex';
	});
});

document.querySelector('.overlay').addEventListener('click', function(e) {
	if (e.target.classList.contains('overlay') || e.target.classList.contains('close-button')) {
		document.querySelector('.overlay').style.display = 'none';
	}
});

function closeNavbar() {
    var navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeNavbar);
  }
