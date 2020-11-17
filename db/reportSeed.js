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
        "bugStatus":"Awaiting Testing",
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
        "bugStatus":"Awaiting Testing",
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
    }
])
    .then(data => {
        console.log("Insertion successful!");
        console.log(data);
    });