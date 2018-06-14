var url =
  "https://www.google.com/alerts/feeds/16168840660215306315/5282232754510575376";
const newsItem = [];
feednami.loadGoogleFormat(url, function(result) {
  if (result.error) {
    console.log(result.error);
  } else {
    var entries = result.feed.entries;
    var array = { newsItem };
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      // console.log(entry.title)
      // console.log(entry.contentSnippet)
      // console.log(entry)
      var title = entry.title;
      var content = entry.contentSnippet;
      // the first 120 characters of the entry
      array.title = title;
      array.content = content;
      newsItem.push(entry);
    }
    //console.log(newsItem);
  }
});

function storyTemplate(story) {
  return `<div class="story">
    <p class="headline"> ${newsItem.entry.title}</p>
    <p class="snippet"> ${newsItem.entry.contentSnippet}</p>
    <a href="${newsItem.entry.link}"> ${newsItem.entry.link}</a>
    `;
}
document.getElementById("app").innerHTML = `
    <h1 class="app-title"> There are ${newsItem.lenght} Padres News Items. </h1>
    ${newsItem.map(storyTemplate).join("")}
    <p id="footer"> Check Back soon for Updates </P>
    `;
