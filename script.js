const menuItems = {
     mainCourses: [
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="1">\n<img src="https://www.aarquiteta.com.br/blog/wp-content/uploads/2022/03/Strogonoff-Vegetariano-de-Palmito-1200x800.png" />\n<h4 class="bolder">Strogonoff Vegetariano</h4>\n<h5>Acompanha arroz e batata palha.</h5>\n<h4>R$ 24,90</h4>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="2">\n<img src="https://espetinhodesucesso.com.br/wp-content/uploads/2022/06/o-que-acompanha-omelete-simples.jpg" />\n<h4 class="bolder">Omelete 4 Queijos</h4>\n<h5>Acompanha salada de alface e tomate.</h5>\n<h4>R$ 22,90</h4>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="3">\n<img src="https://saudefortaleza.com.br/wp-content/uploads/2017/08/shutterstock_509083930.jpg" />\n<h4 class="bolder">Pizza Marguerita</h4>\n<h5>Nossa deliciosa pizza brotinho</h5>\n<h4>R$ 23,90</h4>\n</div>',
     ],
     beverages: [
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="1">\n<img src="https://img.elo7.com.br/product/zoom/262F374/adesivo-parede-decoracao-suco-de-laranja-fruta-lanchonete-adesivo-decorativo.jpg" />\n<h4 class="bolder">Suco de Laranja</h4>\n<h5>Da fruta, docinha. Copo de 300ml.</h5>\n<h4>R$ 8,90</h4>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="2">\n<img src="https://www.villapiva.com.br/image/cache/catalog/produtos/fotos-ambientadas/cha-preto-com-limao-300-ml-1000x1000.jpeg" />\n<h4 class="bolder">Suco de Uva</h4>\n<h5>300ml de um delicioso suco integral</h5>\n<h4>R$ 9,90</h4>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="3">\n<img src="https://shoppingjardinsonline.com.br/shoppingjardinsonline/2020/06/coca-cola.jpeg" />\n<h4 class="bolder">Coca-Cola</h4>\n<h5>Lata 350ml</h5>\n<h4>R$ 5,90</h4>\n</div>',
     ],
     desserts: [
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="1">\n<img src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-sorvete-de-flocos.jpg" />\n<h4 class="bolder">Sorvete de Flocos</h4>\n<h5>3 bolas do melhor sabor já inventado.</h5>\n<h4>R$ 9,90</h4>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="2">\n<img src="https://img.itdg.com.br/tdg/images/recipes/000/001/599/361922/361922_original.jpg?mode=crop&width=710&height=400" />\n<h4 class="bolder">Mousse de Maracujá</h4>\n<h5>Amor em forma de pote?</h5>\n<h4>R$ 8,90</h4>\n</div>',
          '<div class="item" onclick="orderEditing(this.parentNode.id , this.id)" id="3">\n<img src="https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400" />\n<h4 class="bolder">Pudim</h4>\n<h5>Apenas um belo e lustroso pudim.</h5>\n<h4>R$ 7,90</h4>\n</div>',
     ],
};

menuItems.mainCourses.forEach((item) => {
     document.getElementById("mainCourses").innerHTML += item;
});
menuItems.beverages.forEach((item) => {
     document.getElementById("beverages").innerHTML += item;
});
menuItems.desserts.forEach((item) => {
     document.getElementById("desserts").innerHTML += item;
});

trackMainCourses = document.getElementById("mainCourses");
const mainCoursesArray = Array.from(trackMainCourses.children);
const trackBeverages = document.getElementById("beverages");
const beveragesArray = Array.from(trackBeverages.children);
const trackDesserts = document.getElementById("desserts");
const dessertsArray = Array.from(trackDesserts.children);
const order = []; // OBJETO QUE GUARDARÁ TODAS AS INFOS DE PEDIDOS
order.cellPhone = "+5522992175627";

const menuArrays = {
     // COLOCA OS ARRAYS DE TODAS AS CATEGORIAS EM UM OBJETO
     mainCourses: mainCoursesArray,
     beverages: beveragesArray,
     desserts: dessertsArray,
};
const trackMenu = {
     // COLOCA TODOS OS ELEMENTOS NO MESMO OBJETO
     mainCourses: trackMainCourses,
     beverages: trackBeverages,
     desserts: trackDesserts,
};
// COM INFOS DO CLICK FAZ A MOVIMENTAÇÃO DA CLASSE "current" QUE É RESPONSÁVEL
// PELA BORDA VERDE NOS ITENS SELECIONADOS
const orderEditing = (targetParentId, targetId) => {
     const targetArray = Array.from(menuArrays[targetParentId]);
     const currentSelection = trackMenu[targetParentId].querySelector(".current");
     if (currentSelection) {
          const currentId = targetArray.indexOf(currentSelection);
          if (currentId == targetId - 1) {
               targetArray[targetId - 1].classList.remove("current");
          } else {
               targetArray[currentId].classList.remove("current");
               targetArray[targetId - 1].classList.add("current");
          }
     } else {
          targetArray[targetId - 1].classList.add("current");
     }
     buttonChange();
     // ATRIBUIÇÃO DAS CARACTERÍSTICAS DO ITEM CLICADO AO OBJETO "order"
     order[targetParentId] = targetArray[targetId - 1].children[1].innerText;
     order[targetParentId + "Price"] = Number(
          targetArray[targetId - 1].children[3].innerText.replace(",", ".").replace("R$ ", "")
     );
};
// RESPONSÁVEL POR LIGAR E DESLIGAR O BOTÃO PARA FINALIZAR PEDIDO
const buttonChange = () => {
     if (document.getElementsByClassName("current").length == 3) {
          document.querySelector(".notReady").style.display = "none";
          document.querySelector(".ready").style.display = "block";
     } else {
          document.querySelector(".notReady").style.display = "block";
          document.querySelector(".ready").style.display = "none";
     }
};
// FINALIZA O PEDINDO LIGANDO A TELA FINAL COM TODAS AS INFOS PARA CONFIRMAÇÃO DO USUÁRIO
// ALÉM DE MONTAR O TEXTO QUE SERÁ ENVIADO POR WHATSAPP
const closure = () => {
     const name = prompt("Insira seu nome");
     const adress = prompt("Agora, seu endereço");
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
     closureTxt[14].innerText = "Endereço: " + adress;

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
