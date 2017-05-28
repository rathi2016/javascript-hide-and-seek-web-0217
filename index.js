function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
 return document.querySelector('#nested .target')
}

function increaseRankBy(n){

  const rankedLists = document.querySelectorAll('.ranked-list')

     for (let i = 0, l = rankedLists.length; i < l; i++) {
       let children = rankedLists[i].children

      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
}

function deepestChild() {
  let x = document.getElementById('grand-node')
  let next = x.children[0]

  while (next) {
    x = next
    next = x.children[0]
  }
  return x
}
