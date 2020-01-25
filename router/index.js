const express = require("express");
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
        lewisAvatar,
        jaspAvatar,
        chaseAvatar,
        tigerAvatar,
        strifeAvatar,
        angelAvatar,
        reinheitAvatar,
        tropicalAvatar,
        karnageAvatar,
        sentryAvatar,
        zarelAvatar,
        forestAvatar
    ] = await Promise.all([
        // IDs are in order like above
        "265569046425108481",
        "219117197178568708",
        "396459305961914369",
        "291607550825332736",
        "109710323094683648",
        "176371068448145408",
        "422650822254526474",
        "292452611200909313",
        "267103945346908161",
        "469753186962374657",
        "280864874878337024",
        "286942968550785025",
        "547950545910890498",
        "183555431937998849",
        "552245318146850825",
        "538148951614816256",
        "469408379878506496"
    ].map((id) => users.fetch(id, true)
         .then((user) => user.displayAvatarURL({ format: user.avatar.startsWith("a_") ? "gif" : "png", size: 2048 }))
         .catch(() => "https://cdn.discordapp.com/embed/avatars/0.png")
    ));
    res.render("index.ejs", {
        avatars: {
            benAvatar,
            austinAvatar,
            toastAvatar,
            jackAvatar,
            kelwingAvatar,
            lewisAvatar,
            jaspAvatar,
            chaseAvatar,
            tigerAvatar,
            strifeAvatar,
            angelAvatar,
            reinheitAvatar,
            tropicalAvatar,
            karnageAvatar,
            sentryAvatar,
            zarelAvatar,
            forestAvatar
        },
        guilds: {
            furRetreat
        }
    });
});

module.exports = router;
