const trackMainCourses = document.getElementById("mainCourse");
const mainCourses = Array.from(trackMainCourses.children);
const trackBeverages = document.getElementById("beverage");
const beverages = Array.from(trackBeverages.children);
const trackDesserts = document.getElementById("dessert");
const desserts = Array.from(trackDesserts.children);

const order = [];
order.cellPhone = "+5522992175627";

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
     order.mainCourse = mainCourses[targetIndex].children[1].innerText;
     order.mainCoursePrice = Number(
          mainCourses[targetIndex].children[3].innerText.replace(",", ".").replace("R$ ", "")
     );
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
     order.beverage = beverages[targetIndex].children[1].innerText;
     order.beveragePrice = Number(
          beverages[targetIndex].children[3].innerText.replace(",", ".").replace("R$ ", "")
     );
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
     order.dessert = desserts[targetIndex].children[1].innerText;
     order.dessertPrice = Number(
          desserts[targetIndex].children[3].innerText.replace(",", ".").replace("R$ ", "")
     );
     buttonChange();
});
const buttonChange = () => {
     if (document.getElementsByClassName("current").length == 3) {
          document.querySelector(".notReady").style.display = "none";
          document.querySelector(".ready").style.display = "block";
     }
};
const closure = () => {
     const name = prompt("Insira seu nome");
     const adress = prompt("Agora, seu endereço");
     order.total = order.dessertPrice + order.beveragePrice + order.mainCoursePrice;
     const closureTxt = document.querySelector(".closure-txt").children;
     closureTxt[3].children[0].innerText = order.mainCourse;
     closureTxt[3].children[1].innerText = String(order.mainCoursePrice).replace(".", ",") + "0";
     closureTxt[5].children[0].innerText = order.beverage;
     closureTxt[5].children[1].innerText = String(order.beveragePrice).replace(".", ",") + "0";
     closureTxt[7].children[0].innerText = order.dessert;
     closureTxt[7].children[1].innerText = String(order.dessertPrice).replace(".", ",") + "0";
     closureTxt[9].children[1].innerText = "R$ " + String(order.total).replace(".", ",") + "0";
     closureTxt[12].innerText = "Nome: " + name;
     closureTxt[14].innerText = "Endereço: " + adress;

     document.querySelector(".closure").style.display = "grid";

     order.whatsappMessage = encodeURIComponent(
          "Olá, gostaria de fazer o pedido:\n-  Prato:  " +
               order.mainCourse +
               "\n-  Bebida:  " +
               order.beverage +
               "\n-  Sobremesa:  " +
               order.dessert +
               "\nTotal:  R$  " +
               order.total +
               "0\n\nNome:  " +
               name +
               "\nEndereço:  " +
               adress
     );
};
const send = () => {
     window.open(
          "https://api.whatsapp.com/send?phone=" +
               order.cellPhone +
               "&text=" +
               order.whatsappMessage
     );
};
const cancel = () => {
     document.querySelector(".closure").style.display = "none";
};
