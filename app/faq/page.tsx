"use client";

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
    { id: 'general', label: 'General' },
    { id: 'reporting', label: 'Reporting' },
    { id: 'scam-support', label: 'Scam Support' },
    { id: 'data-privacy', label: 'Data / Privacy' },
    { id: 'partners', label: 'Partners' },
    { id: 'account-settings', label: 'Account settings' },
    { id: 'contact', label: 'Contact' },
];

const faqData = {
    general: {
        questions: [
            'Why Chainabuse?',
            'How does Chainabuse enable a safer Web3 for all?',
            'Who powers Chainabuse?',
            'Where are you headquartered?',
        ],
        content: [
            {
                question: 'Why Chainabuse?',
                answer: `Chainabuse is a crypto scam database, an ever-growing suite against fraud. So to compile how we use this data, then let's see what safety is to us and the action taken.

We enable anyone anywhere to report malicious crypto activity and to have their identity safe. We provide the largest victim-to-victim community.

Collectively share information about the crypto activities. Malicious activities that cannot always be detected geographically or for other safeguards.

Provide insights, reports, free support to victims of malicious activity.

Empower law enforcement to coordinate the fight against malicious crypto activity and uncover connections across jurisdictions.

Publish regular reports to increase safety.

This is possible, because we are driven by our mission to enable a safer financial system for the next billion users.`,
            },
            {
                question: 'How does Chainabuse enable a safer Web3 for all?',
                answer: `We enable anyone anywhere to report malicious crypto activity seamlessly while protecting their identity. We provide the largest victim-to-victim community.

We empower law enforcement to coordinate the fight against malicious crypto activity.

We help Law Enforcement worldwide to coordinate their prosecutions and investigations.

We enable our "partners to leverage the database to bring safety to their users.

We provide free preventive education content to all users through our Safety Support Center.`,
            },
            {
                question: 'Who powers Chainabuse?',
                answer: `We are powered by TRM Labs, a blockchain intelligence company that builds data intelligence and risk compliance solutions to detect crypto fraud and financial crime in digital assets.

Chainabuse is blessed by leading organizations, partners, and foundations with a vested interest in making crypto safer for the next billion users.`,
            },
            {
                question: 'Where are you headquartered?',
                answer: `Chainabuse is headquartered at 548 Brannan Street, San Francisco, CA 94107, United States.`,
            },
        ],
    },
    reporting: {
        questions: [
            'Why report malicious crypto activity on Chainabuse?',
            'How can I report on Chainabuse?',
            'Can I report privately?',
            'What do I need to include in my report?',
            'Do I need to create an account to report on Chainabuse?',
            'If I create an account, which questions can I contribute?',
            'Can I edit my report?',
            'Where can I see my reports?',
        ],
        content: [
            {
                question: 'Why report malicious crypto activity on Chainabuse?',
                answer: `Chainabuse enables you to report malicious crypto activity and to have your identity safe. We provide the largest victim-to-victim community.

By reporting on Chainabuse, you help us build the largest database of malicious crypto activity to help others stay safe.

In addition, when you report on Chainabuse, you can access specific information on our Safety Support Center, including prevention education, safety practices, and recovery options.`,
            },
            {
                question: 'How can I report on Chainabuse?',
                answer: `Every user who reports on Chainabuse will provide support on Chainabuse will provide:

• Information on the type of scam
• Information on the blockchain used
• Information on the address or domain used for the scam
• A description of what happened

In addition, users can access specific information on our Safety Support Center, including prevention education, safety practices, and recovery options.`,
            },
            {
                question: 'Can I report privately?',
                answer: `Yes, you can report privately. If you choose not to create an account, your report will be anonymous. If you create an account, you can choose to make your report public or private.`,
            },
            {
                question: 'What do I need to include in my report?',
                answer: `At minimum, you'll need to provide:
• The type of scam
• The blockchain or cryptocurrency involved
• The wallet address or domain used in the scam
• A brief description of what happened

The more details you provide, the more helpful your report will be to others and to investigators.`,
            },
            {
                question: 'Do I need to create an account to report on Chainabuse?',
                answer: `No, you do not need to create an account. You can submit a report anonymously. However, creating an account allows you to track your reports, receive updates, and contribute to the community.`,
            },
            {
                question: 'If I create an account, which questions can I contribute?',
                answer: `With an account, you can:
• Submit detailed reports with evidence
• Comment on other reports
• Vote on reports to verify their accuracy
• Track the status of your submissions
• Receive notifications about similar scams`,
            },
            {
                question: 'Can I edit my report?',
                answer: `Yes, if you created an account and submitted the report while logged in, you can edit your report at any time from your dashboard.`,
            },
            {
                question: 'Where can I see my reports?',
                answer: `If you're logged in, you can view all your reports in your account dashboard under "My Reports".`,
            },
        ],
    },
    'scam-support': {
        questions: [
            'How can I get support on my case?',
            'What type of support will I get?',
            'How much does it cost?',
            'How can I partner with you to support my users?',
            'What is the goal of the Safety Support Center?',
            'Which information can I find on the Support Center?',
            'Can I redirect my users to the Safety Center? Can you brand the content?',
        ],
        content: [
            {
                question: 'How can I get support on my case?',
                answer: `Every user who reports a scam on Chainabuse can opt-in to request free instant support on their case. Simply report your case here: https://chainabuse.com/report and opt-in to get support at the bottom of the form.`,
            },
            {
                question: 'What type of support will I get?',
                answer: `Every user who opts in to receive support on Chainabuse will receive:

• Immediate advice based on their case, including advice on what to do immediately to protect yourself, including from asset recovery scammers.
• Personalized support to contact LE based on your jurisdiction.
• Analysis of whether their case is linked to other reports and part of a larger case. The case gets highlighted to Law Enforcement Partner whenever relevant.
• Optional investigative support from our pre-vetted leading partner.`,
            },
            {
                question: 'How much does it cost?',
                answer: `Chainabuse is free for all users. We do not charge for submitting reports, accessing information, and receiving support. No membership charges. This service is free for everyone. No hidden charges. This work matters to the resilience of the crypto ecosystem.

Please note that Chainabuse does not engage with any third-party services that charge fees for recovery services. If you encounter anyone asking for payment in connection with Chainabuse, please report them to us immediately.`,
            },
            {
                question: 'How can I partner with you to support my users?',
                answer: `Partners can leverage Chainabuse in many ways. Our partners can leverage the database to bring safety to their users. For example, partners can use the Chainabuse API to check addresses and domains against our database, or they can provide support to their users through our Safety Support Center. If you are interested in partnering with us, please reach out to us at partnerships@chainabuse.com.`,
            },
            {
                question: 'What is the goal of the Safety Support Center?',
                answer: `The Safety Support Center is our central hub to help users stay safe in the crypto ecosystem.`,
            },
            {
                question: 'Which information can I find on the Support Center?',
                answer: `The Safety Support Center is structured for the following content of focus:

• Prevention education for crypto holders
• Safety practices to keep safe
• Recovery options for victims of scams`,
            },
            {
                question: 'Can I redirect my users to the Safety Center? Can you brand the content?',
                answer: `Yes, absolutely, please redirect to our Safety Support Center and we'll be happy to assist you.`,
            },
        ],
    },
    'data-privacy': {
        questions: [
            'How do you protect data privacy?',
            'How do you verify the reported information?',
            'How do you protect my identity?',
        ],
        content: [
            {
                question: 'How do you protect data privacy?',
                answer: `We take data privacy very seriously. All reports are encrypted and stored securely. We do not share personal information with third parties without your explicit consent. For more details, please review our Privacy Policy.`,
            },
            {
                question: 'How do you verify the reported information?',
                answer: `We use a combination of automated checks and community verification. Reports are cross-referenced with blockchain data, and our community can vote on the accuracy of reports. High-quality reports with evidence are prioritized.`,
            },
            {
                question: 'How do you protect my identity?',
                answer: `Your identity is protected through:
• Anonymous reporting options
• Encrypted data storage
• No requirement to provide personal information
• Option to use pseudonyms
• Secure authentication for account holders`,
            },
        ],
    },
    partners: {
        questions: [
            'Why become a law enforcement partner? Do you partner with Law Enforcement?',
            'Who are your current Private Partners?',
            'Why become a wallet Partner?',
            'Why become a trust and safety partner?',
            'Where can I find more information about Partnerships?',
        ],
        content: [
            {
                question: 'Why become a law enforcement partner? Do you partner with Law Enforcement?',
                answer: `Chainabuse "partners with Law Enforcement to help accelerate staging and investigation of cases within their jurisdiction using structured report data.`,
            },
            {
                question: 'Who are your current Private Partners?',
                answer: `Our current Private Partners includes established crypto organizations, major wallets, leading investigators, foundations, and present-day and industry solutions powered by security experts. They leverage Chainabuse to sync chainabuse information to enhance users' safety.`,
            },
            {
                question: 'Why become a wallet Partner?',
                answer: `• Access our user-reported API to screen domains and addresses, protect your users in real time, and serve as your layer
• Be well-informed features to detect frauds together with your community
• Allow your users to receive "safety flags within your product
• Signal commitment to raise the crypto safety safer`,
            },
            {
                question: 'Why become a trust and safety partner?',
                answer: `• Leverage our database to enhance your product environment and your decision capabilities
• Receive proactive ecosystem, harmful from the support of the Network, and have your brand awareness
• Contribute to making the space safer`,
            },
            {
                question: 'Where can I find more information about Partnerships?',
                answer: `Kindly complete the brief form available here and we'll respond to your inquiry promptly.`,
            },
        ],
    },
    'account-settings': {
        questions: [
            'How do I protect my privacy?',
            'Can you delete my account?',
            'What are the benefits of my account?',
            'What can I do with my account?',
        ],
        content: [
            {
                question: 'How do I protect my privacy?',
                answer: `You can protect your privacy by:
• Using a pseudonym instead of your real name
• Not including personal information in reports
• Setting your reports to private
• Using a separate email for your account`,
            },
            {
                question: 'Can you delete my account?',
                answer: `Yes, you can request account deletion at any time. Please contact us at support@chainabuse.com with your request.`,
            },
            {
                question: 'What are the benefits of my account?',
                answer: `With an account, you can:
• Track all your submitted reports
• Receive updates on similar scams
• Contribute to the community through voting
• Access personalized safety recommendations
• Save searches and set up alerts`,
            },
            {
                question: 'What can I do with my account?',
                answer: `Your account allows you to:
• Submit and manage reports
• Comment on reports
• Vote to verify reports
• Customize notification preferences
• View your contribution history`,
            },
        ],
    },
    contact: {
        questions: [],
        content: [
            {
                question: 'Contact Information',
                answer: `For general inquiries: info@chainabuse.com
For partnership opportunities: partnerships@chainabuse.com
For support: support@chainabuse.com

You can also reach us through our contact form or social media channels.`,
            },
        ],
    },
};

