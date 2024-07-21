import { html, css, js, jsx, tailwind, mongo, firebase, figma, xd, github, ps} from "../assets/icons/index"

export const statistics = [
    { value: '0.2', label: 'Years of Experience' },
    { value: '3+', label: 'Projects Completed' },
];

export const recentProjects = [
    { name: 'Xernia' 
        about: 'An Indian Clothing Store', 
        link: 'https://xernia.vercel.app',
        used: [
            { lang: 'ReactJS'},
            { lang: 'Tailwind'},
        ], 
        
    },
    {   
        name: 'Vaarta', 
        about: 'An aesthetically pleasing chatting app', 
        link: 'https://xevaarta.vercel.app/',
        used: [
            { lang: 'HTML'},
            { lang: 'CSS'},
            { lang: 'JS'},
            { lang: 'React'},
            { lang: 'Firestore'}
        ], 
        
    },
    { name: 'Spotify-Clone', 
        about: 'Listen to music ( Web Only )', 
        link: 'https://xekrishna.github.io/spotify-clone/',
        used: [
            { lang: 'HTML'},
            { lang: 'CSS'},
            { lang: 'JS'},
        ], 
    },
    
    { name: '...', 
        about: 'Nothing to see here', 
        link: 'https://youtu.be/dQw4w9WgXcQ?si=Nt2JqkWDx-X7ASop',
        used: [
            { lang: '#'},
            { lang: '#'},
            { lang: '#'},
        ], 
        
    },
];

export const mySkills = [
    { name: "WebDevelopment",
        components: [
        { object : 'HTML', value : '95%', link:html  },
        { object : 'CSS', value : '90%', link:css  },
        { object : 'JS', value : '85%', link:js  },
        { object : 'React', value : '80%', link:jsx  },
        { object : 'Tailwind', value : '82%', link:tailwind  },
        { object : 'Firebase', value : '60%', link:firebase  },
        ],
    },
    { name: "UI/UX Designing",
        components: [
        { object : 'Figma', value : '70%', link:figma  },
        { object : 'Adobe XD', value : '65%', link:xd  },
        { object : 'Adobe Photoshop', value : '80%', link: ps },
        ],
    }
];


