import starbucks from '../assests/ClaimCards/starbucksCard.png'
import adidas from '../assests/ClaimCards/adidasCard.png'
import macys from '../assests/ClaimCards/macysCard.png'
import americanEagle from '../assests/ClaimCards/americanEagleCard.png'
import amazon from '../assests/ClaimCards/amazonCard.png'
import hnm from '../assests/ClaimCards/HNMCard.png'
import nike from '../assests/ClaimCards/nikeCard.png'
import sephora from '../assests/ClaimCards/sephoraCard.png'
import ulta from '../assests/ClaimCards/ultaCard.png'

const questions = [
    {
        id: 1,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol." },
            { answerText: 'Mena', isCorrect: true, submitText: "Now that's the right answer babe, I wouldn't want anyone else in the world to be stuck than you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/'
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
        link: 'https://www.adidas.com/'
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
        link: 'https://www.macys.com/'
    },
    {
        id: 4,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/'
    },
    {
        id: 5,
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 6,
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 7,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena (My Princess)', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/'
    },
    {
        id: 8,
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 9,
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 10,
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 11,
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 12,
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 13,
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
        link: 'https://www.starbucks.com/'
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
        link: 'https://www.starbucks.com/'
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 16,
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
        link: 'https://www.starbucks.com/'
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
        link: 'https://www.starbucks.com/'
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
        link: 'https://www.starbucks.com/'
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
        link: 'https://www.starbucks.com/'
    },
    {
        id: 20,
        questionText: 'If I could choose one person to be alone on an island with for the rest of my life who it would be ?',
        answerOptions: [
            { answerText: 'Drake', isCorrect: false, submitText: 'LOL you really would of thought I was going to pick Drake, try again pretty.' },
            { answerText: 'Beyonce', isCorrect: false, submitText: "She is taken by Jay Z, that's not nice, try again princess." },
            { answerText: 'Shakira', isCorrect: false, submitText: "Way too old for me and I don't do FOBS you know that lol, try again cutie." },
            { answerText: 'Mena', isCorrect: true, submitText: "Now that's the right answer babe, wouldn't want anyone else in the world to be stuck then you <3"  },
        ],
        rewardCardImage: starbucks,
        rewardTitle: 'Starbucks',
        claimCode: '0000000000',
        link: 'https://www.starbucks.com/'
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
        link: 'https://www.starbucks.com/'
    },

];

export default questions;