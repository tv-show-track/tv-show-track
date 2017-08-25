const players = [
  {
    title: 'VLC',
    image: 'images/vlc-logo.png'
  },
  {
    title: 'Chromecast',
    image: 'images/chromecast-logo.png'
  }
];

const currentPlayerElem = document.querySelector('.current-player')
let currentIdx

changeCurrentPlayer()
window.setInterval(changeCurrentPlayer, 3000)

///////////////////////////////

function changeCurrentPlayer() {
  if (currentIdx != null) {
    currentIdx +=1

  if (currentIdx == null || currentIdx && !players[currentIdx]) {
    currentIdx = 0
  }

  currentPlayerElem.innerHTML = `
  <div class="animated fadeInDown">
    <img src="${ players[currentIdx].image }" />
    ${ players[currentIdx].title }
  </div>`
}
