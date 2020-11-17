const test = require('unit.js');
const bugReportData = require('./bugReportData.json');

describe('Learning by the example', function() {
	it('example variable', function() {
		// just for example of tested value
		var example = 'hello world';
		test
			.string(example)
				.startsWith('hello')
				.match(/[a-z]/)
			.given(example = 'you are welcome')
				.string(example)
					.endsWith('welcome')
					.contains('you')
			.when('"example" becomes an object', function() {
				example = {
					message: 'hello world',
					name: 'Nico',
					job: 'developper',
					from: 'France'
				};
			})
			.then('test the "example" object', function() {
				test
					.object(example)
						.hasValue('developper')
						.hasProperty('name')
						.hasProperty('from', 'France')
						.contains({message: 'hello world'});
			})
			.if(example = 'bad value')
				.error(function() {
					example.badMethod();
				});
	});
	it('Testing database entries contain correct keys', function() {
		for (bugReport of bugReportData.bugReports) {
			test
				.object(bugReport)
					.hasProperty('bugID')
					.hasProperty('bugDescription')
					.hasProperty('bugStatus')
					.hasProperty('bugDateReported')
					.hasProperty('bugLastBumpDate')
					.hasProperty('bugAssignedTo')
					.hasProperty('bugComments');
		}
	});
});