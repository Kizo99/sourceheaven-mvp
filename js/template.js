const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
console.log("Slug from URL:", slug);


fetch("templates.json")
  .then(res => res.json())
  .then(data => {

    console.log("Templates:", data);
    const template = data.find(t => t.slug === slug);

    console.log("Found template:", template);

    const container = document.getElementById("template-details");

    if (!template) {
      container.innerHTML = "<h2>Template not found</h2>";
      return;
    }

    container.innerHTML = `
      <h1>${template.title}</h1>
      <img src="${template.image}" width="400"/>
      <p>${template.short_description}</p>
      <a href="${template.file_link}">Download</a>
      <p>Category: ${template.category}</p>
    `;
  });