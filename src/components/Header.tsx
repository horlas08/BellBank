import {FunctionComponent, useMemo, type CSSProperties, useRef} from "react";
import {Link} from "react-router-dom";
import AppBtn from "./AppBtn";

import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Menu, Popover, Transition} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/react/20/solid'

const mores = [
    {name: 'Faq',  href: '/faq', icon: ChartPieIcon},
    {name: 'Blog', href: 'https://medium.com/@GetBellBank', icon: CursorArrowRaysIcon},
    {name: 'Contact Us',  href: '/contact', icon: FingerPrintIcon},
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export type HeaderProps = {
    vector?: string;
    sVG: string;

    /** Style props */
    propBackgroundColor?: CSSProperties["backgroundColor"];
    propBorderBottom?: CSSProperties["borderBottom"];
    propColor?: CSSProperties["color"];
    chevronColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
    buttonBgColor?: CSSProperties["color"];

};

const Header: FunctionComponent<HeaderProps> = ({
                                                     vector,
                                                     sVG,
                                                     propBackgroundColor = 'bg-darkslategray-500',
                                                     propBorderBottom ='border-gray-800' ,
                                                     propColor = 'whitesmoke',
                                                     chevronColor = 'black',
                                                     textColor = 'text-gray-1100',
                                                    buttonBgColor = 'bg-mediumseagreen '
                                                 }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const divcPJLVStyle: CSSProperties = useMemo(() => {
        return {
            backgroundColor: propBackgroundColor,
            borderBottom: propBorderBottom,
        };
    }, [propBackgroundColor, propBorderBottom]);

    const productsStyle: CSSProperties = useMemo(() => {
        return {
            color: propColor,
        };
    }, [propColor]);

    return (
        <header className={`${propBackgroundColor} border-b-[1px] border-solid ${propBorderBottom} ${propColor} font-aeonik`} style={productsStyle}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 border-0">

                        <img
                            className="  w-[119px] h-[26px]"
                            alt=""
                            src={vector}
                        />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <div

                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >

                        <Bars3Icon className="h-6 w-6 cursor-pointer" color={chevronColor} aria-hidden="true"/>
                    </div>
                </div>
                {/*larger area */}
                <Popover.Group className="hidden  lg:flex lg:gap-x-12">


                    <Link to="/about-us" style={productsStyle} className={` text-sm  no-underline leading-6 `}>
                        About us
                    </Link>

                    <Link to="/personal" style={productsStyle} className={`text-sm  no-underline leading-6`}>
                        Personal
                    </Link>
                    <Link to="/company" style={productsStyle} className={`text-sm  no-underline  leading-6`}>
                        Company
                    </Link>
                    <Popover className="relative bg-none border-0">
                        <Popover.Button as={'div'}  onMouseEnter={()=>{

                        }}
                                        className={`flex cursor-pointer dropDown bg-transparent  border-0 focus-visible:border-none items-center gap-x-1 text-sm leading-6 .text-gray-1100 ${propColor}`}>
                            Learn More
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" fill={chevronColor}
                                             aria-hidden="true"/>
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute -left-1 top-full z-10 mt-3 min-w-[10rem]  overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="px-[1.5rem] py-[2rem]">
                                    {mores.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-3 rounded-lg text-sm leading-6 hover:bg-gray-50"
                                        >

                                            <div className="flex-auto">
                                                <Link to={item.href} className="block text-black no-underline font-normal  .text-gray-1100">
                                                    {item.name}

                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>
                <div className="hidden lg:flex gap-x-[20px] lg:flex-1 lg:justify-end">

                    <div className="w-[42px] relative h-12">
                    <a href={'https://app.bellmfb.com/account/login'} target={'_blank'} style={productsStyle} className={'text-white hover:text-white'}>
                            <div
                                className="absolute top-[13px] left-[0px] font-medium flex items-center w-[42px] h-[22px]"
                                style={productsStyle}
                            >
                                Login
                            </div>
                        </a>

                    </div>
                    <AppBtn text={'Create account'} onclick={()=> window.location.href = 'https://app.bellmfb.com/account/register'} bg={`${buttonBgColor}`}/>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed  inset-0 z-10"/>
                <Dialog.Panel className="fixed  inset-y-0 right-0 z-10 w-full max-w-[90%] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="#" className="-m-1.5 p-1.5 !focus-visible:border-none">

                            <img
                                className="border-0 !focus-visible:border-none"
                                alt=""
                                src={'./Bellgreen.png'}
                            />
                        </Link>
                        <div className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >

                            <XMarkIcon className="h-6 w-6 cursor-pointer" fill={chevronColor} aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="mt-6  flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">


                                <Link
                                    to="/about-us"
                                    className="-mx-3 block font-aeonik rounded-lg px-3 py-2 text-black no-underline text-base font-semibold leading-7 .text-gray-1100 hover:bg-gray-50"
                                >
                                    About us
                                </Link>
                                <Link
                                    to="/personal"
                                    className="-mx-3 block font-aeonik rounded-lg px-3 py-2 text-base text-black no-underline font-semibold leading-7 .text-gray-1100 hover:bg-gray-50"
                                >
                                    Personal
                                </Link>
                                <Link
                                    to="/company"
                                    className="-mx-3 block font-aeonik rounded-lg px-3 py-2 text-black no-underline text-base font-semibold leading-7 .text-gray-1100 hover:bg-gray-50"
                                >
                                    Company
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button
                                                className="flex  w-full items-center bg-transparent justify-between  border-0 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 .text-gray-1100 hover:bg-gray-50">
                                                Learn More
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...mores].map((item) => (
                                                    <Link to={item.href} className={`block font-aeonik ${window.location.pathname == item.href ? 'text-mediumseagreen': 'text-gray-100'} no-underline rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 .text-gray-1100 hover:bg-gray-50`}>
                                                        {item.name}
                                                    </Link>

                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                <div className="w-[42px] relative h-12">

                                </div>
                                <AppBtn text={'Login'} onclick={()=> window.location.href = 'https://app.bellmfb.com/account/login'}/>
                                <div className="my-2"></div>
                                <AppBtn text={'Create accounts'} onclick={()=> window.location.href = 'https://app.bellmfb.com/account/register'}/>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

    );
};

export default Header;
