var templates = {};

templates.userInfo=[
"<div class='user'>",
"img src= '<%= avatar_url %>' width='230' height = '230'>",
"<h1><%= name %><h1>",
"<h3><%= login %></h3>",
"<p><span class='octicon octicon-location '></span><%= location %></p>",
"<p><span class='octicon octicon-mail '></span><%= email %></p>",
"<p><span class='octicon octicon-clock '></span><%= created_at %></p>",
"<div class='stats'>",
"<a href='<%= followers %>'<span>Followers</span></a>",
"<a href='<%= starred_url %>'<span>Starred</span></a>",
"<a href='<%= following %>'<span>Following</span></a>",
"</div>",
"</div>"

].join("");

templates.repo = [
"<article>",
"<h2><%= name %></h2>",
"<h5><%=  name %></h5>",
"<h6><%= updated_at %></h6>",
"<span><%= language %></span>",
"<span class='octicon octicon-star'></span>",
"<span><%= stargazers_count %></span>",
"<span class='octicon octicon-git-branch'></span>",
"<span><%= forks_count %></span>",
"</article>"

].join("");


templates.activity = [
"<section>",
"<article>",
"<span class='octicon octicon-git-commit'></span>",
"<h6><%= created_at %></h6>",
"<p><%= login %> pushed to <%= master_branch %> at <%= name %>",
"<img src = <%= avatar_url %> />",
"<p> <%= message %> </p>",
"</section>"

].join("");




//
// ].join("");
//
// templates.sideBar ="<p><%= selftext %> </p>";
//
// sideBarReddit: function (redditData) {
//     console.log(redditData);
//     var reddits = redditData.data.children;
//     var markup = "";
//
//     // lets use our template
//     var sideBarTmpl = templates.sidebar;
//     console.log(reddits);
//     reddits.forEach(function (item, index, array) {
//          markup += sideBarTmpl(item.selftext);
//        });
//       console.log(markup);
//       $("aside").append(markup);
//
//     }
