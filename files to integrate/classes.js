class User {
    constructor(firstName, lastName, username, password, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.role = role;
    }
};

class BugReport {
    constructor(bugID, bugDescription, bugStatus, bugDateReported, bugLastBumpDate, bugAssignedTo, bugComments) {
        this.bugID = bugID;
        this.bugDescription = bugDescription;
        this.bugStatus = bugStatus;
        this.bugDateReported = bugDateReported;
        this.bugLastBumpDate = bugLastBumpDate;
        this.bugAssignedTo = bugAssignedTo;
        this.bugComments = bugComments;
    }
};