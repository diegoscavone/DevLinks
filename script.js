function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light') 

  let img = document.querySelector('#profile img')
  let alt = document.querySelector('img alt')
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-light.png")
    alt.setAttribute("Erro")
  }else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}