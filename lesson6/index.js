//1
const list = document.getElementById("list");
const firstEl = list.children[0].textContent;
const lastEl = list.children[4].textContent;
const secondEl = list.children[1].textContent;
const fourthEl = list.children[3].textContent;
const thirdEl = list.children[2].textContent;
alert(
  firstEl + ", " + lastEl + ", " + secondEl + ", " + fourthEl + ", " + thirdEl
);

//2

document.querySelector("h1").style.backgroundColor = "#90ee8f";

document.querySelectorAll("p").forEach(function (p, index) {
  if (index === 0) p.style.fontWeight = "bold";
  if (index === 1) p.style.color = "red";
  if (index === 2) p.style.textDecoration = "underline";
  if (index === 3) p.style.fontStyle = "italic";
});

document.querySelector("#myList").textContent;
myList.style.display = "flex";
myList.style.listStyle = "none";

document.querySelector("span").style.display = "none";

// 3

const body = document.createElement("body");
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
const div = document.createElement("div");
div.setAttribute("id", "myDiv");
const p = document.createElement("p");
p.innerHTML = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);
document.getElementsByTagName("html")[0].appendChild(body);

// 4

const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const fio = document.querySelector('input[name="fio"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const birthday = document.querySelector('input[name="birthday"]').value;
  const email = document.querySelector('input[name="email"]').value;

  const resultStr = `ПІБ: ${fio}<br>
                      Номер телефону: ${phone}<br>
                      Дата народження: ${birthday}<br>
                      Електронна пошта: ${email}`;

  const outBlock = document.querySelector(".out");
  outBlock.innerHTML = resultStr;
});

//5.
const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  const animValue = circle.getAttribute("data-anim");
  circle.classList.add(animValue);
});

circles.forEach((circle) => {
  console.log(circle.classList.contains(circle.getAttribute("data-anim")));
});

