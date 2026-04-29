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
    subtitle: 'Security Engineer | AI & Detection Engineering',
    description: 'Security Engineer at Amazon specializing in AI/LLM Security, Detection Engineering, and Cloud Hardening.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Abhishek Sharma - Security Portfolio'
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'Tags', href: '/tags' }
    ],
    footerNavLinks: [
        { text: 'About', href: '/about' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/abhisheksec' },
        { text: 'GitHub', href: 'https://github.com/abhisheksec' }
    ],
    socialLinks: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/abhisheksec' },
        { text: 'GitHub', href: 'https://github.com/abhisheksec' }
    ],
    hero: {
        title: 'Securing AI Infrastructure & Enterprise Assets',
        text: "I'm **Abhishek Sharma**, a Security Engineer at **Amazon** specializing in Detection Engineering and Insider Threat mitigation. \n\nI am currently bridging the gap between traditional SecOps and the future of AI through **LLM Red Teaming** and **GenAI Triage Automation**. With a Master’s in Cybersecurity and 8+ years of experience across Amazon and Deloitte, I build automated frameworks to defend against complex adversarial TTPs in GCP and AWS environments.",
        image: {
            src: hero,
            alt: 'Abhishek Sharma sitting at a desk'
        },
        actions: [
            { text: 'Explore My Research', href: '/blog' },
            { text: 'View Resume', href: '/about' }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Stay Secure',
        text: 'Latest insights on LLM Security and Detection Engineering.',
        form: { action: '#' }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
