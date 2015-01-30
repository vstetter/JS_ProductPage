// $('section').append(
//   "<article>" +
//   "<img src = '" + product.image + "' alt=''>"
//   + "<h3>" + product.productName + "</h3>"
//   + "<h3>" + product.price + "</h3>"
//   + "<p>" + product.productDescription + "</p>"
//   + "</article>"
// );


var templates = {};

templates.product = [

"<article data-index='<%= idx %>'>",
"<img src = <%= image %> alt=''>",
"<h3><%= productName %></h3>",
"<h4><%= price %></h4>",
"<p><%= productDescription %></p>",
"<p><button class='deleteProduct'>Delete</button></p>",
"<p><button class='editProduct'>Edit</button></p>",
"<div class='editform'>",
"<p><input class='editImage' type='text' value='<%= image %>'></p>",
"<p><input class='editproductName' type='text' value='<%= productName %>'></p>",
"<p><input class='editprice' type='text' value='<%= price %>'</p>",
"<p><input class='editproductDescription' type='text' value='<%= productDescription %>'</p>",
"<button class='UpdateWholeProduct'>Update Product Info</button>",
"</div>",
"</article>"

].join("");
