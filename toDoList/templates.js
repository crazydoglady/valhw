var templates = {};

templates.task = [
"<article data-taskId='<%= _id %>'>",
"<h3><%= taskName %></h3>",
"<h4><%= dueDate %></h4>",
"<p><%= description %></p>",
"<button class="deleteTask"></button> | <button class="showEditTask"></button>",
"<form action="" class="editT  ask">",
"<div class=  "form">",
"<input type="text" class="control" name="editName" value"<%= name %">",
"</div>",
"<div class="form">",
"<input type="text" class="control" name="editdueDate" value="<% dueDate %>" >",
"</div>",
"<div class="form">",
"<textarea name="editDescription" class="control" id="" cols="30" rows="10"> <%= description %> </textarea>",
"</div>",
"<button class=type="submit"><h2>EditTask</h2></button>",
"</form>",
"</article>"

].join("");
