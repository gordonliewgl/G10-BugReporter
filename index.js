const express = require('express');
const path = require('path');
const test = require('unit.js');
const bugReportData = require('./bugReportData.json');
const app = express();
const port = 3000;

// Include files in public folder (Bootstrap)
app.use(express.static(path.join(__dirname, 'public')));

// Uses Embedded Javascript Templates (https://ejs.co/)
app.set('view engine', 'ejs');

// Look for home.ejs in the same folder as this index.js file instead of the cwd when node.js was launched
app.set('views', path.join(__dirname, '/views'));

// Home Page
app.get('/', (req, res) => {
	res.render('login.ejs');
});

// Bug Reports list
app.get('/reports', (req, res) => {
	res.render('reports.ejs', {...bugReportData});
});

// Individual bug report details
app.get('/reports/:bugReportID', (req, res) => {
	res.render('reportDetails.ejs', {...bugReportData});
});

// Any invalid page
app.get('*', (req, res) => {
	res.send('You\'re in the wrong neighbourhood.');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});