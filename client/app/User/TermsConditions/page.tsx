import Head from 'next/head';

export default function TermsConditionsy() {
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
                        <h1 className="text-3xl font-bold mb-8">Terms &amp; Conditions</h1>
                        <div className="text-lg leading-relaxed">
                            <p>
                                <strong>1. Acceptance of Terms</strong>
                            </p>
                            <p>
                                By accessing or using the e-waste web application (the "Service"), you agree to be bound by these Terms & Conditions, which govern your use of the Service. If you do not agree with any part of these Terms & Conditions, you may not access or use the Service.
                            </p>
                            {/* Add more privacy policy content here */}
                            <p>
                                <strong>2. Description of Service</strong>
                            </p>
                            <p>
                                The Service provided by  Company allows users to [describe the functionality of the application, such as finding e-waste disposal centers, scheduling pickups, etc.].
                            </p>
                            <p>
                                <strong>3. User Responsibilities</strong>
                            </p>
                            <p>
                                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.
                                You are responsible for all activities that occur under your account or password.
                                You agree to provide accurate and complete information when using the Service.
                            </p>
                            <p>
                                <strong>5. Prohibited Activities</strong>
                            </p>
                            <p>
                                You agree not to engage in any of the following prohibited activities:

                                Using the Service for any illegal purpose or in violation of any laws.
                                Attempting to interfere with, disrupt, or disable any part of the Service.
                                Uploading or transmitting viruses, malware, or any other malicious code.
                                Engaging in any activity that could harm or negatively impact other users or the Service.
                            </p>

                            <p>
                                <strong>6. Intellectual Property</strong>
                            </p>
                            <p>
                                All content included on the Service, such as text, graphics, logos, images, and software, is the property and is protected by copyright and other laws.
                            </p>

                            <p>
                                <strong>7. Limitation of Liability</strong>
                              </p> 
                            <p>
                                In no event shall  be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the Service.
                            </p>
                            <p>
                                <strong>8. Governing Law</strong>
                            </p>
                            <p>
                                These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                            </p>
                            <p>
                                <strong> 9. Contact Us</strong>
                            </p>
                            <p>
                                If you have any questions about these Terms & Conditions, please contact us at [Your Contact Information].

                                By using the Service, 
                                you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.


                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
