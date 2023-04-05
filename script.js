//your code here
var btn = document.getElementById('swap');
function swapTheme(){
	var application = document.getElementById('app');
	application.classList.add('night');
	btn.classList.add('button_night');
}
btn.addEventListener('click',swapTheme);
