// setInterval(rainFall, 0.1);

// function rainFall() {
//   const waterDrop = document.createElement('i');
  
// 	waterDrop.classList.add('fas');
// 	waterDrop.classList.add('fa-tint');
// 	waterDrop.style.left = (Math.random() * window.innerWidth)- 35 + 'px';
// 	waterDrop.style.animationDuration = Math.random() * 1 + 's';
// 	waterDrop.style.opacity = Math.random() + 0.4;
// 	waterDrop.style.fontSize = Math.random() * 7 +'px';
	
// 	document.body.prepend(waterDrop);
	
// 	setTimeout(() => {
// 		waterDrop.remove();
// 	}, 400)
// };


const ulToToggleShow = document.getElementById('ul-ToggleShow');
const ulAppToToggleShow = document.getElementById('ul-ToggleShow__app');
const h1 = document.getElementById('h1Gang');

h1.addEventListener('click', () => {
    ulToToggleShow.classList.toggle('display-none');
    ulAppToToggleShow.classList.toggle('display-none');
});



  