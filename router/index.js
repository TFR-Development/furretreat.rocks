const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const { users, guilds } = req.client

    const furRetreat = guilds.get("569747786199728150");

    const [
        benjiAvatar,
        toastAvatar,
        jackAvatar,
        kelwingAvatar,
        lewisAvatar,
        austinAvatar,
        jasperAvatar,
        karnageAvatar,
        strifeAvatar,
        angelAvatar,
        winstonAvatar,
        tropicalAvatar
    ] = await Promise.all([
        // IDs are in order like above
        "265569046425108481",
        "396459305961914369",
        "291607550825332736",
        "109710323094683648",
        "176371068448145408",
        "219117197178568708",
        "422650822254526474",
        "183555431937998849",
        "469753186962374657",
        "280864874878337024",
        "702337874518999091",
        "547950545910890498"
    ].map((id) => users.fetch(id, true)
         .then((user) => user.displayAvatarURL({ format: user.avatar.startsWith("a_") ? "gif" : "png", size: 2048 }))
         .catch(() => "https://cdn.discordapp.com/embed/avatars/0.png")
    ));
    res.render("index.ejs", {
        avatars: {
            benjiAvatar,
            toastAvatar,
            jackAvatar,
            kelwingAvatar,
            lewisAvatar,
            austinAvatar,
            jasperAvatar,
            karnageAvatar,
            strifeAvatar,
            angelAvatar,
            winstonAvatar,
            tropicalAvatar
        },
        guilds: {
            furRetreat
        }
    });
});

module.exports = router;
