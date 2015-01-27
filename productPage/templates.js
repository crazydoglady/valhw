var templates = {};

templates.product = [
"<article data-index='<%= idx %>'>",
"<h2><%= name %></h2>",
"<img src='<%= image %>'/>",
"<p><%= description %></p>",
"<p><button>PRICE</button></p>",
"<p><button>EDIT</button></p>",
"<p><button class='deleteProduct'>REMOVE</button></p>",
"</article>"


].join("");
