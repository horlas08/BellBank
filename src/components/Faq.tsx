import CardLeft from "./CardLeft";
import {Link} from "react-router-dom";
import ExperienceItem from "./ExperienceItem";
import React, {useState} from "react";
import FaqItem from "./FaqItem";

export default function Faq() {
    let faq = [
        {
            id: 1,
            title: "What services does BellBank offer for personal banking?",
            answer: "BellBank offers a range of personal banking services, including savings accounts, checking accounts, and digital payment solutions. Our goal is to provide fast, secure, and convenient financial services for individuals.",
            show: true
        },
        {
            id: 2,
            title: "Do you guarantee safety?",
            answer: "Security is a top priority at BellBank. We employ robust encryption technologies and adhere to industry-best security practices to ensure that your personal and business transactions are safe and secure.",
            show: false
        }
        ,
        {
            id: 3,
            title: "How can I open an account with BellBank?",
            answer: "Opening an account with BellBank is quick and easy. Simply visit our website or download our mobile app to start the registration process. Follow the steps provided, and you'll be on your way to enjoying our banking services.",
            show: false
        },
        {
            id: 4,
            title: "What makes BellBank different from other digital banks?",
            answer: "BellBank stands out by offering a customer-first approach, prioritizing security, and leveraging cutting-edge technology. We aim to provide seamless payment solutions for both individuals and businesses, setting us apart in the digital banking landscape.",
            show: false
        },
        {
            id: 5,
            title: "Are there any fees associated with BellBank's services?",
            answer: "While some services may have associated fees, BellBank is committed to transparency. We clearly outline any applicable fees during the account opening process and in our terms and conditions.",
            show: false
        },{
            id: 6,
            title: "How does BellBank support African businesses in receiving payments?",
            answer: "BellBank is on a mission to simplify and accelerate how African businesses receive payments. We provide innovative solutions to enhance the payment experience, making it easier for businesses to transact locally and internationally What customer support options are available?",
            show: false
        }
    ]

    const [faqs, setFaqs] = useState(faq)

    const handleFold = (index: number)=>{

        let newF= faqs.map((value,i, array)=>{
            if (value.show){
                value = {...value, show: false}
            }
           if (value.id == index){

              value = {...value, show: !array[i].show}

               // return value
           }
           return value
       })

        setFaqs(newF)

    }
    return (
        <div className={'relative w-full mx-auto py-[50px] overflow-hidden'} id={'#faq'} >
        <div className={'relative w-[90%] md:w-[80%] flex-col lg:flex-row mx-auto flex justify-center items-start'}>
            <div className=" flex flex-col items-center justify-cente gap-[16px]">
                <div className="flex w-full flex-col items-start justify-start gap-[16px]">

                    <b className="lg:w-[406px] w-full relative text-16xl md:text-23xl flex text-gray-400 items-center">
                                      <span className="w-full mx-auto">
                                        <p className="m-0 block text-center">Let's put your mind at ease.</p>
                                      </span>
                    </b>
                </div>
                <div className="lg:w-[361px] relative text-lg leading-[25px] font-medium flex items-center text-dimgray-100">
                                    <span className="w-full my-[20px] mx-auto">
                                      <span className={'mx-auto text-center'}>{`Can’t find the answer you’re looking for? Reach out to our `}</span>
                                      <Link to={'/support'} className="cursor-pointer no-underline inline-block text-mediumseagreen">
                                        customer support
                                      </Link>
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