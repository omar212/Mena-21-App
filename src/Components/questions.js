import starbucks from '../assests/ClaimCards/starbucksCard.png'
import adidas from '../assests/ClaimCards/adidasCard.png'
import macys from '../assests/ClaimCards/macysCard.png'
import americanEagle from '../assests/ClaimCards/americanEagleCard.png'
import amazon from '../assests/ClaimCards/amazonCard.png'
import hnm from '../assests/ClaimCards/HNMCard.png'
import nike from '../assests/ClaimCards/nikeCard.png'
import sephora from '../assests/ClaimCards/sephoraCard.png'
import ulta from '../assests/ClaimCards/ultaCard.png'

import mena1 from '../assests/CardImages/mena1.jpg'
import mena2 from '../assests/CardImages/mena2.png'
import mena3 from '../assests/CardImages/mena3.PNG'
import mena4 from '../assests/CardImages/mena4.PNG'
import mena5 from '../assests/CardImages/mena5.PNG'
import mena6 from '../assests/CardImages/mena6.PNG'
import mena7 from '../assests/CardImages/mena7.PNG'
import mena8 from '../assests/CardImages/mena8.PNG'
import mena9 from '../assests/CardImages/mena9.PNG'
import mena10 from '../assests/CardImages/mena10.PNG'
import mena11 from '../assests/CardImages/mena11.jpg'
import mena12 from '../assests/CardImages/mena12.jpg'
import mena13 from '../assests/CardImages/mena13.jpg'
import mena14 from '../assests/CardImages/mena14.PNG'
import mena15 from '../assests/CardImages/mena15.jpg'
import mena16 from '../assests/CardImages/mena16.jpg'
import mena17 from '../assests/CardImages/mena17.PNG'
import mena18 from '../assests/CardImages/mena18.PNG'
import mena19 from '../assests/CardImages/mena19.PNG'
import mena20 from '../assests/CardImages/mena20.jpg'
// import mena21 from '../assests/CardImages/mena21.PNG'


