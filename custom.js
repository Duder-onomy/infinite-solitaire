var counter = 0;
// var counter_red = 0;
// var counter_blue = 0;

$(document).ready(function() {
  $('#container').on('click', '.square', function(e) {
    colorfy($(this));
    neighbors($(this));
    // e.stopPropogation();
    scoreCounter();
    counter = counter + 1;
  });

  $('button').on('click', function() {
    $('div.square').removeClass('blue red', '400');
  });
});

// neighbors function determines the neighbors of the div that was closed and make them blue
var neighbors = function (obj) {
  var selected_row_number = parseInt(obj.parent().attr('id'), 10);
  var selected_row_number_minus_one = selected_row_number - 1;
  var selected_row_number_plus_one = selected_row_number + 1;
  ///////////////////////////LEFT SIDE/////////////////////////////////////////
  if (obj.index() !== 0 && obj.parent('div').children().length !== 25) {
    if (obj.parent('div').children().length === 1) {
      add_first_column();
    } else {
      divPrepend(1, $('div[id='+selected_row_number+']'));
    }
  }
  ///////////////////////////RIGHT SIDE////////////////////////////////////////
  if (obj.parent('div').children().length != 25) {
    divAppend(1, $('div[id='+selected_row_number+']'));
  }
  ///////////////////////////ABOVE/////////////////////////////////////////////
  var above_row = $('div[id='+selected_row_number_minus_one+']');
  var above_to_add = ($(obj.parent('div')).children().length - 1) - $('div[id='+selected_row_number_minus_one+']').children().length;
  divAppend(above_to_add, above_row);

  ///////////////////////////BOTTOM////////////////////////////////////////////
  var below_row = $('div[id='+selected_row_number_plus_one+']');
  var below_to_add = ($(obj.parent('div')).children().length - 1) - $('div[id='+selected_row_number_plus_one+']').children().length;
  divAppend(below_to_add, below_row);

  ///////////////////////////NEIGHBORS/////////////////////////////////////////
  var this_squares_index = parseInt($(obj).index(), 10);
  var one_plus_index = this_squares_index + 1;
  var one_minus_index = this_squares_index - 1;

  var neighborhood = [$('div[id='+selected_row_number_minus_one+']').children().get(this_squares_index),
                      $('div[id='+selected_row_number_plus_one+']').children().get(this_squares_index),
                      $('div[id='+selected_row_number+']').children().get(one_plus_index),
                      $('div[id='+selected_row_number+']').children().get(one_minus_index)];

  colorfy(neighborhood);
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

var add_first_column = function() {
  var all_rows = $('div.row');
  for (var i = 0; i < all_rows.length; i++) {
    var this_row = all_rows[i];
    divPrepend(1, $(this_row));
  }
};

// this method toggles the class of the elements passed to it
var colorfy = function(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = $(elements[i]);
    if (counter % 2 === 0) {
      element.removeClass('red blue invisible_square').addClass('blue', '400').addClass('visible');
    } else {
      element.removeClass('red blue invisible_square').addClass('red', '400').addClass('visible');
    }
  }
  var all_other_squares = $('.square');
  for (var j = 0; j < all_other_squares.length; j++ ) {
    var this_square = all_other_squares[j];
    if (!$(this_square).hasClass('blue') && !$(this_square).hasClass('red')) {
      $(this_square).addClass('invisible_square');
    }
  }
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
