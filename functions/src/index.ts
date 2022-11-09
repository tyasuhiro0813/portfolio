import * as functions from "firebase-functions";
const axios = require("axios")

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getContactMessage = functions.https.onCall(async (data, context) => {
    console.log(data)

    const { name, email, contact } = data
    const slackApiUrl = "https://hooks.slack.com/services/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"

    await axios.post(slackApiUrl, {text: `お問い合わせ: ${name}, ${email}, ${contact}`})

    return "OK"
});
