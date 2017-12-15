// Select color input
let colorPick = $('#colorPicker');
// Select size input
let inputHeight = $('#input_height');
let inputWidth = $('#input_width');


// Define the canvas
let pixelCanvas = $('#pixel_canvas');
 
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    makeGrid();
    event.preventDefault();
});
 
function makeGrid() {
// Your code goes here!
 
    // Clear the canvas before creating a new one
 
    pixelCanvas.children().remove('tr');
     
    // Assigns values to height and width
 
    let height = inputHeight.val();
    let width = inputWidth.val();
 
    // Build the canvas
 
    // Create rows
    for (rows = 1; rows <= height; rows++){
        $('<tr></tr>').appendTo(pixelCanvas);
    }
    // Create columns
	for (cols = 1; cols <= width; cols++){
    	$('<td></td>').appendTo('tr');
	}
}

// Fill the td with selected color when clicked
pixelCanvas.on('click', 'td', function(){
	let color = $('#colorPicker').val();
    $(this).css('background-color', color);
});
 

