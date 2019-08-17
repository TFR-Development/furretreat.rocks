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
        codfishAvatar,
        foxeldruAvatar,
        jaspAvatar,
        samoyedAvatar,
        pjayAvatar,
        sentryAvatar,
        tigerAvatar,
        blueAvatar,
        gideonAvatar,
        jaydenAvatar,
        kelwingAvatar,
        vladAvatar,
    ] = await Promise.all([
        // IDs are in order like above
        "265569046425108481",
        "219117197178568708",
        "396459305961914369",
        "291607550825332736",
        "102341036403068928",
        "302787989384462336",
        "422650822254526474",
        "195406632224555009",
        "400840326836781067",
        "552245318146850825",
        "267103945346908161",
        "511447531402559488",
        "524371727812263948",
        "503105733701926922",
        "109710323094683648",
        "139836912335716352",
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
            codfishAvatar,
            foxeldruAvatar,
            jaspAvatar,
            samoyedAvatar,
            pjayAvatar,
            sentryAvatar,
            tigerAvatar,
            blueAvatar,
            gideonAvatar,
            jaydenAvatar,
            kelwingAvatar,
            vladAvatar,
        },
        guilds: {
            furRetreat
        }
    });
});

module.exports = router;
