// src/server.js
import { createServer } from "miragejs"
import products from "./mockData/ecommerce.json";
import favsDb from "./mockData/favsDb.json";
import cartDb from "./mockData/cartDb.json";
import recentlyViewedDb from './mockData/recentlyViewedDb.json'
const favs = favsDb
const cart = cartDb
const recentlyViewed = recentlyViewedDb
export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        routes() {
            this.get("/ecommerce/products", () => products);
            this.get("/ecommerce/favs", () => favs);
            this.post("/ecommerce/favs", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                favs.push(attrs)
                return favs
            })

            this.get("/ecommerce/cart", () => cart);
            this.post("/ecommerce/cart", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                cart.push(attrs)
                return cart
            })

            this.get("/ecommerce/recentlyviewed", () => recentlyViewed)
            this.post("/ecommerce/recentlyviewed", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                recentlyViewed.push(attrs)
                return recentlyViewed
            })
        },
    })

    return server
}