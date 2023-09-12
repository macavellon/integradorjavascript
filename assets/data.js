const productsData = [
    {
      id: 1,
      name: "Corte",
      precio: 2000 ,
      category: "servicio",
      cardImg: "./assets/img/products/corte-card.jpg",
    },
    {
      id: 2,
      name: "Corte y Baño",
      precio: 3000 ,
      category: "servicio",
      cardImg: "./assets/img/products/bañoycorte-card.jpg",
    },
    {
      id: 3,
      name: "Baño",
      precio: 1500,
      category: "servicio",
      cardImg: "./assets/img/products/baño-card.png",
    },
    {
      id: 4,
      name: "Royal Canin Perro adulto",
      precio: 10000,
      category: "alimentoperro",
      cardImg: "./assets/img/products/r-c-perroadulto.jpg",
    },
    {
      id: 5,
      name: "Royal Canin Perro cachorro",
      precio: 12000,
      category: "alimentoperro",
      cardImg: "./assets/img/products/r-c-perrocachorro.jpg",
    },
    {
      id: 6,
      name: "Royal Canin Gato adulto",
      precio: 14000,
      category: "alimentogato",
      cardImg: "./assets/img/products/r-c-gatoadulto.jpg",
    },
    {
      id: 7,
      name: "Royal Canin Gato cachorro",
      precio: 15000,
      category: "alimentogato",
      cardImg: "./assets/img/products/r-c-gatocachorro.jpg",
    },
    {
      id: 8,
      name: "Old Prince Perro adulto",
      precio: 8000,
      category: "alimentoperro",
      cardImg: "./assets/img/products/o-p-perroadulto.jpg",
    },
    {
      id: 9,
      name: "Old Prince Perro cachorro",
      precio: 1000,
      category: "alimentoperro",
      cardImg: "./assets/img/products/o-p-perrocachorro.jpg",
    },
    {
      id: 10,
      name: "Old Prince Gato adulto",
      precio: 12000,
      category: "alimentogato",
      cardImg: "./assets/img/products/o-p-gatoadulto.jpg",
    },

    {
        id: 11,
        name: "Old Prince Gato cachorro",
        precio: 14000,
        category: "alimentogato",
        cardImg: "./assets/img/products/o-p-gatocachorro.png",
        },

        {
          id: 12,
          name: "Old Prince Gato castrado",
          precio: 15000,
          category: "alimentogato",
          cardImg: "./assets/img/products/o-p-gatocastrado.jpg",
          }



]


const divideProductsInParts = (size) => {
    let productsList = []
    for (let i = 0; i < productsData.length; i+= size) {
      productsList.push(productsData.slice(i,i + size))
  
    }
    return productsList;
  }
  
  
  const appState = {                             
    products: divideProductsInParts(3), 
    currentProductsIndex: 0,
    productsLimit: divideProductsInParts(3).length, 
    activeFilter: null,
  }
  