const questions = [
    {
        id: 1,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol." },
            { answerText: 'Mena', isCorrect: true, submitText: "Now that's the right answer babe, I wouldn't want anyone else in the world to be stuck than you 💜"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena1,
    },
    {
        id: 2,
        questionText: 'Who is the best fashion designer in the world ?',
        answerOptions: [
            { answerText: 'Louis Vutton', isCorrect: false, submitText: 'He is alright, only if his cloths were just a bit cheaper.'},
            { answerText: 'Yves Saint Lauren', isCorrect: false, submitText: "I know you think this is the answer, but I promise you it's not about the designer it's about the person." },
            { answerText: 'Mena Elkafafi', isCorrect: true, submitText: "Correct Pretty! All your fits are fire and creative, you're the best in the game 🔥"  },
            { answerText: 'Coco Chanel', isCorrect: false, submitText: "She supported Hitler, so it's definitly a no." },
            
        ],
        rewardCardImage: adidas,
        rewardTitle: 'Adidas',
        claimCode: '0000000000',
        link: 'https://www.adidas.com/',
        cardImage: mena2,
    },
    {
        id: 3,
        questionText: 'What is your favorite food ?',
        answerOptions: [
            { answerText: 'Soup', isCorrect: false, submitText: 'One day you will love soup as much as me lol.' },
            { answerText: 'Oatmeal', isCorrect: false, submitText: "Naaasstyyy." },
            { answerText: 'Fish', isCorrect: false, submitText: "I know you would rather not ever eat again, but when we're married inshallah that will change lol." },
            { answerText: 'Sushi', isCorrect: true, submitText: "AHH SALMON SKIN ROLL, great job princess <3"  },
        ],
        rewardCardImage: macys,
        rewardTitle: 'macys',
        claimCode: '0000000000',
        link: 'https://www.macys.com/',
        cardImage: mena3,
    },
    {
        id: 4,
        questionText: 'What is your favorite TV show ?',
        answerOptions: [
            { answerText: 'Dexter', isCorrect: false, submitText: 'Too much blood, and my princess does not like blood.' },
            { answerText: 'Squid Games', isCorrect: false, submitText: "It would of been if they didn't do my brother Ali like that 🥺 " },
            { answerText: 'Breaking Bad', isCorrect: false, submitText: "It." },
            { answerText: 'FRIENDS', isCorrect: true, submitText: "OBVIOUSLY, BEST SHOW IN THE WORLD FRIENDS 4 LIFE, I must give credit to my princess for showing me this show 💜"  },
        ],
        rewardCardImage: americanEagle,
        rewardTitle: 'American Eagle',
        claimCode: '0000000000',
        link: 'https://www.americaneagle.com/',
        cardImage: mena4,
    },
    {
        id: 5,
        questionText: 'Where is your fantasy vacation?',
        answerOptions: [
            { answerText: 'Maldives', isCorrect: false, submitText: 'LOL babe vacation, not honeymoon smh.' },
            { answerText: 'India', isCorrect: false, submitText: "Good try, but I know you not trying to do number 3 everyday lol." },
            { answerText: 'Egypt', isCorrect: false, submitText: "Been there, done that, try something different." },
            { answerText: 'Europe', isCorrect: true, submitText: "YES, travel all of Europe, take the train and go from London all the way to Italy, pls take me with u 💜"  },
        ],
        rewardCardImage: hnm,
        rewardTitle: 'H&M',
        claimCode: '0000000000',
        link: 'https://www.hm.com/',
        cardImage: mena5,
    },
    {
        id: 6,
        questionText: 'On a scale from 1 to a lot, how much do you think Omar loves you ?',
        answerOptions: [
            { answerText: '1', isCorrect: false, submitText: 'COME ON PRETTY' },
            { answerText: '-1', isCorrect: false, submitText: "LOL Soooo funny." },
            { answerText: '0', isCorrect: false, submitText: "you really think that LOL" },
            { answerText: '# of insects', isCorrect: true, submitText: "15 quintillion lol bravo princess 💜"  },
        ],
        rewardCardImage: nike,
        rewardTitle: 'Nike',
        claimCode: '0000000000',
        link: 'https://www.nike.com/',
        cardImage: mena6,
    },
    {
        id: 7,
        questionText: "What's one of your favorite hobbies ?",
        answerOptions: [
            { answerText: 'Playing COD', isCorrect: false, submitText: "LOL no pretty that's my favorite hobby" },
            { answerText: 'Playing basketball', isCorrect: false, submitText: "HUGE 🧢" },
            { answerText: 'Watching Netlix', isCorrect: true, submitText: "That sounds more like you pretty, a professional Netflix watcher 😘"},
            { answerText: 'Reading Books', isCorrect: false, submitText: "LMAO imagine 🤣 " },
            
        ],
        rewardCardImage: sephora,
        rewardTitle: 'Sephora',
        claimCode: '0000000000',
        link: 'https://www.sephora.com/',
        cardImage: mena7,
    },
    {
        id: 8,
        questionText: "Where did you meet the love of your life 👀",
        answerOptions: [
            { answerText: 'Harvard', isCorrect: false, submitText: 'I need to know this guy because I need some help in my HW.' },
            { answerText: 'MIT', isCorrect: false, submitText: "Overrated, but also let me know his number just want to talk to him" },
            { answerText: 'Columbia', isCorrect: false, submitText: "Close, but I know a better school up the block that has better men lol" },
            { answerText: 'CCNY (AKA Prison)', isCorrect: true, submitText: "The only good thing to come out that school was our love"  },
        ],
        rewardCardImage: amazon,
        rewardTitle: 'Amazon',
        claimCode: '0000000000',
        link: 'https://www.amazon.com/',
        cardImage: mena8,
    },
    {
        id: 9,
        questionText: "What would you consider your best feature ?",
        answerOptions: [
            { answerText: 'Eyes', isCorrect: false, submitText: "Yea your eyes could take me around the world and I wouldn't even know I moved, but there's more" },
            { answerText: 'Hair', isCorrect: false, submitText: "As lucious and flawless as it is, I would comb it everyday of my life, because of how beautiful it is, but there's more" },
            { answerText: 'Face', isCorrect: false, submitText: "I can't even tell you how gorgeous I find your face, but there's more lol" },
            { answerText: 'LITERALLY EVERYTHING', isCorrect: true, submitText: "Couldn't have said it any better, a whole package plus more"  },
        ],
        rewardCardImage: ulta,
        rewardTitle: 'Ulta',
        claimCode: '0000000000',
        link: 'https://www.ulta.com/',
        cardImage: mena9,
    },
    {
        id: 10,
        questionText: 'What is your ideal wedding ?',
        answerOptions: [
            { answerText: 'In a church', isCorrect: false, submitText: 'HARAM PRETTY.' },
            { answerText: 'In a farm', isCorrect: false, submitText: "We're not white babe LOL." },
            { answerText: 'In a subway', isCorrect: false, submitText: "Come on I know you don't like that smelly train that much lol." },
            { answerText: 'In Egypt & In America', isCorrect: true, submitText: "Inshallah, we can have a beautiful one in both countries 💍"},
        ],
        rewardCardImage: amazon,
        rewardTitle: 'Amazon',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena10,
    },
    {
        id: 11,
        questionText:  "What is your favorite thing to do in terms of chores? ",
        answerOptions: [
            { answerText: 'Cleaning the dishes', isCorrect: false, submitText: "I know you're never in the mood for that" },
            { answerText: 'Cleaning Cats litter', isCorrect: false, submitText: "No matter how much you love her, I know you don't like doing that." },
            { answerText: 'Cleaning the Toilet', isCorrect: false, submitText: "NO THANK YOU lol." },
            { answerText: 'Vaccuming', isCorrect: true, submitText: "Now that's the right answer pretty, I know you just get a great satisfaction from cleaning the floor and how easy it is lol"  },
        ],
        rewardCardImage: amazon,
        rewardTitle: 'Amazon',
        claimCode: '0000000000',
        link: 'https://www.amazon.com/',
        cardImage: mena11,
    },
    {
        id: 12,
        questionText: 'What is your favorite fruit ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Dragonfruit', isCorrect: false, submitText: "What is that ?." },
            { answerText: 'Apples', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Strawberry', isCorrect: true, submitText: "Now that's the right answer sliced, fresh, and hand fed strawberries"  },
        ],
        rewardCardImage: nike,
        rewardTitle: 'Nike',
        claimCode: '0000000000',
        link: 'https://www.nike.com/',
        cardImage: mena12,
    },
    {
        id: 13,
        questionText: 'What is your favorite store ?',
        answerOptions: [
            { answerText: 'Costco', isCorrect: true, submitText: "C for Cassoc and C for Correct, can't wait to go costco shopping with you in the future and spend thosands of dollars in one day 😁" },
            { answerText: 'Shoprite', isCorrect: false, submitText: "Let's be honest, they really don't got anything special." },
            { answerText: 'King Kullen', isCorrect: false, submitText: "You probably only been here twice in your whole life LOL." },
            { answerText: 'Western Beef', isCorrect: true, submitText: "My princess is way too boujie for western beef LOL"  },
        ],
        rewardCardImage: amazon,
        rewardTitle: 'Amazon',
        claimCode: '0000000000',
        link: 'https://www.amazon.com/',
        cardImage: mena13,
    },
    {
        id: 14,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena (My Princess)', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena14,
    },
    {
        id: 15,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena (My Princess)', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena15,
    },
    {
        id: 16,
        questionText: 'What is your dream car ?',
        answerOptions: [
            { answerText: 'Genesis', isCorrect: false, submitText: "It should be to be honest, but sadly that's not the truth" },
            { answerText: 'Ford Truck', isCorrect: false, submitText: "Babe you won't be able to reach the door lol." },
            { answerText: 'Honda', isCorrect: false, submitText: "Please let's never touch a Honda." },
            { answerText: 'Tesla', isCorrect: true, submitText: "My princess loves touching buttons, and the telsa is perfect for that lol"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena16,
    },
    {
        id: 17,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena (My Princess)', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena17,
    },
    {
        id: 18,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena (My Princess)', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena18,
    },
    {
        id: 19,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena (My Princess)', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena19,
    },
    {
        id: 20,
        questionText: "How many numbers are there in a phone number ?",
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena20,
    },
    {
        id: 21,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena (My Princess)', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        // cardImage: mena21,
    },

];

export default questions;