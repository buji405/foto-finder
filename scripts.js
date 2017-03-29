$('.add-button').on('click', function() {
  var $title = $('.title-input').val();
  var $caption = $('.caption-input').val();
  var $filepath= realPath($('.upload-photo').val());
  console.log($filepath);
  var $newCard = new PhotoCard($title, $caption, $filepath);
  prependCard($newCard)
})

function realPath(filepath) {
  return filepath.split('\\').pop();
}

function PhotoCard(title, caption, filepath) {
  this.title = title;
  this.caption = caption;
  this.filepath = filepath;
  console.log(this);
}

function prependCard(newCard) {
  var $title = newCard.title;
  var $caption = newCard.caption;
  var $filepath= newCard.filepath;
  $('.card-container').prepend(
    `<article class="card">
      <h3 class="card-title">${$title}</h3>
      <img class="photo" src="photos/${$filepath}" alt="">
      <p class="photo-caption">${$caption}</p>
      <div class="icon-container">
        <button class="delete" type="button" name="button"></button>
        <button class="favorite" type="button" name="button"></button>
      </div>
    </article>`
  )
}














/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function( $, window, document, undefined )
{
	$( '.inputfile' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				$label.find( 'span' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
	});
})( jQuery, window, document );

$('.card-container').on('click', '.delete', function() {
  $(this).parents('.card').remove();
})

$('.card-container').on('click', '.favorite', function() {
  $(this).parent().parent().toggleClass('liked');
  $(this).toggleClass('favorite-active');
})
