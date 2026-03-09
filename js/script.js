fetch("./templates.json")
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("templates-container");
    const searchInput = document.getElementById("search");

    function displayTemplates(templates) {
      container.innerHTML = "";

      templates.forEach(template => {
        container.innerHTML += `
          <div class="card">
            <img src="${template.image}" />
            <h3>${template.title}</h3>
            <p>${template.short_description}</p>
            <button><a href="./template?slug=${template.slug}">View Template</a></button>
          </div>
        `;
      });
    }

    displayTemplates(data);

    searchInput.addEventListener("input", () => {
      const filtered = data.filter(t =>
        t.title.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      displayTemplates(filtered);
    });


  });

