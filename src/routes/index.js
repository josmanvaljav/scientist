import header from "../templates/header.js";
import home from "../pages/home.js";
import character from "../pages/character.js";
import error404 from "../pages/error404.js";
import getHash from "../utils/getHash.js";
import resolveRoute from "../utils/resolveRoutes.js";

const routes = {
    "/": home,
    "/:id": character,
    "/contact": "Contact"
}

const router = async () => {
    const headerHtml = null || document.getElementById("header");
    const contentHtml = null || document.getElementById("content");

    headerHtml.innerHTML = await header();
    let hash = getHash();
    let route = await resolveRoute(hash);
    let render = routes[route] ? routes[route] : error404;
    contentHtml.innerHTML = await render();
};

export default router;