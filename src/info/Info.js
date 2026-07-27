import self from "../img/self.png"

import mock1 from "../img/mock1.webp"
import mock2 from "../img/mock2.webp"
import mock3 from "../img/mock3.webp"
import mock4 from "../img/mock4.webp"
import mock5 from "../img/mock5.webp"
import mock6 from "../img/mock6.webp"
import mock7 from "../img/mock7.webp"
import mock8 from "../img/mock8.webp"
import mock9 from "../img/mock9.webp"
import mock10 from "../img/mock10.webp"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "alsruf",
    lastName: "",
    initials: "alsruf", // the example uses first and last, but feel free to use three or more if you like.
    position: "a VRChat User",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '',
            text: 'KOREAN'
        },
        {
            emoji: '',
            text: 'MALE'
        },
        {
            emoji: "",
            text: "FBT"
        },
        {
            emoji: "",
            text: "Facial"
        }
    ],
    socials: [
        {
            link: "https://twitter.com/alsruf2p",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://twitter.com/alsruf2y",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://www.youtube.com/@alsruf2p",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://www.postype.com/@alsruf/series/1378878?sort=publishedAt%2Casc",
            icon: "fa fa-paragraph",
            label: 'blog'
        }

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Keep that in mind. Maybe I can't do what you want. But I will mean it. Even if I falsely remain with you.",
    skills:
        {
            proficientWith: ['R-18', 'Kawai User'],
            exposedTo: ['High Tone', 'Mans Female Voice', 'Male Avatar', 'Desktop User', 'Horror World']
        }
    ,
    hobbies: [
        {
            label: 'Writing',
            emoji: ''
        },
        {
            label: 'Blogging',
            emoji: ''
        },
        {
            label: 'Investing',
            emoji: ''
        },
        {
            label: 'Music',
            emoji: ''
        },
        {
            label: 'R-18',
            emoji: ''
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "",
            image: mock1
        },
        {
            title: "",
            image: mock2
        },
        {
            title: "",
            image: mock3
        },
        {
            title: "",
            image: mock4
        },
        {
            title: "",
            image: mock5
        },
        {
            title: "",
            image: mock6
        },
        {
            title: "",
            image: mock7
        },
        {
            title: "",
            image: mock8
        },
        {
            title: "",
            image: mock9
        },
        {
            title: "",
            image: mock10
        },
        {
            title: "",
            youtubeId: "kIOagSl7cY8"
        },
        {
            title: "",
            youtubeId: "0UI1xHl5JWY"
        },
        {
            title: "",
            youtubeId: "07vzKW8xJ0Q"
        },
        {
            title: "",
            youtubeId: "nGc8EJhftvk"
        },

    ]
}