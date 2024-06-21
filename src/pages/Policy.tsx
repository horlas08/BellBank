import {FunctionComponent, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppBtn from "../components/AppBtn";
import Notification from "../components/Notification";
import Breadcrumb from "../components/Breadcrumb";
import {Link} from "react-router-dom";

const Policy: FunctionComponent = () => {
    const [hover, setHover] = useState<number>(0);

    function changeTermsCategory(number: number, path: String) {
        setHover(number)
        window.location.href = `#${path}`
    }

    return (
        <div className="w-full relative bg-white  text-left text-sm text-mediumseagreen font-aeonik">
            {/*<Notification/>*/}
            <Header
                vector="/assets/images/svg/vector2.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="#fff"
                propBorderBottom="border-gray-1005"
                propColor="dimgray"
                chevronColor="black"

            />

            <Breadcrumb subtitle={'Effective Date: Mondays, April 29, 2024'} title={'Privacy Policy'}/>

            <main>
                <div
                    className="terms-conditions-container wrapper my-[3rem] w-[85%] gap-8 mx-auto grid md:grid-cols-3 ">
                    <div id="terms-category-container"
                         className="!bg-lightgreen py-2 px-5 md:sticky top-[2rem] left-0 bottom-0 right-0 overflow-y-auto max-h-[70vh] flex-1 terms-category-container blog-section ">
                        <div className="title-container">
                            <h1 className="terms-category-title blog-detail-title text-black">
                                Contents
                            </h1>
                        </div>
                        <div id="terms-categories" className="terms-categories">
                            <li onClick={() => changeTermsCategory(1, 'legal-basis')}
                                className={`term-category ${hover == 1 ? 'active' : ''} `}>
                                <p className=" m-0">
                                    <small> Legal Basis for Collecting your Data?</small>
                                </p>
                            </li>

                            <li onClick={() => changeTermsCategory(2, 'what-data-do-we-collect')}
                                className={`term-category ${hover == 2 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>What data do we collect?</small>
                                </p>
                            </li>

                            <li onClick={() => changeTermsCategory(3, 'how-do-we-collect-data')}
                                className={`term-category ${hover == 3 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>How do we collect your data?</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(4, 'how-we-use-data')}
                                className={`term-category ${hover == 4 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>How will we use your data?</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(5, 'how-we-use-data')}
                                className={`term-category ${hover == 5 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>How do we store your data and for how long?</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(6, 'protection-rights')}
                                className={`term-category ${hover == 6 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>Your Data Protection Rights?</small>
                                </p>
                            </li>

                            <li onClick={() => changeTermsCategory(7, 'log-files')}
                                className={`term-category ${hover == 7 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>BellBank’s Log Files?</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(8, 'cookies-and-web-beacons')}
                                className={`term-category ${hover == 8 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>How do we use cookies and web beacons?</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(9, 'third-party-polices')}
                                className={`term-category ${hover == 9 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>Third-Party Privacy Polices</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(10, 'children-info')}
                                className={`term-category ${hover == 10 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>Children’s Information</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(11, 'how-to-contact-us')}
                                className={`term-category ${hover == 11 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small> How to contact us?</small>
                                </p>
                            </li>
                            <li onClick={() => changeTermsCategory(12, 'consent')}
                                className={`term-category ${hover == 12 ? 'active' : ''} `}>
                                <p className="m-0">
                                    <small>Consent</small>
                                </p>
                            </li>

                        </div>
                    </div>
                    <div className="flex-[2] category-detail-container md:col-span-2">
                        <section className="blog-section">
                            <div className="blog-detail-container">
                                <h1 id="terms-details-title" className="text-[2rem] blog-detail-title">
                                    Privacy Policy
                                </h1>
                            </div>
                        </section>
                        <section className="blog-section">
                            <div id="terms-details-container" className="blog-detail-container">
                                <div id="legal-basis" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>Legal Basis for Collecting your Data? </small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>BellBank Microfinance Bank Limited legal basis for collecting and using
                                            the
                                            personal information described in this Privacy Policy depends on the
                                            Personal
                                            Information we collect and the specific context in which we collect the
                                            information:</small
                                        >
                                    </p>
                                    <ul className="blog-detail-content-list">
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>BellBank Microfinance Bank Limited needs to perform a contract
                                                    with
                                                    you.</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>You have given BellBank Microfinance Bank Limited permission to
                                                    do
                                                    so.</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>
                                                    Processing your personal information is in BellBank Microfinance
                                                    Bank
                                                    Limited legitimate interests.
                                                </small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>BellBank Microfinance Bank Limited needs to comply with the
                                                    law.</small
                                                >
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div id="what-data-do-we-collect" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>What data do we collect? </small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>Our company collects the following data:</small>
                                    </p>
                                    <ul className="blog-detail-content-list">
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Personal Identification Information (name, email address, phone
                                                    number,
                                                    residential address, gender, date, and place of birth, nationality,
                                                    passport
                                                    photograph, etc).</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Corporate Identification Information (name, place of business,
                                                    nature, and
                                                    purpose of business, mailing address, contact email and telephone,
                                                    official
                                                    identification number such as Tax Identification Number, Certificate
                                                    of
                                                    Incorporation, Personal Identification Information of those
                                                    authorized to
                                                    operate the account, etc).</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small> Your banking transaction information. </small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Your loan transaction information.</small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Your IP Address.</small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Your Geolocation.</small>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div id="how-do-we-collect-data" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>How do we collect your data?</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>You directly provide BellBank with most of the data we collect. We
                                            collect and
                                            process data when you:</small
                                        >
                                    </p>
                                    <ul className="blog-detail-content-list">
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Register for an account with us.</small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Voluntarily complete a survey or feedback.</small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small> Perform a banking transaction. </small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Perform a loan transaction.</small>
                                            </p>
                                        </li>
                                    </ul>
                                    <p className="blog-detail-content-description">
                                        <small>We may also indirectly receive your data from other partners and
                                            institutions
                                            who would have informed you that they share data collected from you with
                                            other
                                            institutions such as us.</small
                                        >
                                    </p>
                                </div>
                                <div id="how-we-use-data" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>How will we use your data?</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>We collect your data so that we can:</small>
                                    </p>
                                    <ul className="blog-detail-content-list">
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Comply with all applicable laws.</small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Process your banking transactions.</small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small> Improve your customer experience. </small>
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>Email you with special offers on other products and services we
                                                    think you
                                                    might like.</small
                                                >
                                            </p>
                                        </li>
                                    </ul>
                                    <p className="blog-detail-content-description">
                                        <small>When we process your loan transactions, we may share your data with
                                            credit
                                            bureaus to enable them to update your credit information.</small
                                        >
                                    </p>
                                </div>
                                <div id="how-we-store-data" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>How do we store your data and for how long?</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            We store your data securely on secure servers at secure data centers with
                                            the
                                            best security measures.
                                            <br/>
                                            BellBank will retain your personal information only for as long as is
                                            necessary
                                            for the purposes set out in this Privacy Policy.
                                            <br/>
                                            We will also retain and use your information to the extent necessary to
                                            comply
                                            with our legal obligations, resolve disputes, and enforce our policies.
                                        </small>
                                    </p>
                                </div>
                                <div id="protection-rights" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>Your Data Protection Rights?</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            Your data and its integrity matters to us, and a lot! We would love it that
                                            you
                                            are fully aware of all your data protection rights.
                                            <br/>
                                            In certain circumstances, and this is entirely dependent on the relevant
                                            laws
                                            and regulations existing at the relevant time, you have the following data
                                            protection rights:
                                        </small>
                                    </p>
                                    <ul className="blog-detail-content-list">
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>The right to access: Under certain conditions, you have the right
                                                    to
                                                    request copies of your personal information which we have stored. We
                                                    may
                                                    charge a fee for this service.</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>The right to rectification & update: Under certain conditions,
                                                    you have the
                                                    right to request that we correct any information which you believe
                                                    is
                                                    inaccurate and to complete any information which you believe is
                                                    incomplete.</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>The right to restrict processing: Under certain conditions, you
                                                    have the
                                                    right to request that we restrict the processing of your personal
                                                    information.</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>The right to data portability: Under certain conditions, you have
                                                    the right
                                                    to request that we transfer the data we have collected to another
                                                    organization or you personally.</small
                                                >
                                            </p>
                                        </li>
                                        <li className="blog-detail-content-list-item">
                                            <p>
                                                <small>The right to withdraw consent: You can at all times revoke all
                                                    permissions
                                                    you have granted to us as related to your personal information and
                                                    data.</small
                                                >
                                            </p>
                                        </li>
                                    </ul>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            In compliance with banking laws and regulations, we shall not be able to
                                            honour
                                            any request to delete your banking or loan transaction history.
                                            <br/>
                                            If you would like to exercise any of these rights, contact us at:
                                            <br/>
                                            <a className="text-mediumseagreen" href="tel:+2348139990000"> +2348139990000</a>
                                            <br/>
                                            <a className="primary-text text-mediumseagreen"
                                               href="mailto:hello@bellmfb.com"> <span
                                                className="__cf_email__"
                                            >[email&#160;protected]</span></a>
                                            <br/>
                                            We have one month to respond to you once you make a request.
                                        </small>
                                    </p>
                                </div>
                                <div id="log-files" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>BellBank&rsquo;s Log Files?</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            BellBank Microfinance Bank Limited's website follows a standard procedure of
                                            using log files. These files log visitors when they visit websites. All
                                            hosting
                                            companies do this and are a part of hosting services' analytics. The
                                            information
                                            collected by log files includes internet protocol (IP) addresses, browser
                                            type,
                                            Internet Service Provider (ISP), date and time stamp, referring/exit pages,
                                            and
                                            possibly the number of clicks. These are not linked to any personally
                                            identifiable information. The purpose of the information is for analyzing
                                            trends, administering the site, tracking users' movement on the website, and
                                            gathering demographic information.
                                        </small>
                                    </p>
                                </div>
                                <div id="cookies-and-web-beacons" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>How do we use cookies and web beacons?</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            Like any other website, BellBank Microfinance Bank Limited&rsquo;s website
                                            uses
                                            &lsquo;cookies&rsquo;. These cookies are used to store information including
                                            visitors' preferences, and the pages on the website that the visitor
                                            accessed or
                                            visited. The information is used to optimize the users' experience by
                                            customizing our web page content based on visitors' browser type and/or
                                            other
                                            information.
                                        </small>
                                    </p>
                                </div>
                                <div id="third-party-polices" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>Third-Party Privacy Polices</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            BellBank Microfinance Bank Limited&rsquo;s website's Privacy Policy does not
                                            apply to other advertisers or websites. Thus, we are advising you to consult
                                            the
                                            respective Privacy Policies of these third-party ad servers for more
                                            detailed
                                            information. It may include their practices and instructions about how to
                                            opt
                                            out of certain options.
                                            <br/>
                                            You can choose to disable cookies through your browser options. To know more
                                            detailed information about cookie management with specific web browsers, it
                                            can
                                            be found at the browsers' respective websites.
                                        </small>
                                    </p>
                                </div>
                                <div id="children-info" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>Children&rsquo;s Information</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            Another part of our priority is adding protection for children while using
                                            the
                                            internet. We encourage parents and guardians to observe, participate in,
                                            and/or
                                            monitor and guide their online activity.
                                            <br/>
                                            BellBank Microfinance Bank Limited&rsquo;s website does not knowingly
                                            collect
                                            any Personal Identifiable Information from children under the age of 13. If
                                            you
                                            think that your child provided this kind of information on our website, we
                                            strongly encourage you to contact us immediately and we will do our best
                                            efforts
                                            to promptly remove such information from our records.
                                        </small>
                                    </p>
                                </div>
                                <div id="how-to-contact-us" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>How to contact us?</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            If you have any questions, want to know what data we hold on you or want to
                                            exercise any of your rights, or you want to help make our privacy policy
                                            better,
                                            contact us at:
                                            <br/>
                                            BellBank Microfinance Bank Limited&rsquo;s website website does not
                                            knowingly
                                            collect any Personal Identifiable Information from children under the age of
                                            13.
                                            If you think that your child provided this kind of information on our
                                            website,
                                            we strongly encourage you to contact us immediately and we will do our best
                                            efforts to promptly remove such information from our records.
                                            <br/>
                                            <a className="primary-text +2348139990000" href="tel:+2348139990000"> +2348139990000</a>
                                            <br/>
                                            <a className="primary-text text-mediumseagreen"
                                               href="mailto:"> <span
                                                className="__cf_email__"
                                                >[email&#160;protected]</span></a>
                                            <br/>
                                        </small>
                                    </p>
                                </div>
                                <div id="consent" className="blog-detail-content">
                                    <h1 className="blog-detail-content-title">
                                        <small>Consent</small>
                                    </h1>
                                    <p className="blog-detail-content-description">
                                        <small>
                                            By using our website, you hereby consent to our Privacy Policy and agree to
                                            its
                                            terms.
                                        </small>
                                    </p>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer defaultType={false}/>
        </div>
    );
};

export default Policy;
