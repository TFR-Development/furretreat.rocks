const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const { users, guilds } = req.client

    const furRetreat = guilds.cache.get("569747786199728150");

    const [
        benjiAvatar,
        toastAvatar,
        jackAvatar,
        kelwingAvatar,
        lewisAvatar,
        austinAvatar,
        jasperAvatar,
        strifeAvatar,
        angelAvatar,
        winstonAvatar,
        tropicalAvatar,
        rileyAvatar
    ] = await Promise.all([
        // IDs are in order like above
        "265569046425108481",
        "396459305961914369",
        "291607550825332736",
        "109710323094683648",
        "176371068448145408",
        "219117197178568708",
        "422650822254526474",
        "469753186962374657",
        "280864874878337024",
        "286942968550785025",
        "547950545910890498",
        "304010736064135168"
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
            strifeAvatar,
            angelAvatar,
            winstonAvatar,
            tropicalAvatar,
            rileyAvatar
        },
        guilds: {
            furRetreat
        }
    });
});

module.exports = router;
