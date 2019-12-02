//api key :- AIzaSyAsRa_l3u - okhjEA2n3Hn3msfRhrR9dAcc
/**
 * Oauth2 cred
 * ID: 874412460095-9li5i9ms20p2c9kjo31vkcmktgvp6m0o.apps.googleusercontent.com
 * Secret: kB0OlPGiOFr9f5aaw1-3k2EI
 */

const Youtube = require("youtube-api")
const fs = require("fs")
const readJson = require("r-json")
const Lien = require("lien")
const Logger = require("bug-killer")
const opn = require("open")
const prettyBytes = require("pretty-bytes")

const CREDENTIALS = readJson(__dirname + '/../../../../config/credentials.json')
    // console.log('cred path #####################>>', CREDENTIALS.web.client_id)

// Init lien server
// let server = new Lien({
//     host: "localhost",
//     port: 7000
// });

// Authenticate
// You can access the Youtube resources via OAuth2 only.
// https://developers.google.com/youtube/v3/guides/moving_to_oauth#service_accounts
let oauth = Youtube.authenticate({
    type: "oauth",
    client_id: CREDENTIALS.web.client_id,
    client_secret: CREDENTIALS.web.client_secret,
    redirect_url: CREDENTIALS.web.redirect_uris
});

opn(oauth.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/youtube.upload"]
}))


// Handle oauth2 callback
module.exports = (req, res) => {
    // console.log(' lien 0000000000000000000000>>>', new Lien())
    new Lien().addPage("/oauth2callback", lien => {
        console.log(' lien 0000000000000000000000>>>', lien.query.code)
        Logger.log("Trying to get the token using the following code: " + lien.query.code);
        oauth.getToken(lien.query.code, (err, tokens) => {

            if (err) {
                lien.lien(err, 400);
                return Logger.log(err);
            }

            Logger.log("Got the tokens.");

            oauth.setCredentials(tokens);

            lien.end("The video is being uploaded. Check out the logs in the terminal.");

            var req = Youtube.videos.insert({
                resource: {
                    // Video title and description
                    snippet: {
                        title: "Testing YoutTube API NodeJS module",
                        description: "Test video upload via YouTube API"
                    }
                    // I don't want to spam my subscribers
                    ,
                    status: {
                        privacyStatus: "private"
                    }
                }
                // This is for the callback function
                ,
                part: "snippet,status"

                // Create the readable stream to upload the video
                ,
                media: {
                    body: fs.createReadStream("video.mp4")
                }
            }, (err, data) => {
                console.log("Done.");
                process.exit();
            });

            setInterval(function() {
                Logger.log(`${prettyBytes(req.req.connection._bytesDispatched)} bytes uploaded.`);
            }, 250);
        });
    });

    console.log('here -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->', opn)
}

// address: 'https://accounts.google.com/signin/oauth/delegation?authuser=0&part=AJi8hAPIkuQm04WPIXVcc4WCjGIZZq23QQFh5DdkS4MklfCO_jukqOj8VZ71skL-oL67bYClbjQtzGXo-PsXFBLRKadR65IOhiiXxcpwLRECanXSQgICsb0V8QFS-9p4kPTvdkaTD-LSS2t-SrIgFMGG8OjA7S2k7hy2Tg8qgI8WXDZ8qI92dKjNMxtVuzh3Zzt3hBkkos_0zuuvAGfIFFjhf8rUKnvohuAvbDtOednxmFIfma_IfiqBDa0qC5pnTc8Fq-kOsEM07PtGmSZ_vA_mPOabrOyAisZJiUdvo5EYdkRzmPs01VRnDY8qWa4GgV-UGuuIuDVKTisMiWzUxMqMekXHbacXWa-ytWnVPjuZQPlTJ0U7bYqkRyWRWWiokT6ywe-sDvnNc_4pzgJj1Tf-59iJ1aSIiiLfnn9cUJaKGMPIzHw_Jms&as=ZQW7eaFz-f2mezX_n7rDyQ&allowAddAccount=1&flowName=GeneralOAuthFlow'

// http: //localhost:7000/?code=4/twHaSrTPk1cS686Nmzx73VFsuP7HK3GG1dHeLHrdhLWzP4X321Vav_BXT6gGOdpkJObC03E1y7tYzoCJwts3gR0&scope=https://www.googleapis.com/auth/youtube.upload