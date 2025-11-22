document.getElementById("searchBtn").addEventListener("click", () => {
  const raw = document.getElementById("searchInput").value.trim();

  // Basic client-side sanitization: limit length and remove angle brackets
  const safeQuery = raw.substring(0, 100).replace(/[<>]/g, "");
  const url = safeQuery ? `superheroes.php?query=${encodeURIComponent(safeQuery)}` : "superheroes.php";

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const resultDiv = document.getElementById("result");
      // insert server-rendered HTML fragment
      resultDiv.innerHTML = html;
    })
    .catch(error => {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
