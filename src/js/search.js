const searchEngines = {
    ddg: "https://duckduckgo.com/",
    go: "https://google.com/search",
    yt: "https://youtube.com/results"
};

const form = document.getElementById("input");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = search.value.trim();

    if (!value) return;

    const [engine, ...queryParts] = value.split(/\s+/);
    const query = queryParts.join(" ").trim();

    if (/^https?:\/\//i.test(value)) {
        window.open(value, "_blank");
        return;
    }

    const url = searchEngines[engine.toLowerCase()];

    if (!url) {
        const params = new URLSearchParams({ q: value });
        window.open(`https://duckduckgo.com/?${params}`, "_blank");
        return;
    }

    if (!query) return;

    const params = new URLSearchParams({ q: query });
    window.open(`${url}?${params}`, "_blank");
});
