import CardLeft from "./CardLeft";
import {Link} from "react-router-dom";
import ExperienceItem from "./ExperienceItem";
import React, {useState} from "react";
import FaqItem from "./FaqItem";

export default function Faq() {
    let faq = [
        {
            id: 1,
            title: "Do I need to pay for anything else besides Numeral to file my sales tax?",
            answer: "There are a few states that require a registration fee; however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
            show: true
        },
        {
            id: 2,
            title: "Do I need to pay for anything else besides Numeral to file my sales tax?",
            answer: "There are a few states that require a registration fee; however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
            show: false
        }
    ]

    const [faqs, setFaqs] = useState(faq)

    const handleFold = (index: number)=>{

        let newF= faqs.map((value,i, array)=>{

           if (value.id == index){

              value = {...value, show: !array[i].show}

               return value
           }
           return value
       })

        setFaqs(newF)

    }
    return (
        <div className={'relative w-full mx-auto py-[50px] overflow-hidden'} id={'#faq'} >
        <div className={'relative w-[80%] flex-col lg:flex-row mx-auto flex justify-center items-start'}>
            <div className="h-[232px] flex flex-col items-start justify-start gap-[16px]">
                <div className="flex w-full flex-col items-start justify-start gap-[16px]">

                    <b className="lg:w-[406px] w-full relative text-16xl md:text-23xl flex text-gray-400 items-center">
                                      <span className="w-full">
                                        <p className="m-0 block text-center lg:hidden">Let's put your mind at ease.</p>
                                        <p className="m-0  hidden lg:block">Let's put your</p>
                                        <p className="m-0 hidden lg:block">mind at ease.</p>
                                      </span>
                    </b>
                </div>
                <div className="lg:w-[361px] relative text-lg leading-[25px] font-medium flex items-center text-dimgray-100">
                                    <span className="w-full my-[20px]">
                                      <span>{`Can’t find the answer you’re looking for? Reach out to our `}</span>
                                      <span className="cursor-pointer text-mediumseagreen">
                                        customer support
                                      </span>
                                      <span> team.</span>
                                    </span>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-start my-10 lg:my-0 justify-center w-full lg:w-auto lg:justify-start gap-[18px]">
                {faqs.map(({title, answer, show, id}, index)=>{
                    return <FaqItem
                        key={id}
                        title={title}
                        answer={answer}
                        show={show}

                     handleFold={handleFold} index={id}/>
                })}
            </div>

        </div>
        </div>
    )
}