$('.add-button').on('click', function() {
  var $title = $('.title-input').val();
  var $caption = $('.caption-input').val();
  var $filepath= $('.upload-photo').val();
  console.log($filepath);
  var $newCard = new PhotoCard($title, $caption, $filepath);
  prependCard($newCard)
})

function PhotoCard(title, caption, filepath) {
  this.title = title;
  this.caption = caption;
  this.filepath = filepath;
}

function prependCard() {
  var $title = $('.title-input').val();
  var $caption = $('.caption-input').val();
  $('.card-container').prepend(
    `<article class="card">
      <h3 class="card-title">${$title}</h3>
      <div class="photo">Photo</div>
      <p class="photo-caption">${$caption}</p>
      <div class="icon-container">
        <button class="delete" type="button" name="button"></button>
        <button class="favorite" type="button" name="button"></button>
      </div>
    </article>`
  )
}

$('.card-container').on('click', '.delete', function() {
  $(this).parents('.card').remove();
})

$('.card-container').on('click', '.favorite', function() {
  $(this).parent().parent().toggleClass('liked');
  $(this).toggleClass('favorite-active');
})
