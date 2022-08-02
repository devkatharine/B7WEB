function subirTela(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function botaoScroll (){
  if (window.screenY === 0){
    //ocultar botão
    document.querySelector('.scrollbutton').style.display = 'none';
  } else {
    //mostrar o botão
    document.querySelector('.scrollbutton').style.display = 'block';
  }
}

window.addEventListener('scroll', botaoScroll)