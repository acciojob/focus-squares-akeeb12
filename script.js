//your JS code here. If required.
let squares = document.querySelectorAll('.square')

squares.forEach(function (square) {

	square.addEventListener('mouseover', function() {
		squares.forEach(function(otherSquare) {
			otherSquare.style.backgroundColor = '#6F4E37';
		});
		this.style.backgroundColor = '#E6E6FA';
	});
	square.addEventListener('mouseout',function() {
		squares.forEach(function (otherSquare) {
			otherSquare.style.backgroundColor = '#E6E6FA';
			
		});
	});
});
