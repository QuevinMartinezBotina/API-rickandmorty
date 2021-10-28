const API = "https://rickandmortyapi.com/api/character/"
const HTMLResponse = document.querySelector('#app');

fetch(`${API}`)
    .then((response) => response.json())
    .then((rick) => {
        const tpl = rick.results.map((rikoso) => ` 
            <figure figure class= 'hover-img col-md-3 col-12 rounded p-2'>
                <img class="rounded" src="${rikoso.image}" />
                <p class="h4 mt-4">${rikoso.name}</p>
                <figcaption>
                    <h3>${rikoso.name}</h3>
                </figcaption>
                <p class="mt-3 h5"> <i class="text-success " >${rikoso.status}</i>  <i class="">${rikoso.origin.name}</i>
            </figure > `);
        HTMLResponse.innerHTML = `${tpl}`;
    });