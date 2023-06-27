import CartService from "../services/dao/db/services/carts.service.js";
import ProductService from "../services/dao/db/services/products.service.js";

const cartService = new CartService();
const productService = new ProductService();

export async function getHome(req, res) {
  res.render("home", {});
}

export async function getProducts(req, res) {
  let limit = req.query.limit;
  let page = req.query.page;
  let sort = req.query.sort;
  let query = req.query.query;

  let usr = req.session.user;
  
  let prod = await productService.getProducts(limit, page, sort, query);

  prod.prevLink = prod.hasPrevPage
    ? `http://localhost:8080/products?page=${prod.prevPage}`
    : "";
  prod.nextLink = prod.hasNextPage
    ? `http://localhost:8080/products?page=${prod.nextPage}`
    : "";
  prod.isValid = !(page <= 0 || page > prod.totalPages);
  
  res.render("products", { ...prod, usr });
}

export async function getProductsByCart(req, res) {
  let usr = req.session.user;
  let carts = await cartService.getCartById(req.params.cid);

  res.render("productsByCart", { ...carts, usr });
}


