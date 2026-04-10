let favorites = JSON.parse(localStorage.getItem("fav")) || [];

function saveFavorite(place) {
    if (!favorites.includes(place)) {
        favorites.push(place);
    }
    localStorage.setItem("fav", JSON.stringify(favorites));
    showFavorites();
}

function showFavorites() {
    const fav = document.getElementById("favorites");
    if (fav) {
        fav.textContent = favorites.join(", ");
    }
}

showFavorites();

const data = [
    { name: "Paris", img: "https://content.amimir.com/img/geo/cities/francia_p_3/ile_de_france_r_101/paris_c_1967/paris-default.jpg" },
    { name: "Rome", img: "https://cdn2.civitatis.com/italia/roma/galeria/colosseum-aerial-view.jpg" },
    { name: "Tokyo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjPyrTJVAPc9KPEkwS5yoqwHXou7LlUun1w&s" },
    { name: "Bangkok", img: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt946ff9e4985c1319/6731c3a64ef1040e96e55bfc/BCC-2024-EXPLORER-BANGKOK-FUN-THINGS-TO-DO-HEADER_MOBILE.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart" },
    { name: "New York", img: "https://content-viajes.nationalgeographic.com.es/medio/2024/10/02/times-square_cad653eb_241002174521_1200x799.jpg" },
    { name: "Peru", img: "https://blackpepper.travel/cache/2023-12/viajes-peru-blackpepper-2-0018-galeria-2x-2362x1572.jpg" }
];

const list = document.getElementById("destinationsList");

function render(arr) {
    if (list) {
        list.innerHTML = arr.map(item =>
            `<div class="card">
                <img src="${item.img}" style="width:100%">
                <h2>${item.name}</h2>
                <button onclick="saveFavorite('${item.name}')">Save</button>
            </div>`
        ).join("");
    }
}

render(data);

// SEARCH
const search = document.getElementById("search");

if (search) {
    search.addEventListener("input", (e) => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        render(filtered);
    });
}

// FORM
const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("msg").textContent = "Message sent!";
    });
}
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
