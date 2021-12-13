const axios = require('axios');

const launches = [];
const events = [];
const news = [];

// REPLACE DEV ENDPOINTS BEFORE THE COMMIT
var launch_url = 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=100&hide_recent_previous=true&mode=detailed&format=json';
var event_url = 'https://lldev.thespacedevs.com/2.0.0/event/upcoming/?limit=100';
var news_url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=20'
// UPDATE EVENTS MANUALLY BEFORE EACH COMMIT IF THE CACHE API ON GLITCH IS NO LONGER WORKING

// DO A REAL WORLD TEST SOON, WEIRD THING IN JSON FORMAT try removig JSON.stringify and see what it changes..
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
    console.log('Fetched events')
});

axios.get(news_url)
   .then(function (response) {
    news.pop();
    news.push(JSON.stringify(response.data));
    console.log('Fetched news')
});



//fetch launches
setInterval(function(){
    axios.get(launch_url)
     .then(function (response) {
      launches.pop();
      launches.push(JSON.stringify(response.data));
      console.log('Launches pushed')
     });
 },6 * 60000);

//fetch events
setInterval(function(){
  axios.get(event_url)
   .then(function (response) {
    events.pop();
    events.push(JSON.stringify(response.data));
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



// API routes
export default function (req, res, next) {
    
    console.log(req.url)

    if(req.url === "/") {
      res.end(JSON.stringify({ data: req.url }));
      return;
    } 
  
    // Launches endpoint
    if(req.url === "/launches/all"){
      res.end(JSON.stringify(launches[0]));
    }

    // Events endpoint
    if(req.url === "/events/all"){
      res.end(JSON.stringify(events[0]));
    }

    // News endpoint
    if(req.url === "/news/all"){
      res.end(news[0]);
    }
  
    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
    next()
  }