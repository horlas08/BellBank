import {LegacyRef, useRef, useState} from "react";
import AppBtn from "../AppBtn";

export default function FormCarry() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const ref = useRef<LegacyRef<HTMLFormElement>>();
    function submit(e: { preventDefault: () => void; }) {
        // This will prevent page refresh
        e.preventDefault();

        // replace this with your own unique endpoint URL
        fetch("https://formcarry.com/s/XXXXXXX", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ email: email, message: message })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(res.message);
                }
            })
            .catch((error) => setError(error));
    }

    if (error) {
        return <p className={'text-center'}>{error}</p>;
    }
    if (submitted) {
        return <p>We've received your message, thank you for contacting us!</p>;
    }

    return (
        <form id={'form'} onSubmit={submit} className={'w-[70%] md:w-[40%] ld:w-[40%]  mx-auto'}>
            <div className="flex justify-between  gap-5">
                <div className="mb-3 flex-1">
                    <label className={'!mb-4'} htmlFor="firstname">First Name</label>
                    <input
                        className={'mt-2'}
                        id="firstname"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 flex-1">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        id="lastname"
                        type="text"
                        className={'mt-2'}
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex justify-between  gap-5">
                <div className="mb-3 flex-1">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        className={'mt-2'}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 flex-1">
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="tel"
                        className={'mt-2'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    className={'!border-mediumseagreen mt-2 !bordered'}
                    value={message}
                    rows={7}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>


            <button type={'submit'} className={'rounded-lg cursor-pointer w-full py-[11px] px-5 box-border text-center bg-mediumseagreen text-floralwhite'}>
                Submit
            </button>
        </form>
    );
}