export function getLocaleStorage() {
  const data = localStorage.getItem("myCart");

  if (data === "undefined") {
    localStorage.setItem("myCart", JSON.stringify([]));
  } else {
    return JSON.parse(data);
  }
}
