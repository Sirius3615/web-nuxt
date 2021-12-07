
const express = require("express");
const app = express();
var cors = require('cors')
const fetch = require('node-fetch').default;
const JSONdb = require('simple-json-db');
const db = new JSONdb('./database.json');
const store = require('data-store')({ path: process.cwd() + './data.json' });

var API_KEY = process.env.API_KEY;
var API_KEY_SECRET = process.env.API_KEY_SECRET;
var ACCES_TOKEN = process.env.ACCES_TOKEN;
var ACCES_SECRET = process.env.ACCES_SECRET;


// === TWITTER NPM === //
const twitter = require('twitter-lite');
const twitterclient = new twitter ({
  subdomain: "api", // "api" is the default (change for other subdomains)
  version: "1.1", // version "1.1" is the default (change for other subdomains)
  consumer_key: API_KEY, // from Twitter.
  consumer_secret: API_KEY_SECRET, // from Twitter.
  access_token_key: ACCES_TOKEN, // from your User (oauth_token)
  access_token_secret: ACCES_SECRET // from your User (oauth_token_secret)
 });


app.use(cors())
app.use(express.json());
const staff = [
  {
      "id": 1,
      "role" : "CEO",
      "name" : "Sirius",
      "summary" : "Hey, I am a high school student with an idea and a project, I am a founder of Beyond Earth and it’s CEO. I love space form when I was little, I wanna become an astronaut, or work at either NASA or SpaceX or maybe make my own company, who knows. I love rockets and astronomy I have always been interested in it and am constantly wondering are we alone or are there other planets like earth? Also I love programming and making stuff.",
      "tweet" : "https://twitter.com/ivanbegonja0",
      "imageUrl" : "https://cdn.discordapp.com/attachments/836347027503054889/836935714268250143/image0.jpg",
      "insta" : "https://www.instagram.com/Ivanbegonja_"
    },
      {
      "id": 2,
      "role" : "COO",
      "name" : "Jobless_guy",
      "summary" : "I am Co owner of beyond Earth. I love coding, music and sleeping. I love ducks and gooses and my favourite fruit is Pineapple. I love space and am very interested in planets and the life on them.",
      "tweet" : "https://twitter.com/jobless_guy?s=09",
      "imageUrl" : "https://cdn.discordapp.com/avatars/495582864490889235/644a8738a7e6fac4be0ebd723dc8be11.png?size=2048",
      "insta" : "https://instagram.com/inst_jobless_guy?utm_medium=copy_link"
    },
  {
      "id": 3,
      "role" : "COO",
      "name" : "Mike",
      "summary" : "I am Michael on discord and I am a co creator of beyond earth. I really like legos and my dream would be to design legos or lego games. I'm also a huge fan of horror and space.",
      "tweet" : "https://twitter.com/That_Lego_Gamer?s=09",
      "imageUrl" : "https://cdn.discordapp.com/attachments/836347027503054889/837015635648708618/image0.jpg",
      "insta" : "https://www.instagram.com/invites/contact/?i=70vk7ky74rfh&utm_content=d2kq6ey"
    },
  {
    "id": 4,
      "role" : "Writer, Discord staff",
      "name" : "championof7seas",
      "summary" : "Hey! i am championof7seas,people mostly call me champ I am a kid who passed high school trying to get to a university but its taking some time, I am mostly wasting my time on games,i  wish to be a Aerospace Engineer and I am trying to make my own space company it may never happen but i will try my best",
      "tweet" : "",
      "imageUrl" : "https://cdn.discordapp.com/avatars/812258741525020692/36c85c3820ad691daf56a7edf59c1d83.png?size=2048",
      "insta" : ""
    },
   {
    "id": 5,
      "role" : "Discord Staff",
      "name" : "Roy",
      "summary" : "I'm a 16-year-old chess and birdwatching enthusiast from Delft, The Netherlands. I used to be fascinated by everything space when I was younger, and picked up observational astronomy again in early 2020. Currently free from school or studies, I spend my time on my hobbies - and I love hanging out on discord and helping out wherever I can 🙂",
      "tweet" : "",
      "imageUrl" : "https://cdn.discordapp.com/avatars/445644685269139478/78c8e0c4ccf72d6dac26903d162f5057.png?size=2048",
      "insta" : ""
    },
 
  {
    "id": 6,
      "role" : "Helper",
      "name" : "2A7/Stuka",
      "summary" : "About me: im 23 Years Old and In college for aerospace engineering, my family is native to germany so some words i may not know in english, it is also why my grammer is bad.        Im In the Air force Reserves and i used to be a weapons tester For the air force, I am also  a investor In Military Companies(currently Rheinmetall, general Dynamics and Lockheed Martin, i also Live On A lake In maine and grow THC and Sell it using Aquaponics i Also Play Alot of war thunder and i am a Extreme history buff for tanks",
      "tweet" : "https://twitter.com/Peyton34751632",
      "imageUrl" : "https://cdn.discordapp.com/attachments/845021960400666654/845335965341843536/fzseql7g41r01.jpg",
      "insta" : ""
    },
  ]



