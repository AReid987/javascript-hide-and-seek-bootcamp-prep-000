function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML , 10) + n

  }
}

function deepestChild(){

  var array = []
  var elmList = document.querySelectorAll('#grand-node div')
  for (var i = 0; i < elmList.length; i++ ) {
    array.push(elmList[i])
  }
  return array[array.length - 1]

  }
