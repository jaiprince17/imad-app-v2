var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { 
    'article-one': {
    title:'Article one [jaiprince17]',
    heading: 'Article one',
    date: 'feb 8, 2017',
    content: `
    <p>
    tHIS Is the content of the Article one
    tHIS Is the content of the Article one
    tHIS Is the content of the Article one
    </p>
    <p2>
    tHIS Is the content of the Article one
    tHIS Is the content of the Article one
    tHIS Is the content of the Article one
    </p2> `
     },
     
    'article-two': { 
    title:'Article two [jaiprince17]',
    heading: 'article two',
    date: 'feb 9, 2017',
    content:`
    <p>
    tHIS Is the content of the Article two
    tHIS Is the content of the Article two
    tHIS Is the content of the Article two
    </p>
    <p2>
    tHIS Is the content of the Article two
    tHIS Is the content of the Article two  
    tHIS Is the content of the Article two
    </p2> `
     },
    'article-three': { 
    title:'Article three [jaiprince17]',
    heading: 'article three',
    date: 'feb 10, 2017',
    content:`
    <p>
    tHIS Is the content of the Article three
    tHIS Is the content of the Article three
    tHIS Is the content of the Article three
    </p>
    <p2>
    tHIS Is the content of the Article three
    tHIS Is the content of the Article three
    tHIS Is the content of the Article three
    </p2> `
     }
    
};
   

    
    
    

function createTemplate (data)  {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
    var htmlTemplate =  ` 
    <html>
    <head>
    <title>
    ${title}
    </title>
    <meta name="viewport" content="width=device-width, initi-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
    <div>
    <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
    ${heading}
    </h3>
    <div>
    ${date}
    </div>
  ${content}
</div>
</body>
</html>
     `;
     return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res) {
// articlename == article-one
// articles[articleName] == {} content object for article one
var articlename = req.params.articlename;  
res.send(createTemplate(articles[articleName]));

});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
