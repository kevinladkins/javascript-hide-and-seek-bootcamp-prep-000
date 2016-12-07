function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
let list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = list.length; i < l; i++) {
    let x = list[i].innerHTML;
    list[i].innerHTML = parseInt(x, 10) + n;
  }
}

function deepestChild(name) {
  let id = document.getElementById("grand-node");
  let tag = id.querySelectorAll("div");
  let nested = id.getElementsByTagName("div")
  for (let i = 0, l = tag.length; i < l; i++) {
    nested = id.getElementsByTagName("div")[i]
    }
    return nested
}
