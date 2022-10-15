
const express = require('express');

const app = express();
const fs = require('fs');

app.use("/",express.static("./public"))
fs.readdir("./public/components/canvas", (err, files) => {
    
    app.get('/', (req, res) => {
    
        res.write("<!DOCTYPE html>")
        res.write('<html lang="en">')
            res.write('<head>')
            res.write('<meta charset="UTF-8">')
            res.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">')
            res.write('<meta name="viewport" content="width=device-width, initial-scale=1">')
            res.write('<link rel="stylesheet" href="components/css/style.css">')
            res.write('<title>Document</title>')
        res.write('</head>')
            res.write('<body>')
                res.write('<a id="top" ></a>')
                res.write('<canvas id="space"></canvas>')
                res.write('<div class="content">')
                    res.write('<div id="info">')
                        res.write('<ul>')
                            res.write('<li><a onclick="tabchange(this)" data-translate="projects" href="#"></a></li>')
                            res.write('<li><a onclick="tabchange(this)" data-translate="about" href="#"></a></li>')
                            res.write('<li><a onclick="tabchange(this)" data-translate="contact" href="#"></a></li>')
                        res.write('</ul>')
                    res.write(' </div>')
                    res.write('<div id="lang">')
                    res.write('<label class="dropdown">')
                        res.write('<div class="dd-button">')
                            res.write('<img src="components/images/globe.png" >')
                        res.write('</div>')
                        res.write('<input type="checkbox" class="dd-input" id="test">')
                            res.write('<ul class="dd-menu">')
                                res.write("<li onclick=" + "change_lang(" + 0 + ")" + ">English</li>")
                                res.write("<li onclick=" + "change_lang(" + 1 + ")" + ">Español</li>")
                                res.write("<li onclick=" + "change_lang(" + 2 + ")" + ">Francais</li>")
                            res.write('</ul>')
                        res.write('</label>')
                    res.write('</div>')
                res.write('</div>')
                res.write('<div class="projects">')
                    res.write('<ul class="card-wrapper">')
                        for(var i = 0; i < files.length; i++){
                            (function(i){ //add this function call, don't forget ending parenthesis
                                res.write('<li class="card">')
                                    res.write('<canvas id="'+ i +'" ></canvas>')
                                    res.write('<h3>')
                                    
                                    //res.write('A Super Wonderful Headline')
                                        res.write('<div class="buttonContainer">')
                                            res.write('<div onclick="changeClass(this)" class="button"></div>')
                                        res.write('</div>')
                                        res.write('<a href=""><img src="components/images/git.png"></a>')
                                        res.write('<button onclick="fullscreenCanvas(this)"><img src="components/images/fullscreen.png"></button>')
                                    res.write('</h3>')
                                res.write('</li>')
                                
                            })(i);                   
                        }
                    res.write(' </ul>')
                res.write('</div>')
                res.write('<div class="about" >')
                    res.write('<h1>about page</h1>')
                res.write('</div>')
                res.write('<div class="contact">')
                    res.write('<h1>contact page</h1>')
                res.write('</div>')
    
                res.write('<a id="backToTop" href="#top" >↑<br>top</a>')
                
                res.write('<script src="components/js/pr.js"></script>')
                res.write('<script src="components/js/translate.js"></script>')
                res.write('<script src="components/js/dom.js"></script>')
                for(var i = 0; i < files.length; i++){
                    (function(i){ //add this function call, don't forget ending parenthesis
                        res.write('<script src="components/canvas/' + files[i] +  '"></script>')
                    })(i);                   
               }
                               res.write('<script src="components/js/dom2.js"></script>')

            res.write('</body>')
        res.write('</html>')
        res.end()
        
    });
  });   


app.listen(5000 ,  () => {
    console.log(`Server started on 5000`);
});