// ==========
//fetch launches
setInterval(function(){
   ;(async () => {
 var url = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=30&hide_recent_previous=true&mode=detailed&format=json';
    await fetch(url)
    .then(res => res.json())
    .then(json => {
   store.del('launch_list');
   store.union('launch_list', json);
        console.log('fetched launch')
      });
      })()

},6 * 60000);

//  ======= 
//fetch events
setInterval(function(){
   ;(async () => {
  
var url = 'https://ll.thespacedevs.com/2.0.0/event/upcoming/?limit=30';
      fetch(url)
    .then(res => res.json())
    .then(json => {
store.del('events_list');
store.union('events_list', json);
        console.log('fetched events')
      });
      })()

},30 * 60000);



// launch events
app.get("/api/launches/all", (req, res, next) => {
 const launches = store.get('launch_list')
   res.send(launches)
  console.log('Requested')
});

//space events
app.get("/api/events/all", (req, res, next) => {
 const space_events = store.get('events_list')
   res.send(space_events)
  console.log('Requested')
});

//beyond staff

app.get("/api/staff",(req, res, next) => {
  res.send(staff);
  console.log('Requested')
});

  //======= SOCILA MEDIA ======== //
  
  setInterval(function() {
    
    var url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=1';
        fetch(url) 
          .then(response => response.json())
          .then(data => {
            data.forEach((article) => {
              
              var title = article.title;
              var summary = article.summary;
              var url = article.url;
              
              console.log('Api out title:' + title)
              
              
              var news_title = db.get('news_title'); // -> title
              var db_title = news_title;
              console.log('DB title: ' + db_title)
              
              if (title === db_title ) { console.log('Its same!') }
              
              else {
                console.log('Thats the one!!')
                
                db.delete('news_title');
                db.set('news_title', title)
                
                var text = title + ' | ' + summary;
                
                const the_actual_txt = title + ' | ' + 'Read more: ' + url;
  
                ;(async () => {
     
       // ======= TWITTER ======= //
       
       twitterclient.post('statuses/update', { status: the_actual_txt }).then(result => {
         console.log("Tweet posted")
}).catch(console.error);
            
              
           
                })()
              }
              
            })
          })
          .catch(error => {
            console.log(error);
        })
  
    },  300 * 1000); // checks time every 5 minutes

  
 

    app.get("/api/launches/:slug", (req, res, next) => {
      const launches = store.get('launch_list')
    
      const launched = launches[0].results.find(
        (obj) => obj.slug === req.params.slug);
      
        res.send(launched)
       console.log('Requested')
     });

     
//============
// LISTENER 


const listener = app.listen(8080, () => {
  console.log("API is listening on port 8080" );
});

