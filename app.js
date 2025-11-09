document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim();
  const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : "superheroes.php";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById("result");

      if (Array.isArray(data)) {
        // Full list
        resultDiv.innerHTML = "<h3>All Superheroes:</h3><ul>" +
          data.map(hero => `<li>${hero.alias}</li>`).join("") +
          "</ul>";
      } else if (data.error) {
        resultDiv.innerHTML = `<p>Superhero not found</p>`;
      } else {
        // Single match
        resultDiv.innerHTML = `
          <h3>${data.alias}</h3>
          <h4>${data.name}</h4>
          <p>${data.biography}</p>
        `;
      }
    })
    .catch(error => {
      document.getElementById("result").innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
