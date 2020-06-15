export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const ACCESS_TOKEN = 'accessToken';

export const POLL_LIST_SIZE = 30;
export const MAX_CHOICES = 6;
export const POLL_QUESTION_MAX_LENGTH = 140;
export const POLL_CHOICE_MAX_LENGTH = 40;

export const NAME_MIN_LENGTH = 4;
export const NAME_MAX_LENGTH = 40;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

export const ARTICLE_DETAIL_RESPONSE = [
    {
        "id":1,
        "author":"Michael Thompson",
        "contentType":"text/html; charset=utf-8",
        "date":"2019-07-09T20:19:38.786Z",
        "description":"Your career forms one relationship at a time, not from one job to the next",
        "favicon":"https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png",
        "image":"https://miro.medium.com/max/1200/1*hlrhoatYRtS8jzsdZbvPXg.jpeg",
        "publisher":"Medium",
        "title":"59 Conversation Starters to Get The Most Out of Networking Events",
        "url":"https://medium.com/better-marketing/59-conversation-starters-to-get-the-most-out-of-networking-events-f7aca2795c83"
    },
    {
        "id":2,
        "author":"Seattle Data Guy",
        "contentType":"text/html; charset=utf-8",
        "date":"2020-05-07T14:50:37.050Z",
        "description":"Improve your skills in web development, programming, UI, automation and more",
        "favicon":"https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png",
        "image":"https://miro.medium.com/max/1200/1*nIjfoUR90CUKibydNhq_Bw.jpeg",
        "publisher":"Medium",
        "title":"10 Great Programming Projects to Improve Your Resume and Learn to Program",
        "url":"https://levelup.gitconnected.com/10-great-programming-pro…-to-improve-your-resume-and-learn-to-program-74b14d3e9e16"  
    },
    {
        "id":3,
        "author":"Carey Wodehouse October 2, 2018 • 22 Min Read",
        "contentType":"text/html; charset=UTF-8",
        "date":"2018-10-03T00:06:50.000Z",
        "description":"A guide to back-end development including articles coveri…ing, middleware, the cloud, databases, servers, and more.",
        "favicon":"https://www.upwork.com/favicon.ico",
        "image":"https://content-static.upwork.com/blog/uploads/sites/3/2017/05/30221729/Your-Complete-Guide-to-Back-End-Web-Development-feature.jpg",
        "publisher":"Hiring Headquarters",
        "title":"A Beginner's Guide to Back-end Development",
        "url":"https://www.upwork.com/hiring/development/a-beginners-guide-to-back-end-development/"
    },
    {
        "id":4,
        "author":"Mayukh Nair",
        "contentType":"text/html; charset=utf-8",
        "date":"2017-11-21T13:27:11.069Z",
        "description":"Not long ago, House of Cards came back for the fifth seas... a long wait for binge watchers across the world who are…",
        "favicon":"https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png",
        "image":"https://miro.medium.com/max/1200/1*T2CzKMo8aU02pxQmcYS4Bg.png",
        "publisher":"Medium",
        "title":"How Netflix works: the (hugely simplified) complex stuff that happens every time you hit Play",
        "url":"https://medium.com/refraction-tech-everything/how-netflix-works-the-hugely-simplified-complex-stuff-that-happens-every-time-you-hit-play-3a40c9be254b"
    },
    {
        "id":5,
        "author":"Michael Thompson",
        "contentType":"text/html; charset=utf-8",
        "date":"2019-07-09T20:19:38.786Z",
        "description":"Your career forms one relationship at a time, not from one job to the next",
        "favicon":"https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png",
        "image":"https://miro.medium.com/max/1200/1*hlrhoatYRtS8jzsdZbvPXg.jpeg",
        "publisher":"Medium",
        "title":"59 Conversation Starters to Get The Most Out of Networking Events",
        "url":"https://medium.com/better-marketing/59-conversation-starters-to-get-the-most-out-of-networking-events-f7aca2795c83"
    },
    {
        "id":6,
        "author":"Seattle Data Guy",
        "contentType":"text/html; charset=utf-8",
        "date":"2020-05-07T14:50:37.050Z",
        "description":"Improve your skills in web development, programming, UI, automation and more",
        "favicon":"https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png",
        "image":"https://miro.medium.com/max/1200/1*nIjfoUR90CUKibydNhq_Bw.jpeg",
        "publisher":"Medium",
        "title":"10 Great Programming Projects to Improve Your Resume and Learn to Program",
        "url":"https://levelup.gitconnected.com/10-great-programming-pro…-to-improve-your-resume-and-learn-to-program-74b14d3e9e16"  
    },
    {
        "id":7,
        "author":"Carey Wodehouse October 2, 2018 • 22 Min Read",
        "contentType":"text/html; charset=UTF-8",
        "date":"2018-10-03T00:06:50.000Z",
        "description":"A guide to back-end development including articles coveri…ing, middleware, the cloud, databases, servers, and more.",
        "favicon":"https://www.upwork.com/favicon.ico",
        "image":"https://content-static.upwork.com/blog/uploads/sites/3/2017/05/30221729/Your-Complete-Guide-to-Back-End-Web-Development-feature.jpg",
        "publisher":"Hiring Headquarters",
        "title":"A Beginner's Guide to Back-end Development",
        "url":"https://www.upwork.com/hiring/development/a-beginners-guide-to-back-end-development/"
    },
    {
        "id":8,
        "author":"Mayukh Nair",
        "contentType":"text/html; charset=utf-8",
        "date":"2017-11-21T13:27:11.069Z",
        "description":"Not long ago, House of Cards came back for the fifth seas... a long wait for binge watchers across the world who are…",
        "favicon":"https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png",
        "image":"https://miro.medium.com/max/1200/1*T2CzKMo8aU02pxQmcYS4Bg.png",
        "publisher":"Medium",
        "title":"How Netflix works: the (hugely simplified) complex stuff that happens every time you hit Play",
        "url":"https://medium.com/refraction-tech-everything/how-netflix-works-the-hugely-simplified-complex-stuff-that-happens-every-time-you-hit-play-3a40c9be254b"
    }
];
