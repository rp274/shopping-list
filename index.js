$(function(){
//adding items via form  
  $('#js-shopping-list-form').submit(function(event) {
//stop default form action    
    event.preventDefault();

    const listItem = $('.js-shopping-list-entry').val();
//clear form input
    $('.js-shopping-list-entry').val('');
//add new item
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

//toggle strike through on item
$('.shopping-list').on('click', '.shopping-item-toggle',
  function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

//delete item from list
$('.shopping-list').on('click', '.shopping-item-delete',
  function(event) {
    $(this).closest('li').remove();
  });



});
