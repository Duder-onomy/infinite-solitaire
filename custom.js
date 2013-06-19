var counter = 0;
// var counter_red = 0;
// var counter_blue = 0;

$(document).ready(function() {
  $('#container').on('click', 'div', function(e) {
    colorfy($(this));
    neighborhood = neighbors($(this));
    colorfy(neighborhood);
    // e.stopPropogation();
    // scoreCounter();
    // counter++;
  });

  $('button').on('click', function() {
    $('div.square').removeClass('blue red', '400');
  });
});

// neighbors function determines the neighbors of the div that was closed and make them blue
var neighbors = function (obj) {
  var selected_row = parseInt(obj.parent().attr('id'), 10);
  var selected_column = parseInt(obj.parent('div').length + 1, 10);
  var selected_row_minus_one = selected_row - 1;
  var selected_row_plus_one = selected_row + 1;
  ///////////////////////////LEFT SIDE/////////////////////////////////////////
  divPrepend(1, $('div[id='+selected_row+']'));
  ///////////////////////////RIGHT SIDE////////////////////////////////////////
  divAppend(1, $('div[id='+selected_row+']'));
  ///////////////////////////ABOVE/////////////////////////////////////////////
  var above_row = $('div[id='+selected_row_minus_one+']');
  var above_to_add = parseInt(obj.parent('div').length + 1, 10) - $('div[id='+selected_row_minus_one+']').children('div').length;
  divAppend(above_to_add, above_row);

  ///////////////////////////BOTTOM////////////////////////////////////////////
  var below_row = $('div[id='+selected_row_plus_one+']');
  var below_to_add = parseInt(obj.parent('div').length + 1, 10) - $('div[id='+selected_row_plus_one+']').children('div').length;
  divAppend(below_to_add, below_row);

  var this_squares_index = $(obj).index();
  ///////////THE FOLLOWING LINES DO NOT WORK!!!!??/////////////////////////////
  var neighborhood = $(above_row).get(this_squares_index);
  console.log(neighborhood);

  // $('fieldset').index($(this).parents('fieldset'))
  // var selected_row = parseInt(obj.attr('data-row'));
  // var selected_column = parseInt(obj.attr('data-column'));

  // var neighbors_array = [$('div[data-row='+(selected_row - 1)+'][data-column='+(selected_column)+']'),
  //                        $('div[data-row='+(selected_row + 1)+'][data-column='+(selected_column)+']'),
  //                        $('div[data-row='+(selected_row)+'][data-column='+(selected_column - 1)+']'),
  //                        $('div[data-row='+(selected_row)+'][data-column='+(selected_column + 1)+']')];

  // return neighborhood;
};

var divAppend = function(number, rows) {
  for (var i = 0; i < number; i++) {
    $(rows).append('<div class="square"></div>');
  }
};


var divPrepend = function(number, rows) {
  for (var i = 0; i < number; i++) {
    $(rows).prepend('<div class="square"></div>');
  }
};



// this method toggles the class of the elements passed to it
var colorfy = function(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = $(elements[i]);
    if (counter % 2 === 0) {
      element.removeClass('red blue').addClass('blue', '400');
    } else {
      element.removeClass('red blue').addClass('red', '400');
    }
  };
};

// counts the score for each color and displays it
var scoreCounter = function() {
  red_score = $('div .red').length;
  blue_score = $('div .blue').length;

  $('#red-score').text(red_score);
  $('#blue-score').text(blue_score);
};

var movesCounter = function() {
  // this will count the moves for each color
};
