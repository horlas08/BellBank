import {FunctionComponent} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppBtn from "../components/AppBtn";
import Notification from "../components/Notification";
import Breadcrumb from "../components/Breadcrumb";

const Policy: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white overflow-hidden text-left text-sm text-mediumseagreen font-aeonik">
            <Notification/>
            <Header
                vector="/assets/images/svg/vector2.svg"
                sVG="/assets/images/svg/svg3.svg"
                propBackgroundColor="#fff"
                propBorderBottom="border-gray-1005"
                propColor="dimgray"
                chevronColor="black"

            />

            <Breadcrumb subtitle={'Effective Date: Mondays, April 29, 2024'} title={'Privacy Policy'}/>


            <div className="term  w-[80%] leading-[25px] md:leading-[30px] md:max-w-[720px] mt-[80px] mx-auto">
                <p className={'text-gray-100 mb-[40px]'}>
                    Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                    Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.
                    Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                </p>

                <div className="term-section text-black">
                    <div className="title">
                        <h2 className={'p-0 m-0'}>What information do we collect?</h2>
                        <div className="spacer mb-[20px]"></div>
                    </div>
                    <div className="desc">
                        <p className={'text-gray-100'}>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In
                            aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam
                            in vitae malesuada fringilla.
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur
                            convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra
                            purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
                            aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu
                            vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
                            porttitor.
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
                            congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                            tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat
                            nam nibh orci.
                        </p>
                    </div>
                    <div className="spacer mb-[40px]"></div>
                </div>

                <div className="term-section text-black">
                    <div className="title">
                        <h2 className={'p-0 m-0'}>How do we use your information?</h2>
                        <div className="spacer mb-[20px]"></div>
                    </div>
                    <div className="desc">
                        <p className={'text-gray-100'}>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In
                            aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam
                            in vitae malesuada fringilla.
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur
                            convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra
                            purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
                            aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu
                            vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
                            porttitor.
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
                            congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                            tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat
                            nam nibh orci.
                        </p>
                    </div>
                    <div className="spacer mb-[40px]"></div>
                </div>

                <div className="term-section text-black">
                    <div className="title">
                        <h2 className={'p-0 m-0'}>Do we use cookies and other tracking technologies?</h2>
                        <div className="spacer mb-[20px]"></div>
                    </div>
                    <div className="desc">
                        <p className={'text-gray-100'}>
                            Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                        </p>
                    </div>
                    <div className="spacer mb-[40px]"></div>
                </div>

                <div className="term-section text-black">
                    <div className="title">
                        <h2 className={'p-0 m-0'}>How long do we keep your information?</h2>
                        <div className="spacer mb-[20px]"></div>
                    </div>
                    <div className="desc">
                        <p className={'text-gray-100'}>
                            Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                        </p>
                    </div>
                    <div className="spacer mb-[40px]"></div>
                </div>

                <div className="term-section text-black">
                    <div className="title">
                        <h2 className={'p-0 m-0'}>How do we keep your information safe?</h2>
                        <div className="spacer mb-[20px]"></div>
                    </div>
                    <div className="desc">
                        <p className={'text-gray-100'}>
                            Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                        </p>
                    </div>
                    <div className="spacer mb-[40px]"></div>
                </div>

                <div className="term-section text-black">
                    <div className="title">
                        <h2 className={'p-0 m-0'}>What are your privacy rights?</h2>
                        <div className="spacer mb-[20px]"></div>
                    </div>
                    <div className="desc">
                        <p className={'text-gray-100'}>
                            Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                        </p>
                    </div>
                    <div className="spacer mb-[40px]"></div>
                </div>

                <div className="term-section text-black">
                    <div className="title">
                        <h2 className={'p-0 m-0'}>How can you contact us about this policy?</h2>
                        <div className="spacer mb-[20px]"></div>
                    </div>
                    <div className="desc">
                        <p className={'text-gray-100'}>
                            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.

                        </p>
                        <p className={'ml-1 text-gray-100'}>
                            1. Lectus id duis vitae porttitor enim gravida morbi.
                        </p>
                        <p className={'ml-1 text-gray-100'}>
                            2. Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
                        </p>
                        <p className={'ml-1 text-gray-100'}>
                            3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
                        </p>
                    </div>
                    <div className="spacer mb-[40px]"></div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Policy;
