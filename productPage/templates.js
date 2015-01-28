var templates = {};

templates.product = [
"<article data-index='<%= idx %>'>",
"<h2><%= name %></h2>",
"<img src='<%= image %>'/>",
"<p><%= description %></p>",
"<button>PRICE</button>",
"<button class='edit'>EDIT</button>",
"<button class='deleteProduct'>REMOVE</button>",
"</article>"


].join("");