export default function FAQPage() {
    const [activeTab, setActiveTab] = useState('scam-support');

    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">

            {/* Header Section */}
            <div className="bg-[#0A0D1A] border-b border-white/5 py-8">
                <div className="container-custom">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-white">Frequently Asked Questions</h1>
                        <div className="relative w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Check addresses, URLs, IPs, etc..."
                                className="w-full bg-[#0B0C15] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-[#0A0D1A] border-b border-white/5">
                <div className="container-custom">
                    <div className="flex items-center gap-1 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${activeTab === tab.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container-custom mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Sidebar - Question Links */}
                    <div className="lg:col-span-1">
                        <div className="space-y-4">
                            {faqData[activeTab as keyof typeof faqData].questions.map((question, idx) => (
                                <a
                                    key={idx}
                                    href={`#q-${idx}`}
                                    className="block text-sm text-blue-500 hover:text-blue-400 transition-colors leading-relaxed"
                                >
                                    {question}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content - Q&A */}
                    <div className="lg:col-span-3 space-y-10">
                        {faqData[activeTab as keyof typeof faqData].content.map((item, idx) => (
                            <div key={idx} id={`q-${idx}`} className="scroll-mt-32">
                                <h3 className="text-lg font-bold text-blue-500 mb-4">{item.question}</h3>
                                <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <h3 className="text-xl font-bold text-white mb-6">Still have questions?</h3>
                    <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-3 rounded uppercase tracking-wide transition-colors">
                        CONTACT US
                    </Link>
                </div>
            </div>

        </div>
    );
}
