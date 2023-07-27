function toogleMode() {
  const html = document.documentElement

  /*Se classe contém 'light', remove. 
  Se não contém, adiciona:

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  Toda essa instrução pode ser substituída por: */

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar avatar-light
    img.setAttribute('src', './assets/avatar-light.jpg')
    //se tiver sem light mode, manter avatar
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}
