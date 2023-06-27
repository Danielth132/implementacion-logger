import ProductManager from "./productManager.js";
const path = "../files";

async function test1() {
  console.log(await new ProductManager(path).getProducts());
}

function test2() {
  let productos = new ProductManager(path);
  productos.addProduct("Titulo0", "desc0", 200, "Sin imagen", "Cod0", 25);
  productos.addProduct("Título1", "desc1", 50, "http//:1", "Cod1", 500);
  productos.addProduct("Título2", "desc2", 100, "http//:2", "Cod2", 500);
  productos.addProduct("Título3", "desc3", 150, "http//:3", "Cod3", 500);
  productos.addProduct("Título4", "desc4", 200, "http//:4", "Cod4", 500);
  productos.addProduct("Título5", "desc5", 250, "http//:5", "Cod5", 500);
  productos.addProduct("Título6", "desc6", 300, "http//:6", "Cod6", 500);
  productos.addProduct("Título7", "desc7", 350, "http//:7", "Cod7", 500);
  productos.addProduct("Título8", "desc8", 400, "http//:8", "Cod8", 500);
  // COD REPETIDO
  productos.addProduct("Título3", "desc3", 150, "http//:3", "Cod2", 500);
  // TITULO VACIO
  productos.addProduct("", "descripción2", 150, "http//:2", "Cod7", 500);
  // SIN TITULO
  productos.addProduct("descripción2", 150, "http//:2", "Cod8", 500);
}

async function test3() {
  console.log(await new ProductManager(path).getProducts());
}

async function test4(id) {
  console.log(await new ProductManager(path).getProductById(id));
}

function test5(id, tit, dsc, prc, img, cod, stck) {
  new ProductManager(path).updateProductById(id, tit, dsc, prc, img, cod, stck);
}

function test6(id) {
  new ProductManager(path).deleteProductoById(id);
}
