import Head from 'next/head';

export default function PrivacyPolicy() {
    return (
        <>
            {/* <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Privacy Policy for your web application" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <div className="bg-blue-100 min-h-screen flex items-center justify-center">
                <div className="relative">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full transform rotate-45"></div>
                    <div className="max-w-4xl px-8 py-12 bg-white shadow-lg rounded-lg" style={{ margin: '20px' }}>
                        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                        <div className="text-lg leading-relaxed">
                            <p>
                                <strong>Introduction:</strong>
                            </p>
                            <p>
                                Briefly explain the purpose of the Privacy Policy and its importance.
                                Mention that by using the website/application, users agree to the terms outlined in the Privacy Policy.
                            </p>
                            {/* Add more privacy policy content here */}
                            <p>
                                <strong>Information Collected:</strong>
                            </p>
                            <p>
                                Specify the types of information collected from users. This may include personal information such as names, email addresses, contact details, etc.
                                Explain how and why this information is collected (e.g., for account registration, processing orders, improving user experience, etc.).
                            </p>
                            <p>
                                <strong>Data Usage and Purpose:</strong>
                            </p>
                            <p>
                                Clarify how the collected data will be used. For instance, data may be used for providing services, communication purposes, marketing, analytics, etc.
                                Ensure that data is only used for legitimate purposes and outline any limitations on its usage.
                            </p>
                            <p>
                                <strong>Data Sharing:</strong>
                            </p>
                            <p>
                                Describe if and how user data will be shared with third parties. This may include sharing with service providers, business partners, affiliates, etc.
                                Clarify the circumstances under which data may be shared, such as legal requirements, business transactions, or with user consent.

                            </p>

                            <p>
                                <strong>Data Protection and Security:</strong>
                            </p>
                            <p>
                                Explain the measures taken to protect user data from unauthorized access, disclosure, alteration, or destruction.
                                Mention compliance with industry standards or regulations regarding data security (e.g., GDPR, CCPA).
                            </p>

                            <p>
                                <strong>User Rights:</strong>
                            </p>
                            <p>
                                Inform users about their rights regarding their personal data, such as the right to access, update, delete, or restrict the processing of their data.
                                Provide instructions on how users can exercise these rights (e.g., contacting customer support).

                            </p>
                            <p>
                                <strong>Cookies and Tracking Technologies:</strong>
                            </p>
                            <p>
                                Describe the use of cookies and other tracking technologies on the website/application.
                                Explain the purpose of cookies, the types used (e.g., session cookies, persistent cookies), and how users can manage cookie preferences.
                            </p>
                            <p>
                                <strong> Changes to the Privacy Policy:</strong>
                            </p>
                            <p>
                                State that the Privacy Policy may be updated from time to time and provide the date of the last update.
                                Inform users that continued use of the website/application constitutes acceptance of any revisions to the Privacy Policy.
                            </p>
                            <p>
                                <strong>Contact Information:</strong>
                            </p>
                            <p>
                                Provide contact details for inquiries, questions, or requests related to the Privacy Policy or data protection practices.
                                Include an email address or contact form for users to reach out to your organization
                            </p>
                            <p>
                                <strong>Legal Compliance:</strong>
                            </p>
                            <p>
                                State compliance with relevant privacy laws and regulations applicable to your jurisdiction.
                                Include any additional disclosures or requirements mandated by law.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
