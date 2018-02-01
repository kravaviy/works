const arr = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13, 16, ,1 , 2, 3, 4];

const barBox = $(".bar-box");
const green = "bar-green";
const yellow = "bar-yellow";
const red = "bar-red";
const barNumber = "bar-10";

function someFunc() {
  arr.forEach(function(elem) {
    let height = `bar-${elem * 10}`;
    let bar = $("<div></div>")
      .addClass("bar-box2")
      .addClass(height);
    elem >= 0 && elem <= 5 ? bar.addClass(green) : null;
    elem >= 6 && elem <= 10 ? bar.addClass(yellow) : null;
    elem >= 10 ? bar.addClass(red) : null;
    barBox.append(bar);
  });
}

function run() {
  someFunc();
}

window.chart = {
  init: run
};
window.chart.init();