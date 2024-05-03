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

const products = [
    {name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon},
    {name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon},
    {name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon},
    {name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon},
    {name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon},
]
const callsToAction = [
    {name: 'Watch demo', href: '#', icon: PlayCircleIcon},
    {name: 'Contact sales', href: '#', icon: PhoneIcon},
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export type DivcPJLVType = {
    vector?: string;
    sVG: string;

    /** Style props */
    propBackgroundColor?: CSSProperties["backgroundColor"];
    propBorderBottom?: CSSProperties["borderBottom"];
    propColor?: CSSProperties["color"];

};

const Header: FunctionComponent<DivcPJLVType> = ({
                                                     vector,
                                                     sVG,
                                                     propBackgroundColor = 'bg-darkslategray-500',
                                                     propBorderBottom ='border-gray-800' ,
                                                     propColor = 'whitesmoke'
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
                    <a href="#" className="-m-1.5 p-1.5 border-0">

                        <img
                            className="  w-[119px] h-[26px]"
                            alt=""
                            src={vector}
                        />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <div

                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >

                        <Bars3Icon className="h-6 w-6" color={propBackgroundColor != '#fff' ? '#fff': '#000'} aria-hidden="true"/>
                    </div>
                </div>
                {/*larger area */}
                <Popover.Group className="hidden  lg:flex lg:gap-x-12">
                    <Popover className="relative bg-none border-0">
                        <Popover.Button as={'div'}  onMouseEnter={()=>{

                        }}
                            className={`flex cursor-pointer dropDown bg-transparent  border-0 focus-visible:border-none items-center gap-x-1 text-sm font-semibold leading-6 .text-gray-1100 ${propColor}`}>
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" fill={'white'}
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
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div
                                                className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                           aria-hidden="true"/>
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold .text-gray-1100">
                                                    {item.name}
                                                    <span className="absolute inset-0"/>
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 .text-gray-1100 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" style={productsStyle} className={` text-sm  no-underline font-semibold leading-6 `}>
                        Features
                    </a>

                    <a href="#" style={productsStyle} className="text-sm text-gray-1100 no-underline font-semibold leading-6 .text-gray-1100">
                        Marketplace
                    </a>
                    <a href="#" style={productsStyle} className="text-sm text-gray-1100 no-underline font-semibold leading-6 .text-gray-1100">
                        Companys
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    <div className="w-[42px] relative h-12">
                    <Link to={'/'} style={productsStyle} className={'text-white hover:text-white'}>
                            <div
                                className="absolute top-[13px] left-[0px] font-medium flex items-center w-[42px] h-[22px]"
                                style={productsStyle}
                            >
                                Login
                            </div>
                        </Link>

                    </div>
                    <AppBtn text={'Create account'}/>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="#" className="-m-1.5 p-1.5 !focus-visible:border-none">

                            <img
                                className="border-0 !focus-visible:border-none"
                                alt=""
                                src={'./Bellgreen.png'}
                            />
                        </Link>
                        <div

                            className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >

                            <XMarkIcon className="h-6 w-6" fill={'black'} aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button
                                                className="flex w-full items-center bg-transparent justify-between  border-0 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 .text-gray-1100 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block font-aeonik text-mediumseagreen no-underline rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 .text-gray-1100 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    to="/aboutus"
                                    className="-mx-3 block font-aeonik rounded-lg px-3 py-2 text-black no-underline text-base font-semibold leading-7 .text-gray-1100 hover:bg-gray-50"
                                >
                                    About us
                                </Link>
                                <a
                                    href="#"
                                    className="-mx-3 block font-aeonik rounded-lg px-3 py-2 text-base text-black no-underline font-semibold leading-7 .text-gray-1100 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block font-aeonik rounded-lg px-3 py-2 text-black no-underline text-base font-semibold leading-7 .text-gray-1100 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <div className="w-[42px] relative h-12">

                                </div>
                                <AppBtn text={'Login'} />
                                <div className="my-2"></div>
                                <AppBtn text={'Create accounts'}/>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

    );
};

export default Header;
