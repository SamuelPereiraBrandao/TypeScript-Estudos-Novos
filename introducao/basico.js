"use strict";
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value;
    console.log(searchTerm); // Exemplo: mostra o termo de pesquisa no console
});
const itemList = document.querySelectorAll("ul li");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    itemList.forEach(item => {
        var _a, _b;
        const text = (_b = (_a = item.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
        if (text.includes(searchTerm)) {
            item.classList.remove("hidden");
        }
        else {
            item.classList.add("hidden");
        }
    });
});
//# sourceMappingURL=basico.js.map