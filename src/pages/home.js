import getData from "../utils/getData.js";

const home = async () => {
    const charatcters = await getData(); // for the first time we are no passing arguments to fetData.
    const view = `
    <div class="characters">
        ${charatcters.results.map(character => `
            <article class="characters-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
            `).join("")
        }
    </div>
    `;

    return view;
};

export default home;
