$(document).ready(function () {
  $('#searchBox').on('keyup', function () {
    let query = $(this).val().trim();
    $('#loading').show();

    $.ajax({
      url: 'http://localhost:3001/products?q=' + encodeURIComponent(query),
      method: 'GET',
      success: function (data) {
        if (data.length === 0 && query !== '') {
          $.ajax({
            url: 'http://localhost:3001/products',
            method: 'GET',
            success: function (allProducts) {
              const matched = allProducts.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
              );
              renderProducts(matched);
            },
            error: function () {
              $('#loading').hide();
              $('#results').html('<p>Error fetching products.</p>');
            }
          });
          return;
        }
        renderProducts(data);
      },
      error: function () {
        $('#loading').hide();
        $('#results').html('<p>Error fetching products.</p>');
      }
    });
  });

  function renderProducts(items) {
    $('#loading').hide();
    $('#results').empty();

    if (items.length === 0) {
      $('#results').html('<p>No products found</p>');
      return;
    }

    items.forEach(function (item) {
      $('#results').append(`
        <div class="product-card">
          <img src="${item.image}" alt="${item.name}" width="60" height="60">
          <div>
            <strong>${item.name}</strong><br>
            <span>₹${item.price}</span>
          </div>
        </div>
      `);
    });
  }
});