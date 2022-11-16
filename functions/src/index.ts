import * as functions from "firebase-functions";
const axios = require("axios")
// // Start writing Firebase Functions
export const getContactMessage = functions
    .runWith({
        secrets: ['SLACK_API_URL']
    })
    .https.onCall(async (data, context) => {
        const { name, email, contact } = data
        const slackApiUrl = process.env.SLACK_API_URL || ""
    await axios.post(slackApiUrl, {text: `お問い合わせ: ${name}, ${email}, ${contact}`})
    return "OK"
    });
