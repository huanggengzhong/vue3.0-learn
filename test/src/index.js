const handleChange = (url, content) => {
  // go to url
  window.history.pushState(null, "hello there", url);

  // new data
  document.getElementById("app").innerHTML = `
    <h1>${content}</h1>
  `;
};
document.getElementById("change").addEventListener("click", e => {
  e.preventDefault();
  handleChange("create.html", "create");
});

document.getElementById("home").addEventListener("click", e => {
  e.preventDefault();
  handleChange("/", "home");
});
