const trackMainCourses = document.getElementById("mainCourses");
const mainCoursesArray = Array.from(trackMainCourses.children);
const trackBeverages = document.getElementById("beverages");
const beveragesArray = Array.from(trackBeverages.children);
const trackDesserts = document.getElementById("desserts");
const dessertsArray = Array.from(trackDesserts.children);

const order = [];
order.cellPhone = "+5522992175627";

const borderColorChanger = (current, target) => {
     current.classList.remove("current");
     target.classList.add("current");
};

const menu = {
     mainCourses(targetId) {
          const currentSelection = trackMainCourses.querySelector(".current");
          if (currentSelection) {
               const currentId = mainCoursesArray.indexOf(currentSelection);
               if (currentId == targetId - 1) {
                    mainCoursesArray[targetId - 1].classList.remove("current");
                    buttonChange();
               } else {
                    mainCoursesArray[currentId].classList.remove("current");
                    mainCoursesArray[targetId - 1].classList.add("current");
                    buttonChange();
               }
          } else {
               mainCoursesArray[targetId - 1].classList.add("current");
               buttonChange();
          }
     },
     beverages(targetId) {
          const currentSelection = trackBeverages.querySelector(".current");
          if (currentSelection) {
               const currentId = beveragesArray.indexOf(currentSelection);
               if (currentId == targetId - 1) {
                    beveragesArray[targetId - 1].classList.remove("current");
                    buttonChange();
               } else {
                    beveragesArray[currentId].classList.remove("current");
                    beveragesArray[targetId - 1].classList.add("current");
                    buttonChange();
               }
          } else {
               beveragesArray[targetId - 1].classList.add("current");
               buttonChange();
          }
     },
     desserts(targetId) {
          const currentSelection = trackDesserts.querySelector(".current");
          if (currentSelection) {
               const currentId = dessertsArray.indexOf(currentSelection);
               if (currentId == targetId - 1) {
                    dessertsArray[targetId - 1].classList.remove("current");
                    buttonChange();
               } else {
                    dessertsArray[currentId].classList.remove("current");
                    dessertsArray[targetId - 1].classList.add("current");
                    buttonChange();
               }
          } else {
               dessertsArray[targetId - 1].classList.add("current");
               buttonChange();
          }
     },
};

const itemSelector = (itemParentId, itemId) => {
     const menuEditing = menu[itemParentId];
     menuEditing(itemId);
};

// trackMainCourses.addEventListener("click", (e) => {
//      const currentMainCourse = trackMainCourses.querySelector(".current");
//      if (currentMainCourse) {
//           currentMainCourse.classList.remove("current");
//      }
//      let targetIndex = mainCoursesArray.indexOf(e.target);
//      if (targetIndex != -1) {
//           mainCoursesArray[targetIndex].classList.add("current");
//      } else if (mainCourses.indexOf(e.target.parentElement) != -1) {
//           targetIndex = mainCoursesArray.indexOf(e.target.parentElement);
//           mainCoursesArray[targetIndex].classList.add("current");
//      }
//      order.mainCourse = mainCoursesArray[targetIndex].children[1].innerText;
//      order.mainCoursePrice = Number(
//           mainCoursesArray[targetIndex].children[3].innerText.replace(",", ".").replace("R$ ", "")
//      );
//      buttonChange();
// });
// trackBeverages.addEventListener("click", (e) => {
//      const targetBeverages = trackBeverages.querySelector(".current");
//      if (targetBeverages) {
//           targetBeverages.classList.remove("current");
//      }
//      let targetIndex = beveragesArray.indexOf(e.target);
//      if (targetIndex != -1) {
//           beveragesArray[targetIndex].classList.add("current");
//      } else if (beverages.indexOf(e.target.parentElement) != -1) {
//           targetIndex = beveragesArray.indexOf(e.target.parentElement);
//           beveragesArray[targetIndex].classList.add("current");
//      }
//      order.beverage = beveragesArray[targetIndex].children[1].innerText;
//      order.beveragePrice = Number(
//           beveragesArray[targetIndex].children[3].innerText.replace(",", ".").replace("R$ ", "")
//      );
//      buttonChange();
// });
// trackDesserts.addEventListener("click", (e) => {
//      const currentDesserts = trackDesserts.querySelector(".current");
//      if (currentDesserts) {
//           currentDesserts.classList.remove("current");
//      }
//      let targetIndex = dessertsArray.indexOf(e.target);
//      if (targetIndex != -1) {
//           dessertsArray[targetIndex].classList.add("current");
//      } else if (desserts.indexOf(e.target.parentElement) != -1) {
//           targetIndex = dessertsArray.indexOf(e.target.parentElement);
//           dessertsArray[targetIndex].classList.add("current");
//      }
//      order.dessert = dessertsArray[targetIndex].children[1].innerText;
//      order.dessertPrice = Number(
//           dessertsArray[targetIndex].children[3].innerText.replace(",", ".").replace("R$ ", "")
//      );
//      buttonChange();
// });
const buttonChange = () => {
     if (document.getElementsByClassName("current").length == 3) {
          document.querySelector(".notReady").style.display = "none";
          document.querySelector(".ready").style.display = "block";
     } else {
          document.querySelector(".notReady").style.display = "block";
          document.querySelector(".ready").style.display = "none";
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
