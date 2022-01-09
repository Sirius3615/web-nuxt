const axios = require('axios');
const bodyParser = require('body-parser')
const app = require('express')()
var cors = require('cors')

app.use(bodyParser.json())
app.use(cors())


const launches = [];
const events = [];
const news = [];
const blog = [];


// REPLACE DEV ENDPOINTS BEFORE THE COMMIT
var launch_url = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=100&hide_recent_previous=true&mode=detailed&format=json';
var event_url = 'https://ll.thespacedevs.com/2.0.0/event/upcoming/?limit=100';
var news_url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=20';
var blog_url = 'https://api.spaceflightnewsapi.net/v3/blogs?_limit=20'
// UPDATE EVENTS MANUALLY BEFORE EACH COMMIT IF THE CACHE API ON GLITCH IS NO LONGER WORKING

// USE LLDEV ENDPOINT TO MAKE A SEARCH LAUNCH ENDPOINT!! THAT WILL FIRST SEARCH IN LLDEV PAST ONES AND IF NOTHING SEARCH IN UPCOMING 10 launches

axios.get(launch_url)
  .then(function (response) {
    launches.pop();
    launches.push(response.data);
    console.log('Fetched Launches')
});


axios.get('https://beyond-apis.glitch.me/launch/api/v2/events')
  .then(function (response) {
    events.pop();
    events.push(response.data);
    console.log('Fetched Events')
});

axios.get(news_url)
   .then(function (response) {
    news.pop();
    news.push(JSON.stringify(response.data));
    console.log('Fetched News')
});


axios.get(blog_url)
   .then(function (response) {
    blog.pop();
    blog.push(JSON.stringify(response.data));
    console.log('Fetched Blogs')
});


//fetch launches
setInterval(function(){
    axios.get(launch_url)
     .then(function (response) {
      launches.pop();
      launches.push(response.data);
      console.log('Launches pushed')
     });
 },10 * 60000);

 // fetch past launches every 20 minutes
 

//fetch events
setInterval(function(){
  axios.get(event_url)
   .then(function (response) {
    events.pop();
    events.push(response.data);
    console.log('Events pushed')
  });

},30 * 60000);

//fetch news
setInterval(function(){
  axios.get(news_url)
   .then(function (response) {
    news.pop();
    news.push(JSON.stringify(response.data));
    console.log('News pushed')
  });

},5 * 60000);

//fetch news
setInterval(function(){
  axios.get(blog_url)
   .then(function (response) {
    blog.pop();
    blog.push(JSON.stringify(response.data));
    console.log('Blogs pushed')
  });

},5 * 60000);


// brevilacqua email























// API

app.all('/', (req, res) => {
  res.json({ data: 'data' })
})

app.all('/launches/all', (req, res) => {
  res.json(launches)
})

app.all('/events/all', (req, res) => {
  res.json(events)
})

app.all('/news/all', (req, res) => {
  res.end(news[0])
})

app.all('/blog/all', (req, res) => {
  res.end(blog[0])
})

module.exports = app
