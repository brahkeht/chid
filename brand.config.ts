/**
 * Brand Configuration
 * Centralized configuration for all brandable information
 */

export const brandConfig = {
    // Company Information
    name: 'Chain Aid',
    nameFormatted: 'chainaid', // lowercase version for logo
    tagline: 'Report Crypto Scams',
    description: 'Making the crypto ecosystem safer by empowering the community to report and track malicious activity.',
    mission: 'We are on a mission to make crypto safe and trusted for the next billion users.',

    // Logo Configuration
    logo: {
        prefix: 'chain',    // Blue colored part
        suffix: 'aid',    // White colored part
    },

    // Contact Information
    contact: {
        email: {
            general: 'info@chainaid.com',
            support: 'support@chainaid.com',
            partnerships: 'partnerships@chainaid.com',
            hello: 'hello@chainaid.com',
        },
        address: {
            street: '548 Brannan Street',
            city: 'San Francisco',
            state: 'CA',
            zip: '94107',
            country: 'United States',
        },
    },

    // Social Media Links
    social: {
        twitter: 'https://twitter.com/chainaid',
        linkedin: 'https://linkedin.com/company/chainaid',
        github: 'https://github.com/chainaid',
    },

    // Website URLs
    urls: {
        website: 'https://chainaid.com',
        report: 'https://chainaid.com/report',
        faqs: 'https://chainaid.com/faq',
        api: 'https://api.chainaid.com',
    },

    // Internal Routes
    routes: {
        home: '/',
        report: '/report',
        leaderboard: '/leaderboard',
        reports: '/reports',
        successStories: '/success-stories',
        about: '/about',
        faq: '/faq',
        glossary: '/scam-glossary',
        contact: '/contact',
        login: '/login',
        register: '/register',
        dashboard: '/dashboard',
    },

    // Legal
    legal: {
        copyright: (year: number) => `© ${year} chainaid. All rights reserved.`,
    },

    // Partners
    poweredBy: 'TRM Labs',

    // Alert Messages
    alerts: {
        security: "We'll never ask for payment, passwords, or personal info you don't choose to share. Stay alert.",
    },
};

// Helper function to format full address
export const getFullAddress = () => {
    const { street, city, state, zip, country } = brandConfig.contact.address;
    return `${street}, ${city}, ${state} ${zip}, ${country}`;
};

export default brandConfig;
