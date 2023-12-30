var i=0;
setInterval(function(){
    var titles=[
"|n|",
"|nn|",
"|nn$|",
"|nn$t|",
"|nn$to|",
"|nn$tom|",
"|nn$tomp|",
"|nn$tomp|",
"|nn$tom|",
"|nn$to|",
"|nn$t|",
"|nn$|",
"|nn|",
"||",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

