// New item template  (new categories can also be created)
// '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="---IMAGE-SOURCE---" />\n<h4 class="bolder">---NAME---</h4>\n<h5>---DESCRIPTION---</h5>\n<div><h4>---PRICE---</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
const menuItems = {
     mainCourses: [
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/Strogonoff-Vegetariano-de-Palmito-1200x800.png" />\n<h4 class="bolder">Strogonoff Vegetariano</h4>\n<h5>Acompanha arroz e batata palha.</h5>\n<div><h4>R$ 24,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/omelete-4-queijos.jpg" />\n<h4 class="bolder">Omelete 4 Queijos</h4>\n<h5>Acompanha salada de alface e tomate.</h5>\n<div><h4>R$ 22,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/pizza-marguerita.jpg" />\n<h4 class="bolder">Pizza Margherita</h4>\n<h5>Nossa deliciosa pizza brotinho</h5>\n<div><h4>R$ 23,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
     ],
     beverages: [
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/adesivo-parede-decoracao-suco-de-laranja-fruta-lanchonete-adesivo-decorativo.jpg" />\n<h4 class="bolder">Suco de Laranja</h4>\n<h5>Da fruta, docinha. Copo de 300ml.</h5>\n<div><h4>R$ 8,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/suco-uva-integral.jpeg" />\n<h4 class="bolder">Suco de Uva</h4>\n<h5>300ml de um delicioso suco integral</h5>\n<div><h4>R$ 9,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/coca-cola.jpeg" />\n<h4 class="bolder">Coca-Cola</h4>\n<h5>Lata 350ml</h5>\n<div><h4>R$ 5,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
     ],
     desserts: [
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/sorvete-de-flocos.png" />\n<h4 class="bolder">Sorvete de Flocos</h4>\n<h5>3 bolas do melhor sabor já inventado.</h5>\n<div><h4>R$ 9,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/mousse-maracuja.png" />\n<h4 class="bolder">Mousse de Maracujá</h4>\n<h5>Amor em forma de pote?</h5>\n<div><h4>R$ 8,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this)">\n<img src="./images/pudim.jpg" />\n<h4 class="bolder">Pudim</h4>\n<h5>Apenas um belo e lustroso pudim.</h5>\n<div><h4>R$ 7,90</h4><ion-icon name="checkmark-circle"></ion-icon></div>\n</div>',
     ],
};
// COLOCA OS ELEMENTOS DE TODAS AS CATEGORIAS NO MESMO OBJETO
const trackMenu = {
     mainCourses: document.getElementById("mainCourses"),
     beverages: document.getElementById("beverages"),
     desserts: document.getElementById("desserts"),
};
const categoryCounter = Object.keys(trackMenu).length;
//  INSERE OS ITENS DO CARDÁPIO EM SUAS RESPECTIVAS CATEGORIAS
Object.values(menuItems).map((category, i) => {
     category.forEach((item) => {
          Object.values(trackMenu)[i].innerHTML += item;
     });
});
// OBJETO QUE GUARDARÁ TODAS AS INFOS DE PEDIDOS
const order = [];
order.cellPhone = "+5555555555555";
// COM INFOS DO CLICK FAZ A MOVIMENTAÇÃO DA CLASSE "current",
// QUE É RESPONSÁVEL PELA BORDA VERDE NOS ITENS SELECIONADOS
const orderEditing = (targetParentId, target) => {
     const currentSelection = trackMenu[targetParentId].querySelector(".current");
     target.classList.toggle("current");
     if (currentSelection && currentSelection !== target) {
          currentSelection.classList.remove("current");
     }
     buttonChange();
     // ATRIBUIÇÃO DAS CARACTERÍSTICAS DO ITEM CLICADO AO OBJETO "order"
     order[targetParentId] = target.children[1].innerText;
     order[targetParentId + "Price"] = Number(
          target.children[3].innerText.replace(",", ".").replace("R$ ", "")
     );
};
// RESPONSÁVEL POR LIGAR E DESLIGAR O BOTÃO PARA FINALIZAR PEDIDO
const buttonChange = () => {
     if (document.getElementsByClassName("current").length === categoryCounter) {
          document.querySelector(".notReady").style.display = "none";
          document.querySelector(".ready").style.display = "block";
     } else {
          document.querySelector(".notReady").style.display = "block";
          document.querySelector(".ready").style.display = "none";
     }
};
// FINALIZA O PEDINDO LIGANDO A TELA FINAL COM TODAS AS INFOS PARA CONFIRMAÇÃO DO USUÁRIO,
// ALÉM DE MONTAR O TEXTO QUE SERÁ ENVIADO POR WHATSAPP.
const closure = () => {
     const name = prompt("Insira seu nome");
     const address = prompt("Agora, seu endereço");
     order.total = order.dessertsPrice + order.beveragesPrice + order.mainCoursesPrice;
     const closureTxt = document.querySelector(".closure-txt").children;
     closureTxt[3].children[0].innerText = order.mainCourses;
     closureTxt[3].children[1].innerText = String(order.mainCoursesPrice).replace(".", ",") + "0";
     closureTxt[5].children[0].innerText = order.beverages;
     closureTxt[5].children[1].innerText = String(order.beveragesPrice).replace(".", ",") + "0";
     closureTxt[7].children[0].innerText = order.desserts;
     closureTxt[7].children[1].innerText = String(order.dessertsPrice).replace(".", ",") + "0";
     closureTxt[9].children[1].innerText = "R$ " + String(order.total).replace(".", ",") + "0";
     closureTxt[12].innerText = "Nome: " + name;
     closureTxt[14].innerText = "Endereço: " + address;

     document.querySelector(".closure").style.display = "grid";

     order.whatsappMessage = encodeURIComponent(
          "Olá, gostaria de fazer o pedido:\n-  Prato:  " +
               order.mainCourses +
               "\n-  Bebida:  " +
               order.beverages +
               "\n-  Sobremesa:  " +
               order.desserts +
               "\nTotal:  R$  " +
               order.total +
               "0\n\nNome:  " +
               name +
               "\nEndereço:  " +
               address
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
