document.getElementById("searchBtn").addEventListener("click", () => {
  fetch("superheroes.php")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // expecting an array of superhero objects
    })
    .then(data => {
      const aliases = data.map(hero => hero.alias);
      alert("Superheroes: " + aliases.join(", "));
    })
    .catch(error => {
      alert("Error fetching superheroes: " + error.message);
    });
});
