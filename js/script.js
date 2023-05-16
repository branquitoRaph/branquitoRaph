// Obtém todos os links com a classe "nav-item" e "nav-link"
const links = document.querySelectorAll("a.nav-item.nav-link");

// Adiciona um ouvinte de evento de clique a cada link
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de redirecionamento do link
    const href = this.getAttribute("href"); // Obtém o destino da âncora do atributo "href"

    // Verifica se o destino da âncora é um seletor válido
    if (href.startsWith("#")) {
      const target = document.querySelector(href); // Obtém o elemento de destino com base no seletor

      if (target) {
        target.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento de destino
      }
    }
  });
});

// Obtém o link com a classe "main-btn"
const link = document.querySelector(".main-btn");

// Adiciona um ouvinte de evento de clique ao link
link.addEventListener("click", function(event) {
  event.preventDefault(); // Impede o comportamento padrão de redirecionamento do link

  // Restante do código...
  const href = this.getAttribute("href"); // Obtém o destino da âncora do atributo "href"

    // Verifica se o destino da âncora é um seletor válido
  if (href.startsWith("#")) {
    const target = document.querySelector(href); // Obtém o elemento de destino com base no seletor

    if (target) {
        target.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento de destino
    }
  }
});


