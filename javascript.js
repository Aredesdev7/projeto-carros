let listaCarros = [
    {
        "nome": "carro1",
        "img": "img/carro1.jpeg",
        "descricao": "o carro1 é um carro esportivo"
    },
    {
        "nome": "carro2",
        "img": "img/carro2.jpeg",
        "descricao": "o carro2 é um carro esportivo"
    },
    {
        "nome": "carro3",
        "img": "img/carro3.jpeg",
        "descricao": "o carro3 é um carro esportivo"
    },
    {
        "nome": "carro4",
        "img": "img/carro4.jpeg",
        "descricao": "o carro4 é um carro esportivo"
    },
    {
        "nome": "carro5",
        "img": "img/carro5.jpeg",
        "descricao": "o carro5 é um carro esportivo"
    },
    {
        "nome": "carro6",
        "img": "img/carro6.jpeg",
        "descricao": "o carro6 é um carro esportivo"
    },
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("card");
    cardCarro.innerHTML  += `
    <div class="col-md-4">
    <div class="card m-3" style="width: 18rem;">
        <img src="${carro.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${carro.nome}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" class="btn btn-secondary" onClick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
        </div>
    </div>
</div>

    `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
    
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;

    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i></i>`;
    }
}

