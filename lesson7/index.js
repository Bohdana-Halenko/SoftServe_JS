//Task1
// 1. Створення нового вікна розміром 300х300 пікселів
const newWindow = window.open('', '', 'width=300,height=300');

// 2. Зміна розміру вікна на 500х500 пікселів із затримкою 2 секунди
setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);

// 3. Переміщення вікна в точку з координатами (200, 200) із затримкою 4 секунди
setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 4000);

// 4. Закриття вікна із затримкою 6 секунд
setTimeout(() => {
  newWindow.close();
}, 6000);


//Task2
function changeCSS() {
  const p = document.getElementById("text");
  p.style.color = "orange";
  p.style.fontSize = "20px";
  p.style.fontFamily = "Comic Sans MS";
}
document.getElementById("change-btn").addEventListener("click", changeCSS);


//Task3
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');

button1.addEventListener('click', function() {
	document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
	document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
	document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function() {
	document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseenter', function() {
	document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseleave', function () {
    document.body.style.backgroundColor = 'white';
});


//Task4
const select = document.getElementById('mySelect');
const button = document.getElementById('remove-btn');

button.addEventListener('click', () => {
  const selectedIndex = select.selectedIndex;
  if (selectedIndex >= 0) {
    select.options[selectedIndex].remove();
  }
});


//Task5
