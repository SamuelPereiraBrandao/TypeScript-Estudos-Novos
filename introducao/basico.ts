const searchInput = document.querySelector("#search-input") as HTMLInputElement;

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  console.log(searchTerm); // Exemplo: mostra o termo de pesquisa no console
});


const itemList = document.querySelectorAll("ul li");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  itemList.forEach(item => {
    const text = item.textContent?.toLowerCase() ?? "";

    if (text.includes(searchTerm)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});