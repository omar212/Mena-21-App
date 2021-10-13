import starbucks from '../assests/ClaimCards/starbucksCard.png'
import adidas from '../assests/ClaimCards/adidasCard.png'
import macys from '../assests/ClaimCards/macysCard.png'
import americanEagle from '../assests/ClaimCards/americanEagleCard.png'
import amazon from '../assests/ClaimCards/amazonCard.png'
import hnm from '../assests/ClaimCards/HNMCard.png'
import nike from '../assests/ClaimCards/nikeCard.png'
import sephora from '../assests/ClaimCards/sephoraCard.png'
import ulta from '../assests/ClaimCards/ultaCard.png'
import coldStone from '../assests/ClaimCards/coldStoneCard.png'

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
import mena21 from '../assests/CardImages/mena21.jpg'


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
            { answerText: 'Vampire Diaries', isCorrect: false, submitText: "Tbh I hated the show, so I'm sorry definitly not this one" },
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
            { answerText: 'Carrots', isCorrect: false, submitText: 'Naaasty.' },
            { answerText: 'Dragonfruit', isCorrect: false, submitText: "What even is that ?" },
            { answerText: 'Apples', isCorrect: false, submitText: "Too much acid and I know my princess has an acid problem." },
            { answerText: 'Strawberry', isCorrect: true, submitText: "Now that's the right answer sliced, fresh, and hand fed strawberries 🍓"  },
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
            { answerText: 'King Kullen', isCorrect: true, submitText: "You probably only been here twice in your whole life LOL." },
            { answerText: 'Western Beef', isCorrect: false, submitText: "My princess is way too boujie for western beef LOL"  },
        ],
        rewardCardImage: amazon,
        rewardTitle: 'Amazon',
        claimCode: '0000000000',
        link: 'https://www.amazon.com/',
        cardImage: mena13,
    },
    {
        id: 14,
        questionText: 'How long do you want to wait after getting married to have kids ?',
        answerOptions: [
            { answerText: '1 day', isCorrect: false, submitText: 'LMAO nah calm down.' },
            { answerText: '1 month', isCorrect: false, submitText: "No thank you." },
            { answerText: '1 year', isCorrect: false, submitText: "I don't think so, let's bump those numbers up." },
            { answerText: '2 years', isCorrect: true, submitText: "Yea I know you're going to need a 2 year break so you can enjoy life with no crying babies lol 🤣 💜"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena14,
    },
    {
        id: 15,
        questionText: "What are your pet peeves ?",
        answerOptions: [
            { answerText: 'Dirty floors', isCorrect: false, submitText: "Even I learned to never throw anything on the floor but there's more" },
            { answerText: 'Unclosed closets', isCorrect: false, submitText: "We don't want the boogeyman to come out 😱 but there's more" },
            { answerText: 'Dirty bathroom', isCorrect: false, submitText: "Naasty and true, but there's more." },
            { answerText: 'All of the above', isCorrect: true, submitText: "Yea that sounds much more like it, my babe is a clean freak and I'm so grateful for that 💜"  },
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
        questionText: 'How many kids do you want ?',
        answerOptions: [
            { answerText: '1', isCorrect: false, submitText: "No you don't want the poor kid to be an only child 🥺 " },
            { answerText: '2', isCorrect: false, submitText: "2 is pretty fair but it's not a full team" },
            { answerText: '3', isCorrect: true, submitText: "Inshallah we could get a Lucky 3, oldest to be a boy, one could be dumb, but thankfully we have a 3rd one to cover that lol" },
            { answerText: '8', isCorrect: true, submitText: "8 ARE YOU CRAZY ??? HOW WE GONNA EAT 😭 we gonna have to go to Costco Everyday 😭"  },
        ],
        rewardCardImage: starbucks,
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena17,
    },
    {
        id: 18,
        questionText: 'What is your favorite quote?',
        answerOptions: [
            { answerText: 'Just do it', isCorrect: false, submitText: "When's the last time you did anything LMAO" },
            { answerText: 'YOLO', isCorrect: false, submitText: "Drake said it best, but lowkey this would be my favorite quote." },
            { answerText: "I'm lovin it", isCorrect: false, submitText: "This ain't McDonalds and if you chose this I'm concered on what you eating lol" },
            { answerText: 'E.H.F.a.R', isCorrect: true, submitText: " 'Everything happens for a reason', My princess lives through this quote and I'm grateful for everthing that happened to me so I could be led me to you 💜"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena18,
    },
    {
        id: 19,
        questionText: "What is your favorite dessert?",
        answerOptions: [
            { answerText: 'Carrot Cake', isCorrect: false, submitText: "Naasty, not even sure why they make this" },
            { answerText: 'Creme Brulee', isCorrect: false, submitText: "Babe that's my favourite dessert, stop copying me." },
            { answerText: 'Cheesecake', isCorrect: false, submitText: "One day this will be your favourite, soon very soon lol just not today" },
            { answerText: 'Cookies & Ice Cream', isCorrect: true, submitText: "COOKIES AND CREAM, ugh you making me crave some right now too <3"  },
        ],
        rewardCardImage: coldStone,
        rewardTitle: 'Cold Stone',
        claimCode: '0000000000',
        link: 'https://www.coldstone.com/',
        cardImage: mena19,
    },
    {
        id: 20,
        questionText: "What's your favourite word(s) to call Omar ?",
        answerOptions: [
            { answerText: 'Slow', isCorrect: false, submitText: "Yes that's true, what can I say sometimes things and words move too quickly 😭 but I know there's more" },
            { answerText: 'Lost', isCorrect: false, submitText: "Yes that's true too, idk directions are just not clear sometimes " },
            { answerText: 'Bum',  isCorrect: false, submitText: "Yes that's true too, I can't lie, I love my sleep 😭 but I know there's more." },
            { answerText: 'Sadly All', isCorrect: true, submitText: "That sounds more like it, I know you love me and you only say these words cause you want me to get better 🙄"  },
        ],
        rewardCardImage: amazon,
        rewardTitle: 'Amazon',
        claimCode: '0000000000',
        link: 'https://www.amazon.com/',
        cardImage: mena20,
    },
    {
        id: 21,
        questionText: "Final Question ... What are the 3 questions that Omar always ask you at the end of the night ?",
        answerOptions: [
            { answerText: 'Any Questions', isCorrect: false, submitText: "How much do you love me ? well it doesn't matter cause I always win" },
            { answerText: 'Any Concerns', isCorrect: false, submitText: "There better not be after all this LOL." },
            { answerText: 'Any Remarks', isCorrect: false, submitText: "Thank you for playing my games princess, You're gorgeous in every picture you take if you haven't noticed lol, Super smart for getting this far, and a Queen for being with this King " },
            { answerText: 'All of the Above', isCorrect: true, submitText: "AH, you did it, I'm proud of you princess, I will continue to ask you these questions my whole life inshallah just to prove to you the love I have for you will never change 💜"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/',
        cardImage: mena21,
    },
    // {
    //     id: 22,
    //     rewardCardImage: starbucks,
    //     rewardTitle: 'Starbucks',
    //     claimCode: '0000000000',
    //     link: 'https://www.starbucks.com/',
    // },
    // {
    //     id: 23,
    //     rewardCardImage: starbucks,
    //     rewardTitle: 'Starbucks',
    //     claimCode: '0000000000',
    //     link: 'https://www.starbucks.com/',
    // },

];

export default questions;