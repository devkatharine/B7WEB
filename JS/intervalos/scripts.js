function showTime() {
  let data = new Date ();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();
  let txt = hora + ':' + minutos + ':' + segundos;

  document.querySelector('.demo').innerHTML = txt;
}

let timer = setInterval(showTime, 1000);