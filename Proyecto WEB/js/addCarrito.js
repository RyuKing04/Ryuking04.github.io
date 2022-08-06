const cards = document.getElementById("cards");
const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener("DOMContentLoaded", () => {
  //fetchData();
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    pintarCarrito();
  }
});

cards.addEventListener("click", (e) => {
  addCarrito(e);
});
// items.addEventListener("click", (e) => {
//   btnAccion(e);
// });

const fetchData = async () => {
  try {
    const res = await fetch("http://demo6930151.mockable.io/ropa");
    const data = await res.json();
    mostrarCards(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataC = async () => {
  try {
    const res = await fetch("http://demo6930151.mockable.io/ropa");
    const data = await res.json();
    mostrarCamisas(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataP = async () => {
  try {
    const res = await fetch("http://demo6930151.mockable.io/ropa");
    const data = await res.json();
    mostrarPantalones(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataT = async () => {
  try {
    const res = await fetch("http://demo6930151.mockable.io/ropa");
    const data = await res.json();
    mostrarTenis(data);
  } catch (error) {
    console.log(error);
  }
};


const fetchDataH = async () => {
  try {
    const res = await fetch("http://demo6930151.mockable.io/ropa");
    const data = await res.json();
    mostrarHombre(data);
  } catch (error) {
    console.log(error);
  }
};


const fetchDataM = async () => {
  try {
    const res = await fetch("http://demo6930151.mockable.io/ropa");
    const data = await res.json();
    mostrarMujer(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataMarca = async (marca) => {
  try {
    const res = await fetch("http://demo6930151.mockable.io/ropa");
    const data = await res.json();
    mostrarXMarca(data,marca);
  } catch (error) {
    console.log(error);
  }
};

const mostrarCards = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.title;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard
      .querySelector("img")
      .setAttribute("src", producto.thumbnailUrl);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });

  cards.appendChild(fragment);
};

const mostrarCamisas = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.tipo === "camisa") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarPantalones = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.tipo === "pantalon") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarTenis = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.tipo === "tenis") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarHombre = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.genero === "m") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarMujer = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.genero === "f") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarXMarca = (data,marca) => {
  
  cards.innerHTML = "";
  data.forEach((producto) => {
    if(producto.tipo === "tenis"){
    if (producto.marca === marca) {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }else if(marca === ""){
        fetchDataT();
    }
    }
  });

  cards.appendChild(fragment);
};

const addCarrito = (e) => {
  if (e.target.classList.contains("btn-dark")) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    title: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad: 1,
  };

  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  carrito[producto.id] = { ...producto };
  pintarCarrito();
};

const pintarCarrito = () => {
  // items.innerHTML = "";
  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
    templateCarrito.querySelector("span").textContent =
      producto.cantidad * producto.precio;

    //const clone = templateCarrito.cloneNode(true);
    //fragment.appendChild(clone);
  });
  //items.appendChild(fragment);

  // pintarFooter();

  localStorage.setItem("carrito", JSON.stringify(carrito));
};
