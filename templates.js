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
"<h3><%= price %></h3>",
"<p><%= productDescription %></p>",
"<p><button class='updateProduct'>Edit</button></p",
"<p><button class='deleteProduct'>Delete</button></p",
"</article>"

].join("");
