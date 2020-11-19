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