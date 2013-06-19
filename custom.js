var counter = 0;

$(document).ready(function() {
  $('div.square').on('click', function(){
    colorfy($(this));
    neighbors($(this));
    counter++;
    if ($('div.square').not('.blue').length === 0) {
      $('#congrats').show();
    } else {
      $('#congrats').hide();
    }
  });

  $('button').on('click', function(){
    $('div.square').removeClass('blue red', '400');
  });
});

// neighbors function determines the neighbors of the div that was closed and make them blue
var neighbors = function (obj) {
  var selected_row = parseInt(obj.attr('data-row'));
  var selected_column = parseInt(obj.attr('data-column'));

  var neighbors_array = [$('div[data-row='+(selected_row - 1)+'][data-column='+(selected_column)+']'),
                         $('div[data-row='+(selected_row + 1)+'][data-column='+(selected_column)+']'),
                         $('div[data-row='+(selected_row)+'][data-column='+(selected_column - 1)+']'),
                         $('div[data-row='+(selected_row)+'][data-column='+(selected_column + 1)+']')];

  colorfy(neighbors_array);
};

// this method toggles the class of the elements passed to it
var colorfy = function(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = $(elements[i]);
    if (counter % 2 === 0) {
      element.removeClass('red blue').addClass('blue');
    } else {
      element.removeClass('red blue').addClass('red');
    }
  };
};

