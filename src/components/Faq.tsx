import CardLeft from "./CardLeft";
import {Link} from "react-router-dom";
import ExperienceItem from "./ExperienceItem";
import React from "react";
import FaqItem from "./FaqItem";

export default function Faq() {
    return (
        <div className={'relative w-full mx-auto py-[50px]'}>
        <div className={'relative w-[80%] flex-col lg:flex-row mx-auto flex justify-center items-start'}>
            <div className="h-[232px] flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">

                    <b className="w-[406px] relative text-23xl flex text-gray-400 items-center">
                                      <span className="w-full">
                                        <p className="m-0">Let's put your</p>
                                        <p className="m-0">mind at ease.</p>
                                      </span>
                    </b>
                </div>
                <div className="w-[361px] relative text-lg leading-[25px] font-medium flex items-center text-dimgray-100">
                                    <span className="w-full">
                                      <span>{`Can’t find the answer you’re looking for? Reach out to our `}</span>
                                      <span className="text-mediumseagreen">
                                        customer support
                                      </span>
                                      <span> team.</span>
                                    </span>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                <FaqItem
                    doINeedToPayForAnythingEl="Do I need to pay for anything else besides Numeral to file my sales tax?"
                    plusCircle="/assets/images/svg/pluscircle.svg"
                    showThereAreAContainer
                />
                <FaqItem
                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Lorem risus vestibulum consectetur mi."
                    plusCircle="/assets/images/svg/pluscircle1.svg"
                    showThereAreAContainer={false}
                    propWidth="463px"
                    propWidth1="463px"
                    propColor="#505553"
                />
                <FaqItem
                    doINeedToPayForAnythingEl="Do I need to pay for anything else besides Numeral to file my sales tax?"
                    plusCircle="/pluscircle1.svg"
                    showThereAreAContainer={false}
                    propWidth="unset"
                    propWidth1="421px"
                    propColor="#505553"
                />
                <FaqItem
                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Eget elit id purus."
                    plusCircle="/pluscircle1.svg"
                    showThereAreAContainer={false}
                    propWidth="unset"
                    propWidth1="382px"
                    propColor="#505553"
                />
                <FaqItem
                    doINeedToPayForAnythingEl="Lorem ipsum dolor sit amet consectetur. Arcu aliquam donec."
                    plusCircle="/pluscircle1.svg"
                    showThereAreAContainer={false}
                    propWidth="unset"
                    propWidth1="421px"
                    propColor="#505553"
                />
            </div>

        </div>
        </div>
    )
}