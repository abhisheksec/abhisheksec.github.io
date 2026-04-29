import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://abhisheksec.com',
    avatar: {
        src: avatar,
        alt: 'Abhishek Sharma'
    },
    title: 'Abhishek Sharma',
    subtitle: 'Security Engineer',
    description: 'Security Engineer specializing in AI Security, LLM Red Teaming, and Enterprise Network Defense.',
    image: {
        src: '/dante-preview.jpg', // You can update this later with a personal preview image
        alt: 'Abhishek Sharma - Security Portfolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/abhisheksec'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/abhisheksec'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/abhisheksec'
        }
    ],
    hero: {
        title: 'Securing the Future of AI & Infrastructure',
        text: "I'm **Abhishek Sharma**, a Security Engineer focused on the intersection of automated threat detection and the emerging frontiers of **AI Safety**.\n\nCurrently, I specialize in **LLM Red Teaming**, identifying vulnerabilities like prompt injection, and hardening enterprise networks. With a background in securing high-scale systems at Amazon, I build automated solutions to defend against modern adversarial tactics.\n\nExplore my [technical write-ups](/blog) or see my latest [security projects](/projects).",
        image: {
            src: hero,
            alt: 'Abhishek Sharma - Security Engineer'
        },
        actions: [
            {
                text: 'View My Focus Areas',
                href: '/about'
            }
        ]
    },
    subscribe: {
        enabled: false, // Turned off for now to keep your site clean
        title: 'Stay Updated',
        text: 'Get my latest security research and lab write-ups.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
