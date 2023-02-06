import getHush from "../utils/getHash.js";
import getData from "../utils/getData.js";

const character = async () => {
    const id = getHush();
    const charac = await getData(id); // now getData receives an argument because we are getting an specific character.

    const view = `
    <div class="characters-inner">
        <article class="characters-card">
            <img src="${charac.image}" alt="${charac.name}">
            <h2>${charac.name}</h2>
        </article>
        <article class="characters-card">
            <h3>Episodes: <span>${charac.episode.length}</span></h3>
            <h3>Status: <span>${charac.status}</span></h3>
            <h3>Species <span>${charac.species}</span></h3>
            <h3>Gender: <span>${charac.gender}</span></h3>
            <h3>Origin: <span>${charac.origin.name}</span></h3>
            <h3>Last location: ${charac.location.name}</span></h3>
        </article>
    </div>
    `;

    return view;
};

export default character;