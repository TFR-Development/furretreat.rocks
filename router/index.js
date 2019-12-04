const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    const { users, guilds } = req.client

    const furRetreat = guilds.get("569747786199728150");

    const [
        benAvatar,
        austinAvatar,
        toastAvatar,
        jackAvatar,
        kelwingAvatar,
        codfishAvatar,
        jaspAvatar,
        chaseAvatar,
        tigerAvatar,
        karnageAvatar,
        sentryAvatar,
        blueAvatar,
    ] = await Promise.all([
        // IDs are in order like above
        "265569046425108481",
        "219117197178568708",
        "396459305961914369",
        "291607550825332736",
        "109710323094683648",
        "102341036403068928",
        "422650822254526474",
        "292452611200909313",
        "267103945346908161",
        "183555431937998849",
        "552245318146850825",
        "511447531402559488",
    ].map(id => users.fetch(id, true)
         .then(user => user.displayAvatarURL({ format: user.avatar.startsWith('a_') ? 'gif' : 'png', size: 2048 }))
         .catch(() => "https://cdn.discordapp.com/embed/avatars/0.png")
    ));
    res.render("index.ejs", {
        avatars: {
            benAvatar,
            austinAvatar,
            toastAvatar,
            jackAvatar,
            kelwingAvatar,
            codfishAvatar,
            jaspAvatar,
            chaseAvatar,
            tigerAvatar,
            karnageAvatar,
            sentryAvatar,
            blueAvatar,
        },
        guilds: {
            furRetreat
        }
    });
});

module.exports = router;
