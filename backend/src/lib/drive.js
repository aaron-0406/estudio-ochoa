const llaves = require("../config");
const { google } = require("googleapis");
const CLIENT_ID = llaves.GOOGLE_DRIVE_CLIENT_ID;
const CLIENT_SECRET = llaves.GOOGLE_DRIVE_CLIENT_SECRET;
const CLIENT_URI = llaves.GOOGLE_DRIVE_CLIENT_URI;
const REFRESH_TOKEN = llaves.GOOGLE_DRIVE_REFRESH_TOKEN;
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, CLIENT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

module.exports = drive;
