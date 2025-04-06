const pratos = {
  "carne_vermelha": [
    { "nome": "Filé Simples", "descricao": "(arroz, farofa, salada)", "preco": 25.00 },
    { "nome": "Filé Especial", "descricao": "(arroz, farofa, salada, ovo e queijo)", "preco": 30.00 },
    { "nome": "Filé ao Molho Branco", "descricao": "(arroz, farofa e salada)", "preco": 28.00 },
    { "nome": "Filé à Milanesa", "descricao": "(arroz e salada)", "preco": 30.00 },
    { "nome": "Filé ao Molho Madeira", "descricao": "(arroz, farofa e salada)", "preco": 35.00 },
    { "nome": "Filé à Parmegiana", "descricao": "(arroz, farofa e salada)", "preco": 35.00 },
    { "nome": "Linguiça Frita", "descricao": "(arroz, farofa e salada)", "preco": 20.00 },
    { "nome": "Picanha na Chapa", "descricao": "(arroz, farofa e salada)", "preco": 40.00 },
    { "nome": "Estrogonoff", "descricao": "(arroz, farofa e salada)", "preco": 30.00 },
    { "nome": "Carne de Sol", "descricao": "(arroz, farofa, purê e macaxeira frita)", "preco": 35.00 }
  ],
  "aves": [
    { "nome": "Galinha Caipira", "descricao": "(arroz e salada)", "preco": 30.00 },
    { "nome": "Filé de Frango na Chapa", "descricao": "(arroz e salada)", "preco": 22.00 },
    { "nome": "Frango Apimentado", "preco": 25.00 },
    { "nome": "Galeto", "preco": 25.00 },
    { "nome": "Pato no Tucupi", "descricao": "(arroz e farofa)", "preco": 30.00 },
    { "nome": "Pato Guisado", "descricao": "(arroz e farofa)", "preco": 30.00 }
  ],
  "porcoes_extras": [
    { "nome": "Maniçoba", "preco": 18.00 },
    { "nome": "Arroz", "preco": 5.00 },
    { "nome": "Farofa", "preco": 5.00 },
    { "nome": "Vinagrete", "preco": 5.00 }
  ],
  "outras_refeicoes": [
    { "nome": "Caldo de Carne", "preco": 20.00 },
    { "nome": "Caldo de Galinha", "preco": 20.00 },
    { "nome": "Sopa", "preco": 20.00 },
    { "nome": "Maniçoba", "preco": 35.00 },
    { "nome": "Pirarucu Frito", "preco": 28.00 },
    { "nome": "Pirarucu Empanado", "preco": 30.00 },
    { "nome": "Vaca Atolada", "preco": 25.00 }
  ],
  "tira_gosto": [
    { "nome": "Frango a Passarinho", "preco": 25.00 },
    { "nome": "Carne de Sol", "preco": 25.00 },
    { "nome": "Isca de Filé", "preco": 25.00 },
    { "nome": "Isca de Peixe", "preco": 25.00 },
    { "nome": "Bolinho de Pirarucu", "preco": 25.00 },
    { "nome": "Macaxeira Frita", "preco": 15.00 },
    { "nome": "Batata Frita", "preco": 15.00 },
    { "nome": "Azeitona", "preco": 8.00 },
    { "nome": "Mistão", "preco": 25.00 },
    { "nome": "Queijo", "preco": 25.00 },
    { "nome": "Calabresa Acebolada", "preco": 25.00 }
  ],
  "bebidas": {
    "sucos": [
      { "nome": "Graviola", "preco": { "copo": 7.00, "jarra": 18.00 } },
      { "nome": "Maracujá", "preco": { "copo": 7.00, "jarra": 18.00 } },
      { "nome": "Goiaba", "preco": { "copo": 7.00, "jarra": 18.00 } },
      { "nome": "Tapereba", "preco": { "copo": 7.00, "jarra": 18.00 } },
      { "nome": "Acerola", "preco": { "copo": 7.00, "jarra": 18.00 } }
    ],
    "cervejas": "Preço não informado",
    "refrigerantes": "Preço não informado",
    "agua": "Preço não informado"
  },
  "sobremesas": [
    { "nome": "Pudim", "preco": 7.00 },
    { "nome": "Torta de Abacaxi", "preco": 7.00 }
  ]
}


function renderPratosDeCarnes() {

  pratos.carne_vermelha.forEach((p, i) => {
    document.querySelector('.cardapio').innerHTML += `
          <div class="Prato">
            <div class="l">
                <p class="NamePrat">${p.nome}</p>
                <p class="Descricao">Acompanhado por: ${p.descricao}</p>
                <div class="tags">
                    <p class="tag green">R$${p.preco}</p>
                    <p class="tag hotpink">Carne</p>
                </div>
            </div>
            <div class="r">
                <p>${i + 1}</p>
            </div>
        </div>
        `
  })
}

function renderPratosDeSobremesas() {

  pratos.sobremesas.forEach((p, i) => {
    document.querySelector('.cardapio').innerHTML += `
          <div class="Prato">
            <div class="l">
                <p class="NamePrat">${p.nome}</p>
                <div class="tags">
                    <p class="tag green">R$${p.preco}</p>
                    <p class="tag blue">Sobremesa</p>
                </div>
            </div>
            <div class="r">
                <p>${i + 1}</p>
            </div>
        </div>
        `
  })
}


function renderPratosDeAves() {
  pratos.aves.forEach((p, i) => {
    document.querySelector('.cardapio').innerHTML += `
          <div class="Prato">
            <div class="l">
                <p class="NamePrat">${p.nome}</p>
                <p class="Descricao">Acompanhado por: ${p.descricao}</p>
                <div class="tags">
                    <p class="tag green">R$${p.preco}</p>
                    <p class="tag red">Ave</p>
                </div>
            </div>
            <div class="r">
                <p>${i + 1}</p>
            </div>
        </div>
        `
  })
}

function renderPratosDeOutrosPratos() {
  pratos.outras_refeicoes.forEach((p, i) => {
    document.querySelector('.cardapio').innerHTML += `
          <div class="Prato">
            <div class="l">
                <p class="NamePrat">${p.nome}</p>
                <div class="tags">
                    <p class="tag green">R$${p.preco}</p>
                    <p class="tag gold">Especial</p>
                </div>
            </div>
            <div class="r">
                <p>${i + 1}</p>
            </div>
        </div>
        `
  })
}

function ResetLayout() {
  document.querySelector('.cardapio').innerHTML = `
      
    `
}

function InitCardapio() {
  ResetLayout()

  renderPratosDeAves()
  renderPratosDeCarnes()
  renderPratosDeSobremesas()
  renderPratosDeOutrosPratos()
}

function RenderPrat(type) {
  switch (type) {
    case 'Carne':
      ResetLayout();
      renderPratosDeCarnes();
      break;
    case 'Especiais':
      ResetLayout();
      renderPratosDeOutrosPratos();
      break;
    case 'Aves':
      ResetLayout();
      renderPratosDeAves();
      break;
    case 'Sobremesas':
      ResetLayout();
      renderPratosDeSobremesas();
      break;

  }
}

function RemoveContent() {
  const tags = document.querySelector('nav').querySelector(".tags");
  tags.classList.toggle('hide')

  if(!tags.classList.contains('hide')){
    document.querySelector('.content').querySelector('button').innerHTML = `
    <span class="material-symbols-outlined">
remove
</span>
  `
  
  }else{
    document.querySelector('.content').querySelector('button').innerHTML = `
    <span class="material-symbols-outlined">
arrow_drop_down
</span>
  `
  
  }
}

InitCardapio()