const function1 = function () {
  console.log(btn);
  // const target = document.querySelector("#card2");
  const div1 = document.querySelector(".card");
  var child = document.body.appendChild(div1.cloneNode(true));
  child.classList.add('card2');
  console.log(child);
};
const btn = document.getElementById("duplicate");
btn.addEventListener("click", function1);


const btn2 = document.getElementById("bg-color");
btn2.addEventListener("click", function (e) {
  console.log("i clicked button 2");
  if (document.querySelector(".card").style.backgroundColor == "white") {
    document.querySelector(".card").style.backgroundColor = "red";
  } else {
    document.querySelector(".card").style.backgroundColor = "white";
  }
});


function myFunction2() {
  document.querySelector("h4").innerHTML = "Something else";
}

document.getElementById("delete()").addEventListener('click', function(e) {
  const card = document.querySelectorAll(".card");
  const lastCard = card[card.length - 1];
  lastCard.remove();
});
