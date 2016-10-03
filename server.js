var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = { 
    'article-one': {
      title: 'Article One | Manojkumar',
      heading: 'Article One',
      date: 'Sep 20, 2016',
      content:`<p>
                    Hi.... I am manojkuamr...This is the content for my first article.  Hi.... I am manojkuamr...This is the content for my first article. Hi.... I am manojkuamr...This is the content for my first article.
               </p>
               <p>
                    Hi.... I am manojkuamr...This is the content for my first article. Hi.... I am manojkuamr...This is the content for my first article. Hi.... I am manojkuamr...This is the content for my first article.
               </p>`
      
    },
    'article-two': {
      title: 'Article Two | Manojkumar',
      heading: 'Article Two',
      date: 'Sep 23, 2016',
      content:`<p>
                    Hi.... I am manojkuamr...This is the content for my Second article.  Hi.... I am manojkuamr...This is the content for my Second article. Hi.... I am manojkuamr...This is the content for my Second article.
               </p>`
              
    },
    'article-three': {
      title: 'Article Three | Manojkumar',
      heading: 'Article Three',
      date: 'Sep 27, 2016',
      content:`<p>
                    Hi.... I am manojkuamr...This is the content for my Third article.  
               </p>`
    },
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="veiwport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet">
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
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
