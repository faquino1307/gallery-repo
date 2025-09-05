import "bootstrap/dist/css/bootstrap.min.css";
import { paintings } from "./data/paintings";
import { fer } from "./data/paintings";
import { Modal } from "bootstrap";

var modal;
document.addEventListener("DOMContentLoaded", () => {
    renderGallery();
    initModal();
});

function initModal(){
    modal = new Modal('#gallery-modal', {
        keyboard: false,
        backdrop: true
    })
    
    /*
    
    let elementModal = document.getElementById("gallery-modal");
    elementModal.addEventListener('hidden.bs.modal', event => {
  // do something...
        modal._dialog.querySelector(".modal-body").innerHTML = "";
    });*/
}

function renderGallery() {
    let gallery = document.getElementById('gallery');
    paintings.forEach((painting) => {

        let divColumn = document.createElement("div");
        divColumn.className = "col-md-3";
        let div = document.createElement('div');
        div.classList.add('card', 'shadow-sm', 'h-100', 'main-gallery');
        let div2 = document.createElement('div');
        div2.classList.add('card-body');
        let title = document.createElement('h5');
        title.innerText = painting.title;

        let imgel = document.createElement("img");
        imgel.setAttribute("src", painting.img);
        imgel.className = "card-img-top";

        div2.appendChild(imgel);
        div.appendChild(div2);
        div2.appendChild(title);
        divColumn.appendChild(div);
        gallery.appendChild(divColumn);

        //se puede hacer la subscripcion aqui?
        div.addEventListener("click", function (event) {
            onSelectPainting(painting);
        });

    });
}

function onSelectPainting(painting) {
    modal.show();
    let modalBody = modal._dialog.querySelector(".modal-body");
    modalBody.innerHTML = "";
    const paintingCard = document.createElement("div");
    paintingCard.className = "card mb-3";
    paintingCard.innerHTML = `
        <img src="${painting.img}" class="card-img-top" alt="${painting.title}">
        <div class="card-body">
          <h5 class="card-title">${painting.title}</h5>
          <p class="card-text mb-1"><strong>Autor:</strong> ${painting.author}</p>
          <p class="card-text mb-1"><strong>Description:</strong> ${painting.description}</p>
          <p class="card-text"><strong>Año:</strong> ${painting.year}</p>
        </div>
    `;
    modalBody.appendChild(paintingCard);
}