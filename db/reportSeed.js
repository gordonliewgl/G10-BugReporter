const mongoose = require('mongoose');
const BugReport = require('../models/bugReportModel.js');

mongoose.connect('mongodb://localhost:27017/bugReportDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("MongoDB Connection open!")
})
.catch(err => {
    console.log("ERROR! Failed to connect to MongoDB!")
    console.log(err)
});

BugReport.BugReport.insertMany([
    {
        "bugID":"BR0001",
        "bugDescription":"She can live her life however she wants as long as she listens to what I have to say. Three years later, the coffin was still full of Jello. Malls are great places to shop; I can find everything I need under one roof. He always wore his sunglasses at night. Her hair was windswept as she rode in the black convertible.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-07-01T09:12:00.000Z",
        "bugLastBumpDate":"2020-07-12T15:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-07-01T16:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0002",
        "bugDescription":"The delicious aroma from the kitchen was ruined by cigarette smoke. While on the first date he accidentally hit his head on the beam. He was so preoccupied with whether or not he could that he failed to stop to consider if he should. I purchased a baby clown from the Russian terrorist black market. He drank life before spitting it out.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-07-02T09:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T15:45:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-07-15T16:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0003",
        "bugDescription":"The complicated school homework left the parents trying to help their kids quite confused. The thick foliage and intertwined vines made the hike nearly impossible. Malls are great places to shop; I can find everything I need under one roof. She only paints with bold colors; she does not like pastels. She says she has the ability to hear the soundtrack of your life.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-03T18:11:00.000Z",
        "bugLastBumpDate":"2020-07-10T19:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-07-05T15:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0004",
        "bugDescription":"She folded her handkerchief neatly.No matter how beautiful the sunset, it saddened her knowing she was one day older.They're playing the piano while flying in the plane.The newly planted trees were held up by wooden frames in hopes they could survive the next storm.The thick foliage and intertwined vines made the hike nearly impossible.The snow-covered path was no help in finding his way out of the back-country.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0005",
        "bugDescription":"They say that dogs are man's best friend, but this cat was setting out to sabotage that theory. The view from the lighthouse excited even the most seasoned traveler. It had been sixteen days since the zombies first attacked. The book is in front of the table. She used her own hair in the soup to give it more flavor. Random words in front of other random words create a random sentence.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-10T17:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0006",
        "bugDescription":"Joe made the sugar cookies; Susan decorated them. David proudly graduated from high school top of his class at age 97. It took him a month to finish the meal. The Guinea fowl flies through the air with all the grace of a turtle. Even with the snow falling outside, she felt it appropriate to wear her bikini. Three years later, the coffin was still full of Jello.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-15T10:11:00.000Z",
        "bugLastBumpDate":"2020-08-10T20:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0007",
        "bugDescription":"He colored deep space a soft yellow. The teens wondered what was kept in the red shed on the far edge of the school grounds. The newly planted trees were held up by wooden frames in hopes they could survive the next storm. He would only survive if he kept the fire going and he could hear thunder in the distance. The Japanese yen for commerce is still well-known. I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-07-09T15:00:00.000Z",
        "bugLastBumpDate":"2020-07-19T23:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0008",
        "bugDescription":"The minute she landed she understood the reason this was a fly-over state. The murder hornet was disappointed by the preconceived ideas people had of him. The thick foliage and intertwined vines made the hike nearly impossible. Jason lived his life by the motto, Anything worth doing is worth doing poorly. They were excited to see their first sloth. The Great Dane looked more like a horse than a dog.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-08-10T23:55:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0009",
        "bugDescription":"The best key lime pie is still up for debate. She had that tint of craziness in her soul that made her believe she could actually make a difference. Jeanne wished she has chosen the red button. It took him a while to realize that everything he decided not to change, he was actually choosing. While on the first date he accidentally hit his head on the beam. As he looked out the window, he saw a clown walk by.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-10T10:15:00.000Z",
        "bugLastBumpDate":"2020-09-19T20:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-09-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0010",
        "bugDescription":"My Mum tries to be cool by saying that she likes all the same things that I do. It took him a while to realize that everything he decided not to change, he was actually choosing. It is not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital. Every manager should be able to recite at least ten nursery rhymes backward. This book is sure to liquefy your brain. ",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-07-01T16:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T19:15:00.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-08-17T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0011",
        "bugDescription":"His thought process was on so many levels that he gave himself a phobia of heights. There are not enough towels in the world to stop the sewage flowing from his mouth. All they could see was the blue water surrounding their sailboat. The beauty of the sunset was obscured by the industrial cranes. Never underestimate the willingness of the greedy to throw you under the bus. We need to rent a room for our party.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-08-10T10:10:00.000Z",
        "bugLastBumpDate":"2020-09-09T08:14:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-08-10T10:10:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0012",
        "bugDescription":"I liked their first two albums but changed my mind after that charity gig. The ants enjoyed the barbecue more than the family. Seek success, but always be prepared for random cats. It caught him off guard that space smelled of seared steak. You realize you are not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital. As time wore on, simple dog commands turned into full paragraphs explaining why the dog couldn’t do something.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-07-19T15:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-07-10T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0013",
        "bugDescription":"Three generations with six decades of life experience. They're playing the piano while flying in the plane. It was the best sandcastle he had ever seen. The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup. They improved dramatically once the lead singer left. She always speaks to him in a loud voice.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-08-19T16:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-08-13T13:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0014",
        "bugDescription":"This book is sure to liquefy your brain. He was sure the Devil created red sparkly glitter. He kept telling himself that one day it would all somehow make sense. Plans for this weekend include turning wine into water. My dentist tells me that chewing bricks is very bad for your teeth.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-09-19T15:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-09-14T08:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0015",
        "bugDescription":"They say that dogs are man's best friend, but this cat was setting out to sabotage that theory. There were three sphered rocks congregating in a cubed room. It was at that moment that he learned there are certain parts of the body that you should never Nair. The old apple revels in its authority. She saw the brake lights, but not in time.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-08-15T17:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-07-14T16:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0016",
        "bugDescription":"He was the type of guy who liked Christmas lights on his house in the middle of July. While on the first date he accidentally hit his head on the beam. 8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head. Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair. You'll see the rainbow bridge after it rains cats and dogs. ",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-10T18:10:00.000Z",
        "bugLastBumpDate":"2020-10-19T17:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-09-23T14:30:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0017",
        "bugDescription":"Red is greener than purple, for sure. The ants enjoyed the barbecue more than the family. He is good at eating pickles and telling women about his emotional problems. He liked to play with words in the bathtub. She moved forward only because she trusted that the ending she now was going through must be followed by a new beginning.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-01T16:10:00.000Z",
        "bugLastBumpDate":"2020-08-19T22:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-08-14T15:05:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0018",
        "bugDescription":"Sixty-Four comes asking for bread. She always speaks to him in a loud voice. She wrote him a long letter, but he didn't read it. When I cook spaghetti, I like to boil it a few minutes past al dente so the noodles are super slippery. The small white buoys marked the location of hundreds of crab pots.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0019",
        "bugDescription":"I would be delighted if the sea were full of cucumber juice. The lake is a long way from here. She is never happy until she finds something to be unhappy about; then, she is overjoyed. Don't put peanut butter on the dog's nose. We should play with legos at camp.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2020-05-10T12:10:00.000Z",
        "bugLastBumpDate":"2020-07-19T20:17:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-06-14T10:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0020",
        "bugDescription":"Behind the window was a reflection that only instilled fear. He waited for the stop sign to turn to a go sign. Abstraction is often one floor above you. I am happy to take your donation; any amount will be greatly appreciated. Flying fish few by the space station.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-20T09:10:00.000Z",
        "bugLastBumpDate":"2020-09-10T15:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-08-29T20:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0021",
        "bugDescription":"Excitement replaced fear until the final moment. As the rental car rolled to a stop on the dark road, her fear increased by the moment. He liked to play with words in the bathtub. Just go ahead and press that button. I love bacon, beer, birds, and baboons.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-07-05T12:10:00.000Z",
        "bugLastBumpDate":"2020-08-26T14:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-08-06T15:07:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0022",
        "bugDescription":"Lucifer was surprised at the amount of life at Death Valley. When I was little I had a car door slammed shut on my hand and I still remember it quite vividly. On a scale from one to ten, what's your favorite flavor of random grammar? Malls are great places to shop; I can find everything I need under one roof. Standing on one's head at job interviews forms a lasting impression.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-01T13:10:00.000Z",
        "bugLastBumpDate":"2020-10-01T17:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-09-14T17:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0023",
        "bugDescription":"He learned the important lesson that a picnic at the beach on a windy day is a bad idea. The team members were hard to tell apart since they all wore their hair in a ponytail. Love is not like pizza. I hear that Nancy is very pretty. I like to leave work after my eight-hour tea-break.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-08T05:06:00.000Z",
        "bugLastBumpDate":"2020-08-15T14:16:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-08-09T16:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0024",
        "bugDescription":"Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about? He kept telling himself that one day it would all somehow make sense. Poison ivy grew through the fence they said was impenetrable. She couldn't decide of the glass was half empty or half full so she drank it. Random words in front of other random words create a random sentence.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-07-15T19:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-07-14T14:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0025",
        "bugDescription":"I often see the time 11:11 or 12:34 on clocks. He took one look at what was under the table and noped the hell out of there. If my calculator had a history, it would be more embarrassing than my browser history. Car safety systems have come a long way, but he was out to prove they could be outsmarted. When motorists sped in and out of traffic, all she could think of was those in need of a transplant.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-10T12:10:00.000Z",
        "bugLastBumpDate":"2020-08-17T21:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-08-04T20:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0026",
        "bugDescription":"The newly planted trees were held up by wooden frames in hopes they could survive the next storm. She let the balloon float up into the air with her hopes and dreams. That was how he came to win $1 million. She only paints with bold colors; she does not like pastels. People who insist on picking their teeth with their elbows are so annoying!",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-05T12:10:00.000Z",
        "bugLastBumpDate":"2020-08-15T20:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-08-12T17:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0027",
        "bugDescription":"This made him feel like an old-style rootbeer float smells. She looked into the mirror and saw another person. She always speaks to him in a loud voice. I want to buy a onesie… but know it won’t suit me. There are few things better in life than a slice of pie.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-07T09:10:00.000Z",
        "bugLastBumpDate":"2020-08-06T21:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-07-24T19:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0028",
        "bugDescription":"He spiked his hair green to support his iguana. The urgent care center was flooded with patients after the news of a new deadly virus was made public. He put heat on the wound to see what would grow. You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah. The efficiency we have at removing trash has made creating trash more acceptable.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-07-10T19:10:00.000Z",
        "bugLastBumpDate":"2020-07-19T08:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-07-12T18:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0029",
        "bugDescription":"The pet shop stocks everything you need to keep your anaconda happy. Pair your designer cowboy hat with scuba gear for a memorable occasion. He hated that he loved what she hated about hate. I just wanted to tell you I could see the love you have for your child by the way you look at her. He was the type of guy who liked Christmas lights on his house in the middle of July.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-07-19T10:15:30.000Z",
        "bugLastBumpDate":"2020-07-29T20:12:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-07-24T23:35:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0030",
        "bugDescription":"Lightning Paradise was the local hangout joint where the group usually ended up spending the night. Excitement replaced fear until the final moment. Charles ate the french fries knowing they would be his last meal. Nobody questions who built the pyramids in Mexico. He walked into the basement with the horror movie from the night before playing in his head. ",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-07-18T17:10:00.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-07-13T16:15:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0031",
        "bugDescription":"Today arrived with a crash of my car through the garage door. He picked up trash in his spare time to dump in his neighbor's yard. The beauty of the sunset was obscured by the industrial cranes. The rain pelted the windshield as the darkness engulfed us. Warm beer on a cold day isn't my idea of fun.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2020-07-11T17:10:00.000Z",
        "bugLastBumpDate":"2020-07-25T22:55:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-07-18T19:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0032",
        "bugDescription":"He enjoys practicing his ballet in the bathroom. She only paints with bold colors; she does not like pastels. She always speaks to him in a loud voice. The father died during childbirth. Nobody questions who built the pyramids in Mexico.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-07-03T15:09:30.000Z",
        "bugLastBumpDate":"2020-07-19T23:19:40.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-07-09T10:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0033",
        "bugDescription":"Fluffy pink unicorns are a popular status symbol among macho men. They improved dramatically once the lead singer left. The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along. Her scream silenced the rowdy teenagers. The memory we used to share is no longer coherent.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-07-12T15:10:00.000Z",
        "bugLastBumpDate":"2020-07-15T21:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-07-13T09:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0034",
        "bugDescription":"Random words in front of other random words create a random sentence. She is never happy until she finds something to be unhappy about; then, she is overjoyed. Charles ate the french fries knowing they would be his last meal. The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along. The gruff old man sat in the back of the bait shop grumbling to himself as he scooped out a handful of worms.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-10T13:10:00.000Z",
        "bugLastBumpDate":"2020-07-15T21:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-07-11T08:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0035",
        "bugDescription":"Last Friday I saw a spotted striped blue worm shake hands with a legless lizard. It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment. She cried diamonds. The book is in front of the table. I thought red would have felt warmer in summer but I didn't think about the equator.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-10T15:10:00.000Z",
        "bugLastBumpDate":"2020-07-13T12:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-07-10T15:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0036",
        "bugDescription":"He wasn't bitter that she had moved on but from the radish. She was too busy always talking about what she wanted to do to actually do any of it. He would only survive if he kept the fire going and he could hear thunder in the distance. It took him a while to realize that everything he decided not to change, he was actually choosing. He enjoys practicing his ballet in the bathroom.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-07-02T15:10:00.000Z",
        "bugLastBumpDate":"2020-07-11T17:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-07-03T21:19:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0037",
        "bugDescription":"Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn’t and they don’t recommend anyone else do it either. The tattered work gloves speak of the many hours of hard labor he endured throughout his life. The mysterious diary records the voice. It was her first experience training a rainbow unicorn. I ate a sock because people on the Internet told me to.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-07-12T14:17:00.000Z",
        "bugLastBumpDate":"2020-07-16T18:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-07-12T18:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0038",
        "bugDescription":"She only paints with bold colors; she does not like pastels. The doll spun around in circles in hopes of coming alive. Erin accidentally created a new universe. The newly planted trees were held up by wooden frames in hopes they could survive the next storm. Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-07-10T10:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:45:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-07-25T23:55:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0039",
        "bugDescription":"Before he moved to the inner city, he had always believed that security complexes were psychological. Whenever he saw a red flag warning at the beach he grabbed his surfboard. I liked their first two albums but changed my mind after that charity gig. There can never be too many cherries on an ice cream sundae. Nobody loves a pig wearing lipstick.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-07-11T05:12:00.000Z",
        "bugLastBumpDate":"2020-07-19T21:55:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-07-14T05:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0040",
        "bugDescription":"He colored deep space a soft yellow. People who insist on picking their teeth with their elbows are so annoying! She opened up her third bottle of wine of the night. My Mum tries to be cool by saying that she likes all the same things that I do. Lets all be unique together until we realise we are all the same.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-10T12:10:00.000Z",
        "bugLastBumpDate":"2020-08-13T23:00:00.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-08-11T05:35:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0041",
        "bugDescription":"Peanuts don't grow on trees, but cashews do. I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was. He drank life before spitting it out. It didn't make sense unless you had the power to eat colors. Her scream silenced the rowdy teenagers. ",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-14T05:25:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-08-17T20:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0042",
        "bugDescription":"That was how he came to win $1 million. When I cook spaghetti, I like to boil it a few minutes past al dente so the noodles are super slippery. You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah. He put heat on the wound to see what would grow. I want to buy a onesie… but know it won’t suit me.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-02T09:15:30.000Z",
        "bugLastBumpDate":"2020-08-25T20:05:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-08-05T16:35:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0043",
        "bugDescription":"Warm beer on a cold day isn't my idea of fun. Some bathing suits just shouldn’t be worn by some people. Nudist colonies shun fig-leaf couture. Courage and stupidity were all he had. Nobody has encountered an explosive daisy and lived to tell the tale.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-12T22:05:30.000Z",
        "bugLastBumpDate":"2020-08-16T21:55:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-08-13T09:10:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0044",
        "bugDescription":"Malls are great places to shop; I can find everything I need under one roof. As the rental car rolled to a stop on the dark road, her fear increased by the moment. She couldn't decide of the glass was half empty or half full so she drank it. Wisdom is easily acquired when hiding under the bed with a saucepan on your head. It doesn't sound like that will ever be on my travel list.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-10T23:55:30.000Z",
        "bugLastBumpDate":"2020-08-16T16:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-08-11T09:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0045",
        "bugDescription":"He enjoys practicing his ballet in the bathroom. On a scale from one to ten, what's your favorite flavor of random grammar? He embraced his new life as an eggplant. It's difficult to understand the lengths he'd go to remain short. Please tell me you don't work in a morgue.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T08:15:30.000Z",
        "bugLastBumpDate":"2020-08-29T23:25:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-08-25T18:55:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0046",
        "bugDescription":"The hand sanitizer was actually clear glue. The river stole the gods. For oil spots on the floor, nothing beats parking a motorbike in the lounge. Fluffy pink unicorns are a popular status symbol among macho men. I am my aunt's sister's daughter.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-13T19:15:30.000Z",
        "bugLastBumpDate":"2020-09-20T23:25:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-09-18T14:35:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0047",
        "bugDescription":"He told us a very exciting adventure story. The sky is clear; the stars are twinkling. She always had an interesting perspective on why the world must be flat. Facing his greatest fear, he ate his first marshmallow. After fighting off the alligator, Brian still had to face the anaconda.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-09-16T16:55:30.000Z",
        "bugLastBumpDate":"2020-09-25T19:15:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-09-20T06:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0048",
        "bugDescription":"The tour bus was packed with teenage girls heading toward their next adventure. She had a difficult time owning up to her own crazy self. He didn't heed the warning and it had turned out surprisingly well. She wrote him a long letter, but he didn't read it. It's a skateboarding penguin with a sunhat!",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-20T10:25:30.000Z",
        "bugLastBumpDate":"2020-09-28T14:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-09-21T06:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0049",
        "bugDescription":"Chocolate covered crickets were his favorite snack. The fish listened intently to what the frogs had to say. Iron pyrite is the most foolish of all minerals. Patricia loves the sound of nails strongly pressed against the chalkboard. He found a leprechaun in his walnut shell.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-09-01T15:15:30.000Z",
        "bugLastBumpDate":"2020-09-10T16:25:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-09-04T13:55:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0050",
        "bugDescription":"I am my aunt's sister's daughter. The secret ingredient to his wonderful life was crime. He didn't understand why the bird wanted to ride the bicycle. She was the type of girl who wanted to live in a pink house. The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-09-19T15:15:30.000Z",
        "bugLastBumpDate":"2020-09-29T18:45:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-089-20T11:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0051",
        "bugDescription":"He learned the important lesson that a picnic at the beach on a windy day is a bad idea. Eating eggs on Thursday for choir practice was recommended. She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages. Yeah, I think it's a good environment for learning English. It was a really good Monday for being a Saturday.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2020-09-03T07:55:30.000Z",
        "bugLastBumpDate":"2020-09-14T10:25:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-09-07T13:05:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0052",
        "bugDescription":"This book is sure to liquefy your brain. She wanted a pet platypus but ended up getting a duck and a ferret instead. He wondered why at 18 he was old enough to go to war, but not old enough to buy cigarettes. You can't compare apples and oranges, but what about bananas and plantains? He picked up trash in his spare time to dump in his neighbor's yard.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-14T18:25:30.000Z",
        "bugLastBumpDate":"2020-09-18T11:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-09-15T16:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0053",
        "bugDescription":"The thunderous roar of the jet overhead confirmed her worst fears. Tom got a small piece of pie. Karen realized the only way she was getting into heaven was to cheat. A dead duck doesn't fly backward. He had accidentally hacked into his company's server.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-17T05:45:30.000Z",
        "bugLastBumpDate":"2020-09-22T08:19:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-09-19T06:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0054",
        "bugDescription":"They were excited to see their first sloth. Art doesn't have to be intentional. She traveled because it cost the same as therapy and was a lot more enjoyable. She wondered what his eyes were saying beneath his mirrored sunglasses. He loved eating his bananas in hot dog buns.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2020-09-13T08:25:30.000Z",
        "bugLastBumpDate":"2020-09-21T16:24:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-09-14T04:55:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0055",
        "bugDescription":"Iguanas were falling out of the trees. Iron pyrite is the most foolish of all minerals. Malls are great places to shop; I can find everything I need under one roof. Two seats were vacant. Yeah, I think it's a good environment for learning English.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-09-13T18:25:30.000Z",
        "bugLastBumpDate":"2020-09-25T18:24:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-09-16T14:55:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0056",
        "bugDescription":"She wore green lipstick like a fashion icon. It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball. I want more detailed information. Now I need to ponder my existence and ask myself if I'm truly real. As the rental car rolled to a stop on the dark road, her fear increased by the moment.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-04T09:55:30.000Z",
        "bugLastBumpDate":"2020-09-26T12:25:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-09-16T17:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0057",
        "bugDescription":"As the rental car rolled to a stop on the dark road, her fear increased by the moment. He spiked his hair green to support his iguana. In the end, he realized he could see sound and hear words. It doesn't sound like that will ever be on my travel list. Of course, she loves her pink bunny slippers.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-16T14:35:30.000Z",
        "bugLastBumpDate":"2020-09-19T07:55:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-09-17T09:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0058",
        "bugDescription":"8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head. The virus had powers none of us knew existed. She works two jobs to make ends meet; at least, that was her reason for not having time to join us. The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks. She is never happy until she finds something to be unhappy about; then, she is overjoyed. ",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-10T12:35:30.000Z",
        "bugLastBumpDate":"2020-09-17T15:35:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-09-11T12:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0059",
        "bugDescription":"It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. He spiked his hair green to support his iguana. The waitress was not amused when he ordered green eggs and ham. The knives were out and she was sharpening hers. The pigs were insulted that they were named hamburgers.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-09-12T13:25:30.000Z",
        "bugLastBumpDate":"2020-09-27T17:35:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-09-20T19:05:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0060",
        "bugDescription":"She saw the brake lights, but not in time. He decided to fake his disappearance to avoid jail. The trick to getting kids to eat anything is to put catchup on it. Everyone says they love nature until they realize how dangerous she can be. You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-09T07:25:30.000Z",
        "bugLastBumpDate":"2020-09-15T12:45:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-09-09T07:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0061",
        "bugDescription":"He learned the important lesson that a picnic at the beach on a windy day is a bad idea. Stop waiting for exceptional things to just happen. My Mum tries to be cool by saying that she likes all the same things that I do. Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair. They were excited to see their first sloth.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-11T14:23:30.000Z",
        "bugLastBumpDate":"2020-09-21T15:42:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-09-13T18:22:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0062",
        "bugDescription":"I met an interesting turtle while the song on the radio blasted away. It dawned on her that others could make her happier, but only she could make herself happy. The best key lime pie is still up for debate. The door swung open to reveal pink giraffes and red elephants. He strives to keep the best lawn in the neighborhood.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-02T05:35:30.000Z",
        "bugLastBumpDate":"2020-09-20T16:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-09-04T16:02:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0063",
        "bugDescription":"She cried diamonds. The stranger officiates the meal. I currently have 4 windows open up… and I don’t know why. The best key lime pie is still up for debate. The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"4",
        "bugDateReported":"2020-09-04T08:35:30.000Z",
        "bugLastBumpDate":"2020-09-24T09:25:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-09-05T17:18:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0064",
        "bugDescription":"The secret ingredient to his wonderful life was crime. He was 100% into fasting with her until he understood that meant he couldn't eat. Mary plays the piano. It would have been a better night if the guys next to us weren't in the splash zone. Shakespeare was a famous 17th-century diesel mechanic.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-09-23T14:12:30.000Z",
        "bugLastBumpDate":"2020-09-29T16:23:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-09-24T19:46:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0065",
        "bugDescription":"The lyrics of the song sounded like fingernails on a chalkboard. A kangaroo is really just a rabbit on steroids. He watched the dancing piglets with panda bear tummies in the swimming pool. The tart lemonade quenched her thirst, but not her longing. He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-09-12T12:16:30.000Z",
        "bugLastBumpDate":"2020-09-18T15:30:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-09-15T15:22:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0066",
        "bugDescription":"The light that burns twice as bright burns half as long. A dead duck doesn't fly backward. Patricia loves the sound of nails strongly pressed against the chalkboard. Three years later, the coffin was still full of Jello. The lyrics of the song sounded like fingernails on a chalkboard.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-09-15T17:13:30.000Z",
        "bugLastBumpDate":"2020-09-19T21:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-09-17T14:12:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0067",
        "bugDescription":"She learned that water bottles are no longer just to hold liquid, but they're also status symbols. People generally approve of dogs eating cat food but not cats eating dog food. It was at that moment that he learned there are certain parts of the body that you should never Nair. The door slammed on the watermelon. He would only survive if he kept the fire going and he could hear thunder in the distance.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-09-16T15:45:30.000Z",
        "bugLastBumpDate":"2020-09-23T06:25:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-09-18T19:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0068",
        "bugDescription":"All they could see was the blue water surrounding their sailboat. Your girlfriend bought your favorite cookie crisp cereal but forgot to get milk. It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball. The shark-infested South Pine channel was the only way in or out. Improve your goldfish's physical fitness by getting him a bicycle.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-12T15:35:30.000Z",
        "bugLastBumpDate":"2020-09-15T11:25:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-09-13T02:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0069",
        "bugDescription":"You're unsure whether or not to trust him, but very thankful that you wore a turtle neck. The knives were out and she was sharpening hers. Everyone was curious about the large white blimp that appeared overnight. David subscribes to the stuff your tent into the bag strategy over nicely folding it. Patricia loves the sound of nails strongly pressed against the chalkboard.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-05T09:15:30.000Z",
        "bugLastBumpDate":"2020-09-12T06:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-09-06T14:12:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0070",
        "bugDescription":"He had a hidden stash underneath the floorboards in the back room of the house. He had a vague sense that trees gave birth to dinosaurs. It didn't take long for Gary to detect the robbers were amateurs. I'm confused: when people ask me what's up, and I point, they groan. He kept telling himself that one day it would all somehow make sense.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-12T06:12:30.000Z",
        "bugLastBumpDate":"2020-09-14T18:09:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-09-12T06:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0071",
        "bugDescription":"The memory we used to share is no longer coherent. She had a habit of taking showers in lemonade. It doesn't sound like that will ever be on my travel list. Having no hair made him look even hairier. A kangaroo is really just a rabbit on steroids.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-08T14:25:30.000Z",
        "bugLastBumpDate":"2020-09-19T13:15:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-09-10T09:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0072",
        "bugDescription":"With a single flip of the coin, his life changed forever. My dentist tells me that chewing bricks is very bad for your teeth. They were excited to see their first sloth. They wandered into a strange Tiki bar on the edge of the small beach town. The sky is clear; the stars are twinkling.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-09-24T17:25:30.000Z",
        "bugLastBumpDate":"2020-09-29T18:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-09-24T20:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0073",
        "bugDescription":"The blinking lights of the antenna tower came into focus just as I heard a loud snap. It was the scarcity that fueled his creativity. They wandered into a strange Tiki bar on the edge of the small beach town. It was a slippery slope and he was willing to slide all the way to the deepest depths. Nudist colonies shun fig-leaf couture.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-09-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0074",
        "bugDescription":"He had unknowingly taken up sleepwalking as a nighttime hobby. She did her best to help him. She wore green lipstick like a fashion icon. I like to leave work after my eight-hour tea-break. Today arrived with a crash of my car through the garage door.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-16T13:12:30.000Z",
        "bugLastBumpDate":"2020-09-25T16:19:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-09-16T18:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0075",
        "bugDescription":"She had that tint of craziness in her soul that made her believe she could actually make a difference. The toy brought back fond memories of being lost in the rain forest. A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt. Going from child, to childish, to childlike is only a matter of time. While on the first date he accidentally hit his head on the beam.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-20T10:10:30.000Z",
        "bugLastBumpDate":"2020-09-26T19:18:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-09-21T10:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0076",
        "bugDescription":"The random sentence generator generated a random sentence about a random sentence. The tortoise jumped into the lake with dreams of becoming a sea turtle. She thought there'd be sufficient time if she hid her watch. A kangaroo is really just a rabbit on steroids. The lake is a long way from here.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-16T15:25:30.000Z",
        "bugLastBumpDate":"2020-09-21T17:35:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-09-16T19:32:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0077",
        "bugDescription":"The pet shop stocks everything you need to keep your anaconda happy. The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder. She wore green lipstick like a fashion icon. She had some amazing news to share but nobody to share it with. Poison ivy grew through the fence they said was impenetrable.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"4",
        "bugDateReported":"2020-09-15T19:25:30.000Z",
        "bugLastBumpDate":"2020-09-23T15:35:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-09-18T12:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0078",
        "bugDescription":"She looked into the mirror and saw another person. The pigs were insulted that they were named hamburgers. If eating three-egg omelets causes weight-gain, budgie eggs are a good substitute. Smoky the Bear secretly started the fires. As he entered the church he could hear the soft voice of someone whispering into a cell phone.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-09-23T16:10:30.000Z",
        "bugLastBumpDate":"2020-09-29T18:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-09-23T18:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0079",
        "bugDescription":"Sixty-Four comes asking for bread. The toy brought back fond memories of being lost in the rain forest. It must be five o'clock somewhere. They did nothing as the raccoon attacked the lady’s bag of food. There's a reason that roses have thorns.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-10-01T18:25:30.000Z",
        "bugLastBumpDate":"2020-10-05T09:45:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-10-02T09:05:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0080",
        "bugDescription":"A quiet house is nice until you are ordered to stay in it for months. Let me help you with your baggage. She looked into the mirror and saw another person. Today I dressed my unicorn in preparation for the race. He wore the surgical mask in public not to keep from catching a virus, but to keep people away from him.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2020-10-03T19:35:30.000Z",
        "bugLastBumpDate":"2020-10-08T08:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-10-06T08:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0081",
        "bugDescription":"Red is greener than purple, for sure. Warm beer on a cold day isn't my idea of fun. He picked up trash in his spare time to dump in his neighbor's yard. The mysterious diary records the voice. She works two jobs to make ends meet; at least, that was her reason for not having time to join us.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-10-05T19:12:30.000Z",
        "bugLastBumpDate":"2020-10-08T09:04:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-10-05T19:18:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0082",
        "bugDescription":"He created a pig burger out of beef. Be careful with that butter knife. I am never at home on Sundays. It would have been a better night if the guys next to us weren't in the splash zone. Pink horses galloped across the sea.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-10-05T19:12:30.000Z",
        "bugLastBumpDate":"2020-10-10T10:55:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-10-05T19:17:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0083",
        "bugDescription":"Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world. The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup. The shark-infested South Pine channel was the only way in or out. Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about? She always speaks to him in a loud voice.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-06T10:35:30.000Z",
        "bugLastBumpDate":"2020-10-15T19:25:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-10-07T09:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0084",
        "bugDescription":"I'd rather be a bird than a fish. The lyrics of the song sounded like fingernails on a chalkboard. The snow-covered path was no help in finding his way out of the back-country. He decided to fake his disappearance to avoid jail. The efficiency we have at removing trash has made creating trash more acceptable.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-10-07T09:45:30.000Z",
        "bugLastBumpDate":"2020-10-18T18:25:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-10-07T13:25:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0085",
        "bugDescription":"We have never been to Asia, nor have we visited Africa. She tilted her head back and let whip cream stream into her mouth while taking a bath. Before he moved to the inner city, he had always believed that security complexes were psychological. All they could see was the blue water surrounding their sailboat. If my calculator had a history, it would be more embarrassing than my browser history.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-10-09T16:25:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:55:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjbvsdfsfreofiaodjisf",
                "commentDate":"2020-10-10T09:04:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0086",
        "bugDescription":"Writing a list of random sentences is harder than I initially thought it would be. In the end, he realized he could see sound and hear words. It must be five o'clock somewhere. I'm confused: when people ask me what's up, and I point, they groan. The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-09T18:55:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:55:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodsjofiawjdasgargaeofiaodjisf",
                "commentDate":"2020-10-12T09:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0087",
        "bugDescription":"The teens wondered what was kept in the red shed on the far edge of the school grounds. They throw cabbage that turns your brain into emotional baggage. A song can make or ruin a person’s day if they let it get to them. He realized there had been several deaths on this road, but his concern rose when he saw the exact number. There aren't enough towels in the world to stop the sewage flowing from his mouth.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-10T08:35:30.000Z",
        "bugLastBumpDate":"2020-10-17T20:10:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodsjofiawgasdfgargjeofiaodjisf",
                "commentDate":"2020-10-12T14:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0089",
        "bugDescription":"This is the last random sentence I will be writing and I am going to stop mid-sent She is never happy until she finds something to be unhappy about; then, she is overjoyed. Fluffy pink unicorns are a popular status symbol among macho men. The group quickly understood that toxic waste was the most effective barrier to use against the zombies. She couldn't decide of the glass was half empty or half full so she drank it.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-10T13:45:30.000Z",
        "bugLastBumpDate":"2020-10-17T16:35:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeadsgasgarofiaodjisf",
                "commentDate":"2020-10-10T17:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0089",
        "bugDescription":"He didn't understand why the bird wanted to ride the bicycle. Not all people who wander are lost. He kept telling himself that one day it would all somehow make sense. Hang on, my kittens are scratching at the bathtub and they'll upset by the lack of biscuits. He knew it was going to be a bad day when he saw mountain lions roaming the streets.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2020-10-10T16:25:30.000Z",
        "bugLastBumpDate":"2020-10-17T16:55:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-10-10T18:05:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0090",
        "bugDescription":"She had a habit of taking showers in lemonade. She wore green lipstick like a fashion icon. Of course, she loves her pink bunny slippers. Stop waiting for exceptional things to just happen. We have a lot of rain in June.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-11T08:25:30.000Z",
        "bugLastBumpDate":"2020-10-21T15:05:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-10-14T08:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0091",
        "bugDescription":"Carol drank the blood as if she were a vampire. All you need to do is pick up the pen and begin. Erin accidentally created a new universe. After exploring the abandoned building, he started to believe in ghosts. Honestly, I didn't care much for the first season, so I didn't bother with the second.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-10-11T09:45:30.000Z",
        "bugLastBumpDate":"2020-10-19T16:25:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-10-11T10:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0092",
        "bugDescription":"Nobody questions who built the pyramids in Mexico. Never underestimate the willingness of the greedy to throw you under the bus. Warm beer on a cold day isn't my idea of fun. Two seats were vacant. They called out her name time and again, but were met with nothing but silence.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-10-11T10:25:30.000Z",
        "bugLastBumpDate":"2020-10-18T19:25:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-10-11T11:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0093",
        "bugDescription":"The delicious aroma from the kitchen was ruined by cigarette smoke. It must be five o'clock somewhere. He colored deep space a soft yellow. The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder. I really want to go to work, but I am too sick to drive ",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2020-10-11T11:05:30.000Z",
        "bugLastBumpDate":"2020-10-15T10:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-10-11T12:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0094",
        "bugDescription":"To the surprise of everyone, the Rapture happened yesterday but it didn't quite go as expected. Warm beer on a cold day isn't my idea of fun. He looked behind the door and didn't like what he saw. Tuesdays are free if you bring a gnome costume. He set out for a short walk, but now all he could see were mangroves and water were for miles.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-10-11T11:45:30.000Z",
        "bugLastBumpDate":"2020-10-16T15:45:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-10-11T12:24:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0095",
        "bugDescription":"The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer. A suit of armor provides excellent sun protection on hot days. He wondered if she would appreciate his toenail collection. He is good at eating pickles and telling women about his emotional problems. It dawned on her that others could make her happier, but only she could make herself happy.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-11T13:05:30.000Z",
        "bugLastBumpDate":"2020-10-15T10:25:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofiaagrgadsgrgewjeofiaodjisf",
                "commentDate":"2020-10-14T18:12:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0096",
        "bugDescription":"Excitement replaced fear until the final moment. She finally understood that grief was her love with no place for it to go. Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow. The efficiency we have at removing trash has made creating trash more acceptable. She had some amazing news to share but nobody to share it with.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-11T14:15:30.000Z",
        "bugLastBumpDate":"2020-10-19T10:05:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"BobGYA315",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeadsfgargaofiaodjisf",
                "commentDate":"2020-10-18T09:45:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0097",
        "bugDescription":"The blinking lights of the antenna tower came into focus just as I heard a loud snap. She had that tint of craziness in her soul that made her believe she could actually make a difference. He colored deep space a soft yellow. There are few things better in life than a slice of pie. It was at that moment that he learned there are certain parts of the body that you should never Nair.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2020-10-15T09:25:30.000Z",
        "bugLastBumpDate":"2020-10-21T16:45:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawjdgadarreofiaodjisf",
                "commentDate":"2020-10-15T10:05:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0098",
        "bugDescription":"Erin accidentally created a new universe. It's difficult to understand the lengths he'd go to remain short. The lyrics of the song sounded like fingernails on a chalkboard. They called out her name time and again, but were met with nothing but silence. A dead duck doesn't fly backward.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-10-15T10:25:30.000Z",
        "bugLastBumpDate":"2020-10-20T15:10:30.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"MiaGat121",
                "role":"Bug Reporter",
                "comment":"aoifjodsjofiawdfgsdfgerjeofiaodjisf",
                "commentDate":"2020-10-15T17:05:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0099",
        "bugDescription":"He put heat on the wound to see what would grow. Mary plays the piano. The fact that there's a stairway to heaven and a highway to hell explains life well. Karen realized the only way she was getting into heaven was to cheat. We should play with legos at camp.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-10-20T11:35:30.000Z",
        "bugLastBumpDate":"2020-10-23T19:45:30.000Z",
        "bugAssignedTo":"LilyDPM529",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsdsfasdfsafjofiawjeofiaodjisf",
                "commentDate":"2020-10-20T13:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0100",
        "bugDescription":"The golden retriever loved the fireworks each Fourth of July. As time wore on, simple dog commands turned into full paragraphs explaining why the dog couldn’t do something. She had convinced her kids that any mushroom found on the ground would kill them if they touched it. Two seats were vacant. The irony of the situation wasn't lost on anyone in the room.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-10-20T17:45:30.000Z",
        "bugLastBumpDate":"2020-10-27T16:05:30.000Z",
        "bugAssignedTo":"RonaldCAH625",
        "bugComments":[
            {
                "name":"SumYT09",
                "role":"Triager",
                "comment":"aoifjodsjofrthrthrhiawjeofiaodjisf",
                "commentDate":"2020-10-20T18:35:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0101",
        "bugDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed bibendum turpis. Maecenas a elementum lorem, sed laoreet orci. Pellentesque eleifend aliquet lorem. Curabitur quis gravida nibh. Sed pulvinar elit in nunc cursus, ut egestas felis imperdiet. Sed vel diam quis est posuere dapibus et id ante. Pellentesque sollicitudin tincidunt ipsum nec pretium. Nullam sit amet ultricies ligula. Suspendisse a egestas mi. Integer mi lectus, aliquam vel nisi eu, consectetur commodo neque. In tempor ornare congue. Donec laoreet odio non purus convallis molestie. Mauris ultricies ante sed nisi venenatis vulputate id eget nisi. Praesent eu pharetra orci. Nulla et lorem volutpat arcu finibus accumsan.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0102",
        "bugDescription":"Integer sagittis ipsum eu tristique rutrum. Quisque dignissim tellus mollis erat convallis porttitor. Fusce aliquet bibendum luctus. Suspendisse porttitor, dolor porta dignissim porttitor, nunc turpis vehicula mauris, at interdum nisl ex non metus. Nullam rutrum enim tellus, eu vehicula enim dictum at. Phasellus cursus magna a urna tinc idunt, eu pretium nisi congue. Duis non tristique sapien. Aliquam erat volutpat. Mauris nec tellus iaculis, varius massa non, tincidunt nibh. Cras pretium, quam eu convallis sollicitudin, nibh orci vulputate augue, quis suscipit nulla ligula in metus.", 
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0103",
        "bugDescription":"Mauris viverra leo sit amet faucibus ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt mollis erat blandit scelerisque. Vestibulum a eleifend nisl. Sed sagittis ultricies ex vehicula ultrices. Cras laoreet quam quis porttitor ornare. Fusce congue, tortor vitae accumsan hendrerit, lectus sapien iaculis augue, quis vehicula velit velit et ligula. In pharetra enim ut turpis vulputate, at auctor urna consectetur. Phasellus a volutpat dui, vel cursus arcu. Vestibulum bibendum dui in euismod tincidunt.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0104",
        "bugDescription":"The knives were out and she was sharpening hers.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-09-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0105",
        "bugDescription":"The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-08-20T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-20T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
    
          
        ]
    },
    {
        "bugID":"BR0106",
        "bugDescription":"All she wanted was the answer, but she had no idea how much she would hate it.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-09-17T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0107",
        "bugDescription":"I would have gotten the promotion, but my attendance wasn’t good enough.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2019-10-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0108",
        "bugDescription":"Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-08-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0109",
        "bugDescription":"Greetings from the real universe.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-03-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-20T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },{
        "bugID":"BR0110",
        "bugDescription":"When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2020-04-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"BryanSWH231",
                "role":"Bug Reporter",
                "comment":"dfgfsdgfdfhdfgsdsxdfgdfhedrf",
                "commentDate":"2020-09-14T23:15:30.000Z"
            }
        ]
    },{
        "bugID":"BR0111",
        "bugDescription":"He embraced his new life as an eggplant.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-30T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0112",
        "bugDescription":"Martha came to the conclusion that shake weights are a great gift for any occasion.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0113",
        "bugDescription":"The pigs were insulted that they were named hamburgers.",
        "bugStatus":"In Progress",
        "bugSeverity":"4",
        "bugDateReported":"2019-09-25T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0114",
        "bugDescription":"The Japanese yen for commerce is still well-known.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-07-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0115",
        "bugDescription":"We have young kids who often walk into our room at night for various reasons including clowns in the closet.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2019-09-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0116",
        "bugDescription":"When money was tight, he'd get his lunch money from the local wishing well.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-07-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
           
        ]
    },
    {
        "bugID":"BR0117",
        "bugDescription":"I come from a tribe of head-hunters, so I will never need a shrink.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0118",
        "bugDescription":"She wore green lipstick like a fashion icon.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0119",
        "bugDescription":"The fifty mannequin heads floating in the pool kind of freaked them out.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0120",
        "bugDescription":"You're good at English when you know the difference between a man eating chicken and a man-eating chicken.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"BryanSWH231",
                "role":"Bug Reporter",
                "comment":"aoifjodifoajgoiaejrogjoaeirgjoaejrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0121",
        "bugDescription":"It dawned on her that others could make her happier, but only she could make herself happy.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0122",
        "bugDescription":"Eating eggs on Thursday for choir practice was recommended.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0123",
        "bugDescription":"The fish dreamed of escaping the fishbowl and into the toilet where he saw his friend go.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0124",
        "bugDescription":"People generally approve of dogs eating cat food but not cats eating dog food.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0125",
        "bugDescription":"The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0126",
        "bugDescription":"his seven-layer cake only had six layers.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0127",
        "bugDescription":"I covered my friend in baby oil.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0128",
        "bugDescription":"Today I heard something new and unmemorable.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0129",
        "bugDescription":"The gloves protect my feet from excess work.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-11-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0130",
        "bugDescription":"You'll see the rainbow bridge after it rains cats and dogs.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2020-01-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"aoifjodifoajgoiaejrogjoaeirgjoaejrgdsjofiaodsfughsdfgzxcvdawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0131",
        "bugDescription":"This is the last random sentence I will be writing and I am going to stop mid-sent",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-02-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0132",
        "bugDescription":"When I cook spaghetti, I like to boil it a few minutes past al dente so the noodles are super slippery.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-03-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0133",
        "bugDescription":"Her hair was windswept as she rode in the black convertible.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-04-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-20T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0134",
        "bugDescription":"The beauty of the African sunset disguised the danger lurking nearby.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0135",
        "bugDescription":"Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2019-07-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0136",
        "bugDescription":"Everyone was busy, so I went to the movie alone.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T22:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0137",
        "bugDescription":"Three years later, the coffin was still full of Jello.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-17T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0138",
        "bugDescription":"The snow-covered path was no help in finding his way out of the back-country.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2019-08-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0139",
        "bugDescription":"So long and thanks for the fish.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0140",
        "bugDescription":"His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-07-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"aoifjodilkjhhjklgiolhjoiaejrogjoaeirgjoaejrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0141",
        "bugDescription":"They ran around the corner to find that they had traveled back in time.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-22T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0142",
        "bugDescription":"He was 100% into fasting with her until he understood that meant he couldn't eat.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2020-06-20T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0143",
        "bugDescription":"The gruff old man sat in the back of the bait shop grumbling to himself as he scooped out a handful of worms.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-05-22T23:15:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0144",
        "bugDescription":"Whenever he saw a red flag warning at the beach he grabbed his surfboard.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-20T19:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0145",
        "bugDescription":"Even with the snow falling outside, she felt it appropriate to wear her bikini.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2019-10-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0146",
        "bugDescription":"All you need to do is pick up the pen and begin.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-10-20T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR1047",
        "bugDescription":"Don't step on the broken glass.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2019-09-23T23:20:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0148",
        "bugDescription":"The wake behind the boat told of the past while the open sea for told life in the unknown future.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-06-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0149",
        "bugDescription":"Nothing is as cautiously cuddly as a pet porcupine.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0150",
        "bugDescription":"Had he known what was going to happen, he would have never stepped into the shower.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2019-07-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodifoajgoihjiughrogjoaeirgjoaejrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0151",
        "bugDescription":"As he looked out the window, he saw a clown walk by.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-25T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0152",
        "bugDescription":"There were white out conditions in the town; subsequently, the roads were impassable.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0153",
        "bugDescription":"When motorists sped in and out of traffic, all she could think of was those in need of a transplant.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0154",
        "bugDescription":"Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2019-11-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0155",
        "bugDescription":"You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-10-25T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0156",
        "bugDescription":"It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0157",
        "bugDescription":"The clock within this blog and the clock on my laptop are 1 hour different from each other.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-07-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0158",
        "bugDescription":"Shingle color was not something the couple had ever talked about.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0159",
        "bugDescription":"She wrote him a long letter, but he didn't read it.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2019-09-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0160",
        "bugDescription":"I don’t respect anybody who can’t tell the difference between Pepsi and Coke.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"JaydenBro621",
                "role":"Bug Reporter",
                "comment":"aoifjodifoajgoihjiughrogjoaeirgjoaejrgdsouhgkljbnwjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0161",
        "bugDescription":"He was surprised that his immense laziness was inspirational to others.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2019-07-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0162",
        "bugDescription":"He played the game as if his life depended on it and the truth was that it did.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0163",
        "bugDescription":"They say that dogs are man's best friend, but this cat was setting out to sabotage that theory.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2019-11-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0164",
        "bugDescription":"She used her own hair in the soup to give it more flavor.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-10-22T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0165",
        "bugDescription":"He barked orders at his daughters but they just stared back with amusement.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2019-10-20T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0166",
        "bugDescription":"Greetings from the real universe.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-09-20T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0167",
        "bugDescription":"He had decided to accept his fate of accepting his fate.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-06-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-07-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0168",
        "bugDescription":"The lake is a long way from here.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-10-120T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0169",
        "bugDescription":"The body piercing didn't go exactly as he expected.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0170",
        "bugDescription":"His mind was blown that there was nothing in space except space itself.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            {
                "name":"RonaldCAH625",
                "role":"Developer",
                "comment":"aoifjodifoajgoihjiughojahsvkljbrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0171",
        "bugDescription":"I currently have 4 windows open up… and I don’t know why.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2019-09-29T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0172",
        "bugDescription":"The murder hornet was disappointed by the preconceived ideas people had of him.",
        "bugStatus":"In Progress",
        "bugSeverity":"4",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0173",
        "bugDescription":"He invested some skill points in Charisma and Strength.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },{
        "bugID":"BR0174",
        "bugDescription":"Beach-combing replaced wine tasting as his new obsession.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-01-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0175",
        "bugDescription":"They wandered into a strange Tiki bar on the edge of the small beach town.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0176",
        "bugDescription":"When he encountered maize for the first time, he thought it incredibly corny.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-11-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0177",
        "bugDescription":"She had the gift of being able to paint songs.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-30T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0178",
        "bugDescription":"Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2019-10-22T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0179",
        "bugDescription":"It was always dangerous to drive with him since he insisted the safety cones were a slalom course.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2019-12-19T23:20:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0180",
        "bugDescription":"Car safety systems have come a long way, but he was out to prove they could be outsmarted.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2019-09-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0181",
        "bugDescription":"Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-07-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0182",
        "bugDescription":"25 years later, she still regretted that specific moment.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-06-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0183",
        "bugDescription":"He liked to play with words in the bathtub.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-07-20T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0184",
        "bugDescription":"If I don’t like something, I’ll stay away from it.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-21T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0185",
        "bugDescription":"The book is in front of the table.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2019-12-20T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-22T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0186",
        "bugDescription":"The tears of a clown make my lipstick run, but my shower cap is still intact.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2019-12-21T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-25T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0187",
        "bugDescription":"A dead duck doesn't fly backward.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-12-19T22:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0188",
        "bugDescription":"Green should have smelled more tranquil, but somehow it just tasted rotten.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-11-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0189",
        "bugDescription":"When nobody is around, the trees gossip about the people who have walked under them.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2019-12-25T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0190",
        "bugDescription":"I really want to go to work, but I am too sick to drive.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-21T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0191",
        "bugDescription":"A dead duck doesn't fly backward.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-12-18T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0192",
        "bugDescription":"She couldn't decide of the glass was half empty or half full so she drank it.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2019-10-15T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0193",
        "bugDescription":"She wanted a pet platypus but ended up getting a duck and a ferret instead.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-07-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0194",
        "bugDescription":"He hated that he loved what she hated about hate.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-05-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0195",
        "bugDescription":"When he had to picnic on the beach, he purposely put sand in other people’s food.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0196",
        "bugDescription":"He looked behind the door and didn't like what he saw.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0197",
        "bugDescription":"Now I need to ponder my existence and ask myself if I'm truly real",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2019-12-25T23:16:30.000Z",
        "bugLastBumpDate":"2020-11-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0198",
        "bugDescription":"He took one look at what was under the table and noped the hell out of there.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-12-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-25T22:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0199",
        "bugDescription":"Blue sounded too cold at the time and yet it seemed to work for gin.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2019-12-21T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0200",
        "bugDescription":"I want to buy a onesie… but know it won’t suit me.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-11-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0201",
        "bugDescription":"Grape jelly was leaking out the hole in the roof.",
        "bugStatus":"Fixed",
        "bugSeverity":"1",
        "bugDateReported":"1950-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"aoifjodsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0202",
        "bugDescription":"He loved eating his bananas in hot dog buns.", 
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"1965-08-25T23:15:30.000Z",
        "bugLastBumpDate":"2010-08-19T23:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Laksh",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            },
            {
                "name":"Laksh",
                "role":"Developer",
                "comment":"aoifjodsjofiawjeasdawdawdasdofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0203",
        "bugDescription":"He was an introvert that extroverts seemed to love.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"1965-05-10T23:15:30.000Z",
        "bugLastBumpDate":"2000-08-19T23:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
                "name":"Harsono",
                "role":"Bug Reporter",
                "comment":"aoifjodifoajgoiaejrogjoaeirgjoaejrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0204",
        "bugDescription":"The river stole the gods.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"juykyndrtcf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0205",
        "bugDescription":"Iron pyrite is the most foolish of all minerals.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
                "name":"Harsono",
                "role":"Bug Reporter",
                "comment":"juykyndrtcfkuys",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0206",
        "bugDescription":"She learned that water bottles are no longer just to hold liquid, but they're also status symbols.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"jtydfgnefw",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0207",
        "bugDescription":"He went back to the video to see what had been recorded and was shocked at what he saw.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Edrick",
                "role":"Triager",
                "comment":"ewdvwhrtjtjdvbwes",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0208",
        "bugDescription":"He had a wall full of masks so she could wear a different face every day.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"juykyfgewssndrtcf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0209",
        "bugDescription":"Jeanne wished she has chosen the red button.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"jvedwzuykyndrvcdstcf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0210",
        "bugDescription":"There are no heroes in a punk rock band.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"juykynjuydrtcf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0211",
        "bugDescription":"We should play with legos at camp.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0212",
        "bugDescription":"I am my aunt's sister's daughter.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0213",
        "bugDescription":"The sudden rainstorm washed crocodiles into the ocean.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0214",
        "bugDescription":"It was always dangerous to drive with him since he insisted the safety cones were a slalom course.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0215",
        "bugDescription":"She was the type of girl who wanted to live in a pink house.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0216",
        "bugDescription":"I checked to make sure that he was still alive.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0217",
        "bugDescription":"It had been sixteen days since the zombies first attacked.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0218",
        "bugDescription":"Getting up at dawn is for the birds.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0219",
        "bugDescription":"I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0220",
        "bugDescription":"He excelled at firing people nicely.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0221",
        "bugDescription":"He had a hidden stash underneath the floorboards in the back room of the house.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0222",
        "bugDescription":"Two seats were vacant.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0223",
        "bugDescription":"Jeanne wished she has chosen the red button.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0224",
        "bugDescription":"Nudist colonies shun fig-leaf couture.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0225",
        "bugDescription":"Eating eggs on Thursday for choir practice was recommended.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0226",
        "bugDescription":"Never underestimate the willingness of the greedy to throw you under the bus.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0227",
        "bugDescription":"The pet shop stocks everything you need to keep your anaconda happy.",
        "bugStatus":"In Progress",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0228",
        "bugDescription":"He put heat on the wound to see what would grow.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0229",
        "bugDescription":"She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0230",
        "bugDescription":"She finally understood that grief was her love with no place for it to go.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2000-06-10T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"VioletHAK832",
                "role":"Triager",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0231",
        "bugDescription":"There were three sphered rocks congregating in a cubed room.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0232",
        "bugDescription":"He picked up trash in his spare time to dump in his neighbor's yard.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0233",
        "bugDescription":"Not all people who wander are lost.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0234",
        "bugDescription":"She wanted a pet platypus but ended up getting a duck and a ferret instead.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0235",
        "bugDescription":"his seven-layer cake only had six layers.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0236",
        "bugDescription":"He poured rocks in the dungeon of his mind.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0237",
        "bugDescription":"The Japanese yen for commerce is still well-known.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0238",
        "bugDescription":"The fog was so dense even a laser decided it wasn't worth the effort.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0239",
        "bugDescription":"Charles ate the french fries knowing they would be his last meal.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0240",
        "bugDescription":"Writing a list of random sentences is harder than I initially thought it would be.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-12T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-10T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"Jose",
                "role":"Reviewer",
                "comment":"This book is sure to liquefy your brain.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0241",
        "bugDescription":"Plans for this weekend include turning wine into water.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0242",
        "bugDescription":"Bill ran from the giraffe toward the dolphin.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0243",
        "bugDescription":"They ran around the corner to find that they had traveled back in time.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0244",
        "bugDescription":"Don't piss in my garden and tell me you're trying to help my plants grow.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0245",
        "bugDescription":"I come from a tribe of head-hunters, so I will never need a shrink.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0246",
        "bugDescription":"There's a reason that roses have thorns.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0247",
        "bugDescription":"The thunderous roar of the jet overhead confirmed her worst fears.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0248",
        "bugDescription":"When transplanting seedlings, candied teapots will make the task easier.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0249",
        "bugDescription":"Don't step on the broken glass.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"4",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0250",
        "bugDescription":"The hand sanitizer was actually clear glue.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            {
                "name":"AmberRCA901",
                "role":"Reviewer",
                "comment":"He appeared to be confusingly perplexed.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0251",
        "bugDescription":"The clock within this blog and the clock on my laptop are 1 hour different from each other.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0252",
        "bugDescription":"It would have been a better night if the guys next to us weren't in the splash zone.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"4",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0253",
        "bugDescription":"Traveling became almost extinct during the pandemic.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0254",
        "bugDescription":"It took him a while to realize that everything he decided not to change, he was actually choosing.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0255",
        "bugDescription":"There was no telling what thoughts would come from the machine.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"4",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0256",
        "bugDescription":"Nobody loves a pig wearing lipstick.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0257",
        "bugDescription":"I hear that Nancy is very pretty.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0258",
        "bugDescription":"I like to leave work after my eight-hour tea-break.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0259",
        "bugDescription":"He was so preoccupied with whether or not he could that he failed to stop to consider if he should.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0260",
        "bugDescription":"When money was tight, he'd get his lunch money from the local wishing well.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"He poured rocks in the dungeon of his mind.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0261",
        "bugDescription":"He decided to live his life by the big beats manifesto.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"Shakespeare was a famous 17th-century diesel mechanic.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0262",
        "bugDescription":"Sixty-Four comes asking for bread.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0263",
        "bugDescription":"If I don’t like something, I’ll stay away from it.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"Patricia loves the sound of nails strongly pressed against the chalkboard.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0264",
        "bugDescription":"When he had to picnic on the beach, he purposely put sand in other people’s food.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"It was a slippery slope and he was willing to slide all the way to the deepest depths.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0265",
        "bugDescription":"They wandered into a strange Tiki bar on the edge of the small beach town.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"No matter how beautiful the sunset, it saddened her knowing she was one day older.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0266",
        "bugDescription":"The quick brown fox jumps over the lazy dog.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"Everyone was curious about the large white blimp that appeared overnight.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0267",
        "bugDescription":"He decided to fake his disappearance to avoid jail.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"Andy loved to sleep on a bed of nails.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0268",
        "bugDescription":"The sky is clear; the stars are twinkling.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"I am happy to take your donation; any amount will be greatly appreciated.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0269",
        "bugDescription":"All you need to do is pick up the pen and begin.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"Most shark attacks occur about 10 feet from the beach since that's where the people are.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0270",
        "bugDescription":"The fifty mannequin heads floating in the pool kind of freaked them out.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2003-04-29T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-01T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
            {
                "name":"Lucas",
                "role":"Bug Reporter",
                "comment":"Martha came to the conclusion that shake weights are a great gift for any occasion.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0271",
        "bugDescription":"The sudden rainstorm washed crocodiles into the ocean.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"The newly planted trees were held up by wooden frames in hopes they could survive the next storm.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0272",
        "bugDescription":"She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"The gruff old man sat in the back of the bait shop grumbling to himself as he scooped out a handful of worms.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0273",
        "bugDescription":"Today is the day I'll finally know what brick tastes like.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"He drank life before spitting it out.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0274",
        "bugDescription":"Please wait outside of the house.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"Pink horses galloped across the sea.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0275",
        "bugDescription":"She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"Flying fish few by the space station.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0276",
        "bugDescription":"You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"The fish dreamed of escaping the fishbowl and into the toilet where he saw his friend go.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0277",
        "bugDescription":"Two seats were vacant.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"We will not allow you to bring your pet armadillo along.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0278",
        "bugDescription":"Poison ivy grew through the fence they said was impenetrable.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"The pet shop stocks everything you need to keep your anaconda happy.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0279",
        "bugDescription":"Toddlers feeding raccoons surprised even the seasoned park ranger.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"He quietly entered the museum as the super bowl started.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0280",
        "bugDescription":"There was no telling what thoughts would come from the machine.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2005-07-18T23:10:00.000Z",
        "bugLastBumpDate":"2020-08-01T23:14:00.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
                "name":"Benedict",
                "role":"Triager",
                "comment":"I am my aunt's sister's daughter.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0281",
        "bugDescription":"The tattered work gloves speak of the many hours of hard labor he endured throughout his life.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"I am never at home on Sundays.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0282",
        "bugDescription":"He didn't understand why the bird wanted to ride the bicycle.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0283",
        "bugDescription":"Sometimes you have to just give up and win by cheating.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"Flesh-colored yoga pants were far worse than even he feared.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0284",
        "bugDescription":"Charles ate the french fries knowing they would be his last meal.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"It was the best sandcastle he had ever seen.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0285",
        "bugDescription":"Excitement replaced fear until the final moment.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"She tilted her head back and let whip cream stream into her mouth while taking a bath.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0286",
        "bugDescription":"She learned that water bottles are no longer just to hold liquid, but they're also status symbols.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"I am counting my calories, yet I really want dessert.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0287",
        "bugDescription":"There were three sphered rocks congregating in a cubed room.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"Please tell me you don't work in a morgue.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0288",
        "bugDescription":"Happiness can be found in the depths of chocolate pudding.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"The group quickly understood that toxic waste was the most effective barrier to use against the zombies.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0289",
        "bugDescription":"Swim at your own risk was taken as a challenge for the group of Kansas City college students.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"The teens wondered what was kept in the red shed on the far edge of the school grounds.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0290",
        "bugDescription":"Pantyhose and heels are an interesting choice of attire for the beach.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2009-09-24T23:13:00.000Z",
        "bugLastBumpDate":"2020-08-26T23:17:00.000Z",
        "bugAssignedTo":"BobGYA315",
        "bugComments":[
            {
                "name":"FionaLSE333",
                "role":"Reviewer",
                "comment":"Lightning Paradise was the local hangout joint where the group usually ended up spending the night.",
                "commentDate":"2020-08-01T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0291",
        "bugDescription":"She was sad to hear that fireflies are facing extinction due to artificial light, habitat loss, and pesticides.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[]
    },
    {
        "bugID":"BR0292",
        "bugDescription":"Eating eggs on Thursday for choir practice was recommended.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[]
    },
    {
        "bugID":"BR0293",
        "bugDescription":"It was obvious she was hot, sweaty, and tired.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[
            {
                "name":"AdelineFGH12",
                "role":"Reviewer",
                "comment":"The Japanese yen for commerce is still well-known.",
                "commentDate":"2020-10-05T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0294",
        "bugDescription":"25 years later, she still regretted that specific moment.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[
            {
                "name":"AdelineFGH12",
                "role":"Reviewer",
                "comment":"Had he known what was going to happen, he would have never stepped into the shower.",
                "commentDate":"2020-10-05T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0295",
        "bugDescription":"He ended up burning his fingers poking someone else's fire.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[]
    },
    {
        "bugID":"BR0296",
        "bugDescription":"The father died during childbirth.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[
            {
                "name":"AdelineFGH12",
                "role":"Reviewer",
                "comment":"Yeah, I think it's a good environment for learning English.",
                "commentDate":"2020-10-05T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0297",
        "bugDescription":"You have every right to be angry, but that doesn't give you the right to be mean.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[]
    },
    {
        "bugID":"BR0298",
        "bugDescription":"I’m a living furnace.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[
            {
                "name":"AdelineFGH12",
                "role":"Reviewer",
                "comment":"You'll see the rainbow bridge after it rains cats and dogs.",
                "commentDate":"2020-10-05T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0299",
        "bugDescription":"Pair your designer cowboy hat with scuba gear for a memorable occasion.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[
            {
                "name":"AdelineFGH12",
                "role":"Reviewer",
                "comment":"The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks.",
                "commentDate":"2020-10-05T23:14:00.000Z"
            }
        ]
    },
    {
        "bugID":"BR0300",
        "bugDescription":"Excitement replaced fear until the final moment.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2015-03-07T23:13:00.000Z",
        "bugLastBumpDate":"2020-10-25T23:17:00.000Z",
        "bugAssignedTo":"NewtonFAX374",
        "bugComments":[]
    },
    {
        "bugID":"BR0301",
        "bugDescription":"The efficiency we have at removing trash has made creating trash more acceptable.She was too busy always talking about what she wanted to do to actually do any of it.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0302",
        "bugDescription":"The lake is a long way from here,he swore he just saw his sushi move,she did a happy dance because all of the socks from the dryer matched.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0303",
        "bugDescription":"He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there.Warm beer on a cold day isn't my idea of fun.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Benedict",
            "role":"Triager",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0304",
        "bugDescription":"He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it.Carol drank the blood as if she were a vampire.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0305",
        "bugDescription":"There's a message for you if you look up.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2000-06-09T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"BryanSWH231",
        "bugComments":[
            {
                "name":"JeremyWu09",
                "role":"Bug Reporter",
                "comment":"Mary plays the piano.",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0306",
        "bugDescription":"We have never been to Asia, nor have we visited Africa.I really want to go to work, but I am too sick to drive.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0307",
        "bugDescription":"We have never been to Asia, nor have we visited Africa.I really want to go to work, but I am too sick to drive.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0308",
        "bugDescription":"We have never been to Asia, nor have we visited Africa.I really want to go to work, but I am too sick to drive.",
        "bugStatus":"In Progress",
        "bugSeverity":"4",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0309",
        "bugDescription":"We have never been to Asia, nor have we visited Africa.I really want to go to work, but I am too sick to drive.",
        "bugStatus":"In Progress",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0310",
        "bugDescription":"Today I heard something new and unmemorable.He would only survive if he kept the fire going and he could hear thunder in the distance.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0311",
        "bugDescription":"Courage and stupidity were all he had.All she wanted was the answer, but she had no idea how much she would hate it.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0312",
        "bugDescription":"It must be five o'clock somewhere.The stranger officiates the meal.Tomorrow will bring something new, so leave today as a memory.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0313",
        "bugDescription":"Wisdom is easily acquired when hiding under the bed with a saucepan on your head.She had a habit of taking showers in lemonade.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0314",
        "bugDescription":"He had a hidden stash underneath the floorboards in the back room of the house.Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0315",
        "bugDescription":"Erin accidentally created a new universe.Their argument could be heard across the parking lot.Dolores wouldn't have eaten the meal if she had known what it actually was.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0316",
        "bugDescription":"I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.He ended up burning his fingers poking someone else's fire.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0317",
        "bugDescription":"The sky is clear; the stars are twinkling.She was too short to see over the fence.He was the type of guy who liked Christmas lights on his house in the middle of July.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Benedict",
            "role":"Triager",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0318",
        "bugDescription":"They desperately needed another drummer since the current one only knew how to play bongos.Harrold felt confident that nobody would ever suspect his spy pigeon.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Benedict",
            "role":"Triager",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0319",
        "bugDescription":"If I don’t like something, I’ll stay away from it.Joe made the sugar cookies; Susan decorated them.She finally understood that grief was her love with no place for it to go.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Benedict",
            "role":"Triager",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0320",
        "bugDescription":"He went back to the video to see what had been recorded and was shocked at what he saw.He was willing to find the depths of the rabbit hole in order to be with her.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Benedict",
            "role":"Triager",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0321",
        "bugDescription":"The bees decided to have a mutiny against their queen.I think I will buy the red car, or I will lease the blue one.The wake behind the boat told of the past while the open sea for told life in the unknown future.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0322",
        "bugDescription":"It was always dangerous to drive with him since he insisted the safety cones were a slalom course.He found the end of the rainbow and was surprised at what he found there.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0323",
        "bugDescription":"I am my aunt's sister's daughter.She looked into the mirror and saw another person.The murder hornet was disappointed by the preconceived ideas people had of him.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0324",
        "bugDescription":"Beach-combing replaced wine tasting as his new obsession.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0325",
        "bugDescription":"The fish dreamed of escaping the fishbowl and into the toilet where he saw his friend go.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0326",
        "bugDescription":"I liked their first two albums but changed my mind after that charity gig.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0327",
        "bugDescription":"Nudist colonies shun fig-leaf couture.The small white buoys marked the location of hundreds of crab pots.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0328",
        "bugDescription":"She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0329",
        "bugDescription":"Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0330",
        "bugDescription":"She could hear him in the shower singing with a joy she hoped he'd retain after she delivered the news.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0331",
        "bugDescription":"Twin 4-month-olds slept in the shade of the palm tree while the mother tanned in the sun.I met an interesting turtle while the song on the radio blasted away.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0332",
        "bugDescription":"Excitement replaced fear until the final moment.The blinking lights of the antenna tower came into focus just as I heard a loud snap.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0333",
        "bugDescription":"He hated that he loved what she hated about hate.You can't compare apples and oranges, but what about bananas and plantains?",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0334",
        "bugDescription":"You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0335",
        "bugDescription":"As he waited for the shower to warm, he noticed that he could hear water change temperature.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0336",
        "bugDescription":"She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Gordon",
            "role":"Developer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0337",
        "bugDescription":"She let the balloon float up into the air with her hopes and dreams.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0338",
        "bugDescription":"I just wanted to tell you I could see the love you have for your child by the way you look at her.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0339",
        "bugDescription":"Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0340",
        "bugDescription":"It's a skateboarding penguin with a sunhat!Peanut butter and jelly caused the elderly lady to think about her past.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0341",
        "bugDescription":"The wake behind the boat told of the past while the open sea for told life in the unknown future.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0342",
        "bugDescription":"After exploring the abandoned building, he started to believe in ghosts.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0343",
        "bugDescription":"She moved forward only because she trusted that the ending she now was going through must be followed by a new beginning.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0344",
        "bugDescription":"I met an interesting turtle while the song on the radio blasted away.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0345",
        "bugDescription":"It's difficult to understand the lengths he'd go to remain short.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0346",
        "bugDescription":"She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0347",
        "bugDescription":"The random sentence generator generated a random sentence about a random sentence.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0348",
        "bugDescription":"The tears of a clown make my lipstick run, but my shower cap is still intact.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR03349",
        "bugDescription":"Lets all be unique together until we realise we are all the same.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0350",
        "bugDescription":"I would have gotten the promotion, but my attendance wasn’t good enough.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0351",
        "bugDescription":"She thought there'd be sufficient time if she hid her watch.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0352",
        "bugDescription":"he busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0353",
        "bugDescription":"He wondered why at 18 he was old enough to go to war, but not old enough to buy cigarettes.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0354",
        "bugDescription":"Potato wedges probably are not best for relationships.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Laksh",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0355",
        "bugDescription":"Martha came to the conclusion that shake weights are a great gift for any occasion.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0356",
        "bugDescription":"Everybody should read Chaucer to improve their everyday vocabulary.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0357",
        "bugDescription":"The gruff old man sat in the back of the bait shop grumbling to himself as he scooped out a handful of worms.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0358",
        "bugDescription":"David proudly graduated from high school top of his class at age 97.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0359",
        "bugDescription":"She could hear him in the shower singing with a joy she hoped he'd retain after she delivered the news.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0360",
        "bugDescription":"You're good at English when you know the difference between a man eating chicken and a man-eating chicken.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0361",
        "bugDescription":"He found the end of the rainbow and was surprised at what he found there.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0362",
        "bugDescription":"She traveled because it cost the same as therapy and was a lot more enjoyable.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0363",
        "bugDescription":"The shark-infested South Pine channel was the only way in or out.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0364",
        "bugDescription":"There were white out conditions in the town; subsequently, the roads were impassable.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0365",
        "bugDescription":"The view from the lighthouse excited even the most seasoned traveler.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0366",
        "bugDescription":"Tomorrow will bring something new, so leave today as a memory.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0367",
        "bugDescription":"The wake behind the boat told of the past while the open sea for told life in the unknown future.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0368",
        "bugDescription":"The spa attendant applied the deep cleaning mask to the gentleman’s back.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0369",
        "bugDescription":"We have young kids who often walk into our room at night for various reasons including clowns in the closet.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0370",
        "bugDescription":"Harrold felt confident that nobody would ever suspect his spy pigeon.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0371",
        "bugDescription":"As the years pass by, we all know owners look more and more like their dogs.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0372",
        "bugDescription":"She had that tint of craziness in her soul that made her believe she could actually make a difference.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0373",
        "bugDescription":"He barked orders at his daughters but they just stared back with amusement.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0374",
        "bugDescription":"Patricia loves the sound of nails strongly pressed against the chalkboard.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0375",
        "bugDescription":"Before he moved to the inner city, he had always believed that security complexes were psychological.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0376",
        "bugDescription":"Everyone says they love nature until they realize how dangerous she can be.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0377",
        "bugDescription":"The sky is clear; the stars are twinkling. The clouds formed beautiful animals in the sky that eventually created a tornado to wreak havoc. When she didn’t like a guy who was trying to pick her up, she started using sign language.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[]
    },
    {
        "bugID":"BR0378",
        "bugDescription":"Car safety systems have come a long way, but he was out to prove they could be outsmarted.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0379",
        "bugDescription":"Giving directions that the mountains are to the west only works when you can see them.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0380",
        "bugDescription":"Weather is not trivial - it's especially important when you're standing in it.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0381",
        "bugDescription":"As he entered the church he could hear the soft voice of someone whispering into a cell phone.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0382",
        "bugDescription":"The body piercing didn't go exactly as he expected.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0383",
        "bugDescription":"Going from child, to childish, to childlike is only a matter of time.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0384",
        "bugDescription":"Your girlfriend bought your favorite cookie crisp cereal but forgot to get milk.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0385",
        "bugDescription":"Italy is my favorite country; in fact, I plan to spend two weeks there next year.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0386",
        "bugDescription":"She works two jobs to make ends meet; at least, that was her reason for not having time to join us.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0387",
        "bugDescription":"The tour bus was packed with teenage girls heading toward their next adventure.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0388",
        "bugDescription":"She couldn't decide of the glass was half empty or half full so she drank it.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0389",
        "bugDescription":"There can never be too many cherries on an ice cream sundae.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0390",
        "bugDescription":"He picked up trash in his spare time to dump in his neighbor's yard.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0391",
        "bugDescription":"He took one look at what was under the table and noped the hell out of there.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0392",
        "bugDescription":"He found the end of the rainbow and was surprised at what he found there.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0393",
        "bugDescription":"As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Ben",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0394",
        "bugDescription":"The pet shop stocks everything you need to keep your anaconda happy.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0395",
        "bugDescription":"He wondered why at 18 he was old enough to go to war, but not old enough to buy cigarettes.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0396",
        "bugDescription":"Random words in front of other random words create a random sentence.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0397",
        "bugDescription":"Wisdom is easily acquired when hiding under the bed with a saucepan on your head.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0398",
        "bugDescription":"The clouds formed beautiful animals in the sky that eventually created a tornado to wreak havoc.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0399",
        "bugDescription":"The fish dreamed of escaping the fishbowl and into the toilet where he saw his friend go.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0400",
        "bugDescription":"On a scale from one to ten, what's your favorite flavor of random grammar?",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0401",
        "bugDescription":"He found the chocolate covered roaches quite tasty.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2019-09-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0402",
        "bugDescription":"Cats are good pets, for they are clean and are not noisy.", 
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-20T23:15:30.000Z",
        "bugLastBumpDate":"2020-07-19T22:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0403",
        "bugDescription":"It must be five o'clock somewhere.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0404",
        "bugDescription":"He's in a boy band which doesn't make much sense for a snake.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-09-25T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0405",
        "bugDescription":"The near-death experience brought new ideas to light.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-07-20T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-20T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
    
          
        ]
    },
    {
        "bugID":"BR0406",
        "bugDescription":"Tom got a small piece of pie.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-09-16T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0407",
        "bugDescription":"The blinking lights of the antenna tower came into focus just as I heard a loud snap.",
        "bugStatus":"In Progress",
        "bugSeverity":"1",
        "bugDateReported":"2019-10-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0408",
        "bugDescription":"Flying fish few by the space station.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-08-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0409",
        "bugDescription":"Most shark attacks occur about 10 feet from the beach since that's where the people are.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-03-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-20T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },{
        "bugID":"BR0410",
        "bugDescription":"She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.",
        "bugStatus":"In Progress",
        "bugSeverity":"4",
        "bugDateReported":"2020-04-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"BryanSWH231",
                "role":"Bug Reporter",
                "comment":"dfgfsdgfdfhdfa9osiupfghiuygdfhedrf",
                "commentDate":"2020-09-14T23:15:30.000Z"
            }
        ]
    },{
        "bugID":"BR0411",
        "bugDescription":"He embraced his new life as an eggplant.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-30T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0412",
        "bugDescription":"Martha came to the conclusion that shake weights are a great gift for any occasion.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0413",
        "bugDescription":"The pigs were insulted that they were named hamburgers.",
        "bugStatus":"In Progress",
        "bugSeverity":"4",
        "bugDateReported":"2019-09-25T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0414",
        "bugDescription":"The Japanese yen for commerce is still well-known.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-07-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0415",
        "bugDescription":"We have young kids who often walk into our room at night for various reasons including clowns in the closet.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"3",
        "bugDateReported":"2019-09-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0416",
        "bugDescription":"Everyone was busy, so I went to the movie alone.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-07-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
           
        ]
    },
    {
        "bugID":"BR0417",
        "bugDescription":"I come from a tribe of head-hunters, so I will never need a shrink.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0418",
        "bugDescription":"She wore green lipstick like a fashion icon.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0419",
        "bugDescription":"The fifty mannequin heads floating in the pool kind of freaked them out.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"JoshuaBRQ83",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0420",
        "bugDescription":"It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"BryanSWH231",
                "role":"Bug Reporter",
                "comment":"aoifjodifoajgoiaejrogjoaeirgjoaejrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0421",
        "bugDescription":"It dawned on her that others could make her happier, but only she could make herself happy.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"MarkPCC",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0422",
        "bugDescription":"Eating eggs on Thursday for choir practice was recommended.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0423",
        "bugDescription":"The fish dreamed of escaping the fishbowl and into the toilet where he saw his friend go.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2019-07-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-06-19T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0424",
        "bugDescription":"People generally approve of dogs eating cat food but not cats eating dog food.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0425",
        "bugDescription":"The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.",
        "bugStatus":"Closed",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0426",
        "bugDescription":"his seven-layer cake only had six layers.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0427",
        "bugDescription":"I covered my friend in baby oil.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0428",
        "bugDescription":"Today I heard something new and unmemorable.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0429",
        "bugDescription":"The gloves protect my feet from excess work.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2019-11-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0430",
        "bugDescription":"You'll see the rainbow bridge after it rains cats and dogs.",
        "bugStatus":"Closed",
        "bugSeverity":"5",
        "bugDateReported":"2020-01-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"aoifjodifoajgoiaejrogjoaeirgjoaejrgdsjofiaodsfughsdfgzxcvdawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0431",
        "bugDescription":"This is the last random sentence I will be writing and I am going to stop mid-sent",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-03-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-22T23:15:30.000Z",
        "bugAssignedTo":"InaayahRu214",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0432",
        "bugDescription":"When I cook spaghetti, I like to boil it a few minutes past al dente so the noodles are super slippery.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"1",
        "bugDateReported":"2020-03-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0433",
        "bugDescription":"Her hair was windswept as she rode in the black convertible.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2020-04-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-20T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0434",
        "bugDescription":"The beauty of the African sunset disguised the danger lurking nearby.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0435",
        "bugDescription":"Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.",
        "bugStatus":"In Progress",
        "bugSeverity":"5",
        "bugDateReported":"2019-07-15T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0436",
        "bugDescription":"Everyone was busy, so I went to the movie alone.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-19T22:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0437",
        "bugDescription":"Three years later, the coffin was still full of Jello.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2019-08-17T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0438",
        "bugDescription":"When transplanting seedlings, candied teapots will make the task easier.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2019-07-21T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0439",
        "bugDescription":"She wondered what his eyes were saying beneath his mirrored sunglasses.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0440",
        "bugDescription":"His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-07-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"MaxRWK732",
                "role":"Developer",
                "comment":"aoifjodilkjhhjklgiolhjoiaejrogjoaeirgjoaejrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0441",
        "bugDescription":"They ran around the corner to find that they had traveled back in time.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2019-08-22T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0442",
        "bugDescription":"He was 100% into fasting with her until he understood that meant he couldn't eat.",
        "bugStatus":"Open",
        "bugSeverity":"4",
        "bugDateReported":"2020-06-20T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0443",
        "bugDescription":"The gruff old man sat in the back of the bait shop grumbling to himself as he scooped out a handful of worms.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-05-22T23:15:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0444",
        "bugDescription":"Whenever he saw a red flag warning at the beach he grabbed his surfboard.",
        "bugStatus":"In Progress",
        "bugSeverity":"3",
        "bugDateReported":"2019-08-20T19:15:30.000Z",
        "bugLastBumpDate":"2020-09-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0445",
        "bugDescription":"Even with the snow falling outside, she felt it appropriate to wear her bikini.",
        "bugStatus":"Awaiting Testing",
        "bugSeverity":"5",
        "bugDateReported":"2019-10-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0446",
        "bugDescription":"All you need to do is pick up the pen and begin.",
        "bugStatus":"Closed",
        "bugSeverity":"3",
        "bugDateReported":"2019-10-20T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
           
        ]
    },
    {
        "bugID":"BR0447",
        "bugDescription":"Don't step on the broken glass.",
        "bugStatus":"In Progress",
        "bugSeverity":"2",
        "bugDateReported":"2019-09-23T23:20:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0448",
        "bugDescription":"The wake behind the boat told of the past while the open sea for told life in the unknown future.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-06-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-10-19T23:15:30.000Z",
        "bugAssignedTo":"AimeeRPA326",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0449",
        "bugDescription":"Nothing is as cautiously cuddly as a pet porcupine.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2019-10-19T23:16:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            
        ]
    },
    {
        "bugID":"BR0450",
        "bugDescription":"Had he known what was going to happen, he would have never stepped into the shower.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2019-07-19T23:15:30.000Z",
        "bugLastBumpDate":"2020-08-19T23:15:30.000Z",
        "bugAssignedTo":"KristyWPM613",
        "bugComments":[
            {
                "name":"LilyDPM529",
                "role":"Developer",
                "comment":"aoifjodifoajgoihjiughrogjoaeirgjoaejrgdsjofiawjeofiaodjisf",
                "commentDate":"2020-08-14T23:15:30.000Z"
            }
        ]
    },
    {
        "bugID":"BR0451",
        "bugDescription":"The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0452",
        "bugDescription":"The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0453",
        "bugDescription":"It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0454",
        "bugDescription":"He found his art never progressed when he literally used his sweat and tears.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0455",
        "bugDescription":"He was willing to find the depths of the rabbit hole in order to be with her.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0456",
        "bugDescription":"In the end, he realized he could see sound and hear words.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0457",
        "bugDescription":"The clock within this blog and the clock on my laptop are 1 hour different from each other.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0458",
        "bugDescription":"He found the end of the rainbow and was surprised at what he found there.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0459",
        "bugDescription":"Nothing seemed out of place except the washing machine in the bar.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0460",
        "bugDescription":"The trick to getting kids to eat anything is to put catchup on it.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0461",
        "bugDescription":"There's an art to getting your way, and spitting olive pits across the table isn't it.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0462",
        "bugDescription":"The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0463",
        "bugDescription":"She hadn't had her cup of coffee, and that made things all the worse.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"Gordon",
        "bugComments":[
            {
            "name":"Lucas",
            "role":"Bug Reporter",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0464",
        "bugDescription":"There were white out conditions in the town; subsequently, the roads were impassable.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0465",
        "bugDescription":"We should play with legos at camp.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0466",
        "bugDescription":"All she wanted was the answer, but she had no idea how much she would hate it.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0467",
        "bugDescription":"he learned that water bottles are no longer just to hold liquid, but they're also status symbols.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0468",
        "bugDescription":"He shaved the peach to prove a points.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0469",
        "bugDescription":"He swore he just saw his sushi move.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0470",
        "bugDescription":"Car safety systems have come a long way, but he was out to prove they could be outsmarted.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0471",
        "bugDescription":"When motorists sped in and out of traffic, all she could think of was those in need of a transplant.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0472",
        "bugDescription":"Pair your designer cowboy hat with scuba gear for a memorable occasion.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0473",
        "bugDescription":"If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0474",
        "bugDescription":"My dentist tells me that chewing bricks is very bad for your teeth.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0475",
        "bugDescription":"She can live her life however she wants as long as she listens to what I have to say.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0476",
        "bugDescription":"There's an art to getting your way, and spitting olive pits across the table isn't it.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0477",
        "bugDescription":"I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0478",
        "bugDescription":"The blue parrot drove by the hitchhiking mongoose.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0479",
        "bugDescription":"Pink horses galloped across the sea.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0480",
        "bugDescription":"I liked their first two albums but changed my mind after that charity gig.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0481",
        "bugDescription":"People generally approve of dogs eating cat food but not cats eating dog food.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0482",
        "bugDescription":"She wrote him a long letter, but he didn't read it.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0483",
        "bugDescription":"You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0484",
        "bugDescription":"The hand sanitizer was actually clear glue.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0485",
        "bugDescription":"The door slammed on the watermelon.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0486",
        "bugDescription":"She works two jobs to make ends meet; at least, that was her reason for not having time to join us.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0487",
        "bugDescription":"He barked orders at his daughters but they just stared back with amusement.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0488",
        "bugDescription":"He enjoys practicing his ballet in the bathroom.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0489",
        "bugDescription":"My Mum tries to be cool by saying that she likes all the same things that I do.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0490",
        "bugDescription":"She always speaks to him in a loud voice.",
        "bugStatus":"Closed",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0491",
        "bugDescription":"Too many prisons have become early coffins.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0492",
        "bugDescription":"I met an interesting turtle while the song on the radio blasted away.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0493",
        "bugDescription":"Stop waiting for exceptional things to just happen.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0494",
        "bugDescription":"He learned the important lesson that a picnic at the beach on a windy day is a bad idea.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0495",
        "bugDescription":"The bees decided to have a mutiny against their queen.",
        "bugStatus":"Open",
        "bugSeverity":"3",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0496",
        "bugDescription":"I would be delighted if the sea were full of cucumber juice.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0497",
        "bugDescription":"She wrote him a long letter, but he didn't read it.",
        "bugStatus":"Open",
        "bugSeverity":"5",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0498",
        "bugDescription":"They're playing the piano while flying in the plane.",
        "bugStatus":"Open",
        "bugSeverity":"1",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0499",
        "bugDescription":"Cats are good pets, for they are clean and are not noisy.",
        "bugStatus":"Open",
        "bugSeverity":"2",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    },
    {
        "bugID":"BR0500",
        "bugDescription":"He found his art never progressed when he literally used his sweat and tears.",
        "bugStatus":"Closed",
        "bugSeverity":"4",
        "bugDateReported":"2020-08-11T19:14:32.000Z",
        "bugLastBumpDate":"2020-08-18T20:15:30.000Z",
        "bugAssignedTo":"KimHao",
        "bugComments":[
            {
            "name":"Jose",
            "role":"Reviewer",
            "comment":"fhabrebeaFDFGA",
            "commentDate":"2020-08-14T10:12:48.000Z"
            }
        ]
    }
])
    .then(data => {
        console.log("Insertion successful!");
        console.log(data);
    });