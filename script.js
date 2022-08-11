const trackMainCourses = document.getElementById("mainCourse");
const mainCourses = Array.from(trackMainCourses.children);
const trackBeverages = document.getElementById("beverage");
const beverages = Array.from(trackBeverages.children);
const trackDesserts = document.getElementById("dessert");
const desserts = Array.from(trackDesserts.children);

const borderColorChanger = (current, target) => {
     current.classList.remove("current");
     target.classList.add("current");
};
trackMainCourses.addEventListener("click", (e) => {
     const currentMainCourse = trackMainCourses.querySelector(".current");
     if (currentMainCourse) {
          currentMainCourse.classList.remove("current");
     }
     let targetIndex = mainCourses.indexOf(e.target);
     if (targetIndex != -1) {
          mainCourses[targetIndex].classList.add("current");
     } else if (mainCourses.indexOf(e.target.parentElement) != -1) {
          targetIndex = mainCourses.indexOf(e.target.parentElement);
          mainCourses[targetIndex].classList.add("current");
     }
     buttonChange();
});
trackBeverages.addEventListener("click", (e) => {
     const targetBeverages = trackBeverages.querySelector(".current");
     if (targetBeverages) {
          targetBeverages.classList.remove("current");
     }
     let targetIndex = beverages.indexOf(e.target);
     if (targetIndex != -1) {
          beverages[targetIndex].classList.add("current");
     } else if (beverages.indexOf(e.target.parentElement) != -1) {
          targetIndex = beverages.indexOf(e.target.parentElement);
          beverages[targetIndex].classList.add("current");
     }
     buttonChange();
});
trackDesserts.addEventListener("click", (e) => {
     const currentDesserts = trackDesserts.querySelector(".current");
     if (currentDesserts) {
          currentDesserts.classList.remove("current");
     }
     let targetIndex = desserts.indexOf(e.target);
     if (targetIndex != -1) {
          desserts[targetIndex].classList.add("current");
     } else if (desserts.indexOf(e.target.parentElement) != -1) {
          targetIndex = desserts.indexOf(e.target.parentElement);
          desserts[targetIndex].classList.add("current");
     }
     buttonChange();
});
const buttonChange = () => {
     if (document.getElementsByClassName("current").length == 3) {
          document.querySelector(".notReady").style.display = "none";
          document.querySelector(".ready").style.display = "block";
     }
};
const closure = () => {
     // const name = prompt("Insira seu nome:");
     // const adress = prompt("Agora, seu endereço:");
     document.querySelector(".closure").style.display = "grid";
};
const send = () => {
     alert("BOAAAAAAAAAAAA!");
     cancel();
};
const cancel = () => {
     document.querySelector(".closure").style.display = "none";
};

// Olá, gostaria de fazer o pedido:
// - Prato: Frango Yin Yang
// - Bebida: Coquinha Gelada
// - Sobremesa: Pudim
// Total: R$ 27.70

// Nome: Fulano
// Endereço: Rua...
