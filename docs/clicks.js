const form = {
  /** @type {String} */
  get destination() {
    return document.getElementById("destination").value;
  },
};

document.getElementById("in-new-tab").addEventListener("click", () => {
  window.open(form.destination, "_blank");
});

document.getElementById("in-this-tab").addEventListener("click", () => {
  window.open(form.destination, "_self");
});

document.getElementById("in-default-target").addEventListener("click", () => {
  window.open(form.destination);
});

document.getElementById("set-as-location").addEventListener("click", () => {
  window.location.href = form.destination;
});
