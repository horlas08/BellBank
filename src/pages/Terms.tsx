import {FunctionComponent, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Breadcrumb from "../components/Breadcrumb";
import {Link} from "react-router-dom";



const Terms: FunctionComponent = () => {
    const [hover, setHover] = useState<number>(0);

    function changeTermsCategory(number: number, path: String) {
        setHover(number)
        window.location.href = `#${path}`
    }
    return (<div className="w-full relative bg-white  text-left text-sm text-mediumseagreen font-aeonik">
        <Notification/>
        <Header
            vector="/assets/images/svg/vector2.svg"
            sVG="/assets/images/svg/svg3.svg"
            propBackgroundColor="#fff"
            propBorderBottom="border-gray-1005"
            propColor="dimgray"
            chevronColor="black"

        />

        <Breadcrumb subtitle={'Effective Date: Mondays, April 29, 2024'} title={'Terms & Condition'}/>
        <main>
            <div className="terms-conditions-container wrapper my-[3rem] w-[85%] gap-8 mx-auto grid md:grid-cols-3 ">
                <div id="terms-category-container"
                     className="!bg-lightgreen py-2 px-5 md:sticky top-[2rem] left-0 bottom-0 right-0 overflow-y-auto max-h-[70vh] flex-1 terms-category-container blog-section ">
                    <div className="title-container">
                        <h1 className="terms-category-title blog-detail-title text-black">
                            Contents
                        </h1>
                    </div>
                    <div id="terms-categories" className=" terms-categories">
                        <li onClick={() => changeTermsCategory(1,'oau')} className={`term-category ${hover == 1 ? 'active': ''} `}>
                            <p className=" m-0">
                                <small> Your Account - Opening, Access and Usage</small>
                            </p>
                        </li>

                        <li onClick={() => changeTermsCategory(2, 'cas')} className={`term-category ${hover == 2 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Your Account - Confirming It Is Your Authorized Signatories</small>
                            </p>
                        </li>

                        <li onClick={() => changeTermsCategory(3, 'cia')} className={`term-category ${hover == 3 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Your Account - Account Categories, Interest, Account-Specific Terms</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(4, 'ara')} className={`term-category ${hover == 4 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Your Account - Restricting Access</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(5, 'sti')} className={`term-category ${hover == 5 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Account Information - Updates, Statements and Transaction Information</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(6, 'aip')} className={`term-category ${hover == 6 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Account Information - Privacy</small>
                            </p>
                        </li>

                        <li onClick={() => changeTermsCategory(7, 'pia')} className={`term-category ${hover == 7 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Payments - Into Account</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(8, 'pw')} className={`term-category ${hover == 8 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Payments - Withdrawals</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(9, 'pcp')} className={`term-category ${hover == 9 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Payments - Cancelling Payments</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(10, 'pef')} className={`term-category ${hover == 10 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Payments - Payment to you in Error or Fraud</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(11, 'pfa')} className={`term-category ${hover == 11 ? 'active': ''} `}>
                            <p className="m-0">
                                <small> Payments - When will we not complete a payment from your account</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(12, 'ump')} className={`term-category ${hover == 12 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Payments - Incorrect, Unauthorized, Mistaken and Fraud-Induced Outgoing Payments.</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(13, 'so')} className={`term-category ${hover == 13 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Set-Off</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(14, 'cya')} className={`term-category ${hover == 14 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Closing Your Account</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(15, 'ctt')} className={`term-category ${hover == 15 ? 'active': ''} `}>
                            <p className="m-0">
                                <small>Changes To Terms</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(16, 'notice')} className={`term-category ${hover == 16 ? 'active': ''} `}>
                            <p className="m-0">
                                <small> Notices</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(17, 'ldr')} className={`term-category ${hover == 17 ? 'active': ''} `}>
                            <p className="m-0">
                                <small> Applicable Law and Dispute Resolution</small>
                            </p>
                        </li>
                        <li onClick={() => changeTermsCategory(18, 'mis')} className={`term-category ${hover == 18 ? 'active': ''} `}>
                            <p className="m-0">
                                <small> Miscellaneous</small>
                            </p>
                        </li>
                    </div>
                </div>
                <div className="flex-[2] category-detail-container md:col-span-2">
                    <section className="blog-section">
                        <div className="blog-detail-container">
                            <h1 id="terms-details-title" className="text-[2rem] blog-detail-title">
                                Your Account - Account Categories, Interest, Account-Specific Terms
                            </h1>
                        </div>
                    </section>
                    <section className="blog-section">
                        <div id="terms-details-container" className="blog-detail-container">
                            <br/>
                            <h1 className="blog-detail-content-title">
                                <small>Introduction</small>
                            </h1>
                            <p className="blog-detail-content-description !text-[18px] leading-6 ">These terms guide the general
                                relationship between the Bank (“we”, “us”, “our”)
                                and the Customer (“you”, “your”, ‘yours”) and are binding immediately you open
                                an account with us. Some other products and services may be offered by BellBank
                                Microfinance Bank Limited
                                as a part of the Fintech Banking Service and each of them has its Terms and/or
                                conditions and you are bound by these specific Terms and conditions as well. <br/>You
                                are encouraged to read these Terms carefully and to pay attention to the clauses
                                contained here.</p>
                            <br/>
                            <h1 className="blog-detail-content-title" id={'oau'}>
                                <small>1. Your Account - Opening, Access and Usage</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>1.1</b>
                                            <span>

                          We have no obligation to open or maintain an already opened account
                          except you provide all required documents and complete the KYC procedure
                          as may be set out by the Central Bank of Nigeria (‘CBN’) and other
                          relevant regulators from time to time.


                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>1.2</b>
                                            <span>

                        We reserve the right to refuse to open or to close an account if
                        we discover that information supplied for the creation of the account is
                        false, incorrect or misleading.


                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>1.3</b>
                                            <span>

                    You agree to immediately inform us of any change to the
                        information you have supplied to enable us update our records correctly.


                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>1.4</b>
                                            <span>

                        You must comply with the minimum balance requirement if any exists
                        and any other conditions applicable to your accounts including Savings and
                        Current account. Non-compliance shall be grounds for us to suspend or close
                        your accounts.


                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'cas'}>
                                <small>2. Your Account - Confirming It Is Your Authorized Signatories</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>2.1</b>
                                            <span>
                                Each time you access your account or send instructions we shall have to confirm that we are dealing with your authorized signatories.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>2.2</b>
                                            <span>
                                If you are in our branch, we may request to see a valid means of ID (e.g national ID card, Voter’s card) and that your signature matches that on our systems.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>2.3</b>
                                            <span>
                                For other off-branch platforms comprising our Fintech Banking Services, then your security details confirm that it is you. If correctly entered, we assume that you are the one issuing instructions.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>2.4</b>
                                            <span>
                                You must immediately contact us if your security details are compromised or you feel they may be compromised.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'cia'}>
                                <small>3. Your Account - Account Categories, Interest, Account-Specific Terms</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>3.1</b>
                                            <span>

                      We offer two categories of accounts for business banking:


                                  <span>

                                        <span className="note-item"><b>a.</b><span>Savings Account.</span></span>

                                        <span className="note-item"><b>b.</b><span>Current Account</span></span>

                                  </span>

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>3.2</b>
                                            <span>

                      The requirements for opening either category of account are always
                      accessible from our website.


                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>3.3</b>
                                            <span>

                      Conditions, features and interest rates shall also be as contained on our
                      website and as updated from time to time.


                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'ara'}>
                                <small>4. Your Account - Restricting Access</small>
                            </h1>

                            <ul className="blog-detail-content-list" >

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>4.1</b>
                                            <span>
                                We may at any time suspend your access to any or all parts of your accounts or any or all services available to you for any reason including but not limited to the following:

                                  <span>

                                        <span
                                            className="note-item"><b>a.</b><span>Suspicion of fraud or crime.</span></span>

                                        <span
                                            className="note-item"><b>b.</b><span>Compliance with the law.</span></span>

                                        <span className="note-item"><b>c.</b><span>Suspicion that the security of your account has been compromised.</span></span>

                                        <span className="note-item"><b>d.</b><span>We are of the opinion that you may be unable to meet your obligations to repay a loan you owe to us.</span></span>

                                  </span>

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>4.2</b>
                                            <span>
                                In any case, we shall inform you prior to or immediately after restricting your account and provide you with the reason we took the decision.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>4.3</b>
                                            <span>
                                Where your account has not been used for a period of time we may restrict your account but only to protect your account and always with notice. Restriction for non-usage would happen if your account is inactive:

                                  <span>

                                        <span
                                            className="note-item"><b>a.</b><span>12-months if a current account.</span></span>

                                        <span className="note-item"><b>b.</b><span>2 years if a savings account.</span></span>

                                  </span>

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'sti'}>
                                <small>5. Account Information - Updates, Statements and Transaction Information</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>5.1</b>
                                            <span>
                                You have the right to know what is happening with your account and we would always keep you updated. You shall always receive updates on transactions by text message and by email by default. Should you choose to opt out of text message updates, then you must sign the SMS Deactivation Indemnity Form.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>5.2</b>
                                            <span>
                                We shall also send you a monthly Statement of Account at the end of every month via email. You shall let us know if you notice a discrepancy in the statement and the actual transactions that occurred in the month, or if there is any unusual or incorrect payments on your account.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>5.3</b>
                                            <span>
                                You can also generate a Statement of Account for yourself through our online and mobile applications. If you ask for your statement on paper, we shall make provisions for you, however, this might come with a service charge.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'aip'}>
                                <small>6. Account Information - Privacy</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>6.1</b>
                                            <span>
                                We may request information relating to your transactions and your account with us to help us meet out requirements under the Anti-Money Laundering/Combating the Financing of Terrorism Regulations.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>6.2</b>
                                            <span>
                                If we suspect fraudulent or criminal activity, and you refuse to provide information, we may try to get it from another source but within the limits of the law. We may also suspend your account if we believe you are withholding information.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>6.3</b>
                                            <span>
                                We will keep your information with us in line with our privacy policy which can be accessed <Link
                                                className="primary-text" to="/privacy">here</Link>.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'pia'}>
                                <small>7. Payments - Into Account</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>7.1</b>
                                            <span>
                                All payments must be denominated in Naira.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>7.2</b>
                                            <span>
                                All monies paid into your account shall become useable for you and shall begin to accrue interest:

                                  <span>

                                        <span className="note-item"><b>a.</b><span>Immediately, if the payment is made by cash at a branch.</span></span>

                                        <span className="note-item"><b>b.</b><span>as soon as we receive it, if the payment is made via other means.</span></span>

                                  </span>

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'pw'}>
                                <small>8. Payments - Withdrawals</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>8.1</b>
                                            <span>
                                You can make cash withdrawals at any ATM point using your debit cards. There may be limits but we shall keep you informed from time to time on the FAQ section of our website.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>8.2</b>
                                            <span>
                                You can use your debit cards to make debit card payments. Note that you may not have the amount deducted from your account at the point of payment even when the payment is successful. The deduction may happen at a later time when the card network operator confirms the details to us.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>8.3</b>
                                            <span>
                                Fees shall be available on our website.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'pcp'}>
                                <small>9. Payments - Cancelling Payments</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>9.1</b>
                                            <span>
                                Any immediate payment method cannot be cancelled. Payments such as USSD, debit cards and online banking cannot be cancelled. If made, you can only get your money from the person you made the payment to.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>9.2</b>
                                            <span>
                                Standing orders, Direct Debits, recurring card payments and other schedule like payments can be cancelled provided you give us an instruction to that effect at any time before the next payment on the schedule is due.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'pef'}>
                                <small>10. Payments - Payment to you in Error or Fraud</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>10.1</b>
                                            <span>
                                If we make a payment to you due to a mistake on our part or a system error, we will remove such amount without notifying you.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>10.2</b>
                                            <span>
                                If a payment is made to you and we suspect fraud, we shall remove it without notifying you.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>10.3</b>
                                            <span>
                                Outside these two scenarios, if we are informed that a payment into your account is not intended for you, we will inform you and seek your position. If you insist it was for you, we shall retain it in your account.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>10.4</b>
                                            <span>
                                We may place a lien on the amount claimed to have been sent to you in error but not for longer than for two weeks. We will inform you if we do this. We may also be required to watchlist your BVN but we shall only do this as required by law.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>10.5</b>
                                            <span>
                                The party claiming the error may pursue other legal remedies and we shall be bound to comply with the law or order of the court or regulatory body as the case may be.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'pfa'}>
                                <small>11. Payments - When will we not complete a payment from your account</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>11.1</b>
                                            <span>
                                We are obligated to make payments from your account; however we may not make them in some instances which include but are not limited to the following:

                                  <span>

                                        <span
                                            className="note-item"><b>a.</b><span>You have insufficient money.</span></span>

                                        <span className="note-item"><b>b.</b><span>We are aware that you gave us incorrect details.</span></span>

                                        <span className="note-item"><b>c.</b><span>Payment is over a limit which we shall tell you on attempting payment.</span></span>

                                        <span className="note-item"><b>d.</b><span>We believe that there has been fraud, breach of security or breach of the law or a regulation.</span></span>

                                        <span className="note-item"><b>e.</b><span>We believe someone else may have a claim over the money.</span></span>

                                  </span>

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'ump'}>
                                <small>12. Payments - Incorrect, Unauthorized, Mistaken and Fraud-Induced Outgoing
                                    Payments.</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>12.1</b>
                                            <span>
                                There are four broad categories of issues that may occur to payments from your account.

                                  <span>

                                        <span className="note-item"><b>a.</b><span><b>Incorrect payments:</b> Payments not sent to the account you instructed due to an error from the bank.</span></span>

                                        <span className="note-item"><b>b.</b><span><b>Unauthorized payments:</b> Payments made without your permission.</span></span>

                                        <span className="note-item"><b>c.</b><span><b>Mistaken payments:</b> Payments made to a wrong person because you gave wrong details</span></span>

                                        <span className="note-item"><b>d.</b><span><b>Fraud-induced payments:</b> Payments made because you were tricked into making payments.</span></span>

                                  </span>

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>12.2</b>
                                            <span>
                                In all cases, you must immediately give us a call via our contacts as provided on our websites.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>12.3</b>
                                            <span>
                                In cases of incorrect payment, we shall make a refund within 48 hours.

                                  <span>

                                        <span className="note-item"><b>a.</b><span>However, if we do discover that the payment was a mistaken payment, we shall recoup the refunded amount.</span></span>

                                        <span className="note-item"><b>b.</b><span>If you do not notify us of an incorrect payment within 13 months.</span></span>

                                  </span>

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>12.4</b>
                                            <span>
                                In case of mistaken payment, we shall act in line with the relevant guidelines from the Central Bank of Nigeria and other applicable laws at the time. However, we shall provide the needed support by helping to contact the receiving bank and providing details of the transactions. You may also need to follow up with the receiving bank personally.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>12.5</b>
                                            <span>
                                In cases of unauthorized or fraud-induced payments, we would follow the we shall act in line with the relevant guidelines from the Central Bank of Nigeria and other applicable laws at the time.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>12.6</b>
                                            <span>
                                If we believe you have been grossly negligent, then we shall not make refunds. Notwithstanding we shall provide full support as may be required to reach out to the receiving bank and law enforcement agency as the case may be and as our duty under the relevant laws shall stipulate.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'so'}>
                                <small>13. Set-Off</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>13.1</b>
                                            <span>
                                Owing us money does not preclude you from having money funded into your account and transacting with your funds as you normally would. However, there are instance where your payments may become due. In such instances, we may take money standing to your credit in any of your accounts with us to sef-off all or part of your debt to us.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>13.2</b>
                                            <span>
                                While we would usually do this as a last resort and would make best efforts to recover sums due to us through more amicable means, we have no obligation to give you notice before exercising our right to a set off.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'cya'}>
                                <small>14. Closing Your Account</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>14.1</b>
                                            <span>
                                If you wish to close your accounts with us, just notify us and we would close it without charge.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>14.2</b>
                                            <span>
                                You will need to download any of your information you need from our online banking platform before closing your account.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>14.3</b>
                                            <span>
                                We shall need to settle your debts with us first, then send your balance to your requested account.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'ctt'}>
                                <small>15. Changes To Terms</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>15.1</b>
                                            <span>
                                This agreement continues to exist perpetually and therefore would change to reflect the realities of our operations, the applicable laws and regulations. As such, these terms are subject to change.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>15.2</b>
                                            <span>
                                You will always receive notice of changes before they take effect.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'notice'}>
                                <small>16. Notices</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>16.1</b>
                                            <span>
                                All notices which we are supposed to give to you under these Terms can be given through emails, social media announcements, on the website electronically through the Fintech Banking Services.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>16.2</b>
                                            <span>
                                All notices shall be deemed to be received by you 48 hours after it has been sent to you or posted on our social media.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'ldr'}>
                                <small>17. Applicable Law and Dispute Resolution</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>17.1</b>
                                            <span>
                                These Terms and their interpretation shall be governed by the laws of the Federal Republic of Nigeria.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>17.2</b>
                                            <span>
                                Any dispute or issue arising under this Agreement first be resolved by amicable negotiation.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>17.3</b>
                                            <span>
                                Where there is a failure of amicable negotiation, disputes and issues shall be subject to the jurisdiction of the courts of the Federal Republic of Nigeria. For our benefit, you hereby submit to the exclusive jurisdiction of the courts of the Federal Republic of Nigeria and waive all rights to object to the forum.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>17.4</b>
                                            <span>
                                Nothing in this Agreement shall preclude us from commencing proceedings against you in any other jurisdiction, whether concurrently or not.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>

                            <br/>
                            <h1 className="blog-detail-content-title" id={'mis'}>
                                <small>18. Miscellaneous</small>
                            </h1>

                            <ul className="blog-detail-content-list">

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>18.1</b>
                                            <span>
                                The Parties recognize the uncertainty of the law concerning certain provisions of this Agreement and expressly stipulate that this Agreement will be construed in a manner that renders its provisions valid and enforceable to the maximum extent possible under applicable law. To the extent that any provisions of this Agreement are determined by a court of competent jurisdiction to be invalid or unenforceable, such provisions will be deleted from this Agreement or modified to make them enforceable and the validity and enforceability of the remainder of such provisions and this Agreement will be unaffected.

                              </span>
                                        </small>
                                    </p>
                                </li>

                                <li className="blog-detail-content-list-item no-dot">
                                    <p>
                                        <small className="note-item">
                                            <b>18.2</b>
                                            <span>
                                Any delay on our part in exercising our rights or remedies under these Terms shall not constitute a waiver or preclude us from exercising such rights and remedies.

                              </span>
                                        </small>
                                    </p>
                                </li>


                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main>


        <Footer/>
    </div>);
};

export default Terms;
