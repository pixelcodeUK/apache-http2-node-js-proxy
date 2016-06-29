var express = require('express');
var app = express();

app.get('/test.js', function (req, res) {
  res.sendFile('/vagrant/test.js');
});

app.get('/', function (req, res) {
  res.header('Link' , '</test.js>; rel=preload; as=script' );
  res.send('<html><body>Hello World!<script>var script = document.createElement("script");script.src = "/test.js";script.async = true;setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(script);},2000);</script></body></html>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
