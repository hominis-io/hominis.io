import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'MANIFESTO', href: '#' },
    { name: 'INITIATIVES', href: '#' },
    { name: 'CONTACT', href: '#' },
]

export default function Navigation() {
    return (
        <Popover>
            {({ open }) => (
                <>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav
                            className="relative flex items-center justify-between w-full md:w-auto sm:h-10"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <span className="sr-only">Workflow</span>
                                        <img className="h-4 w-auto sm:h-5" src="/hominis.svg" alt="Hominis" />

                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                <ul className="flex">
                                    
                                        {navigation.map((item, index) => (
                                            <li className="ml-24 py-2 px-5 rounded-md hover:bg-red-500 hover:shadow-md">
                                            <a key={item.name} href={item.href}>
                                                <div className="flex items-center justify-end">
                                                    <div className="w-10 border-b border-solid border-white">

                                                    </div>
                                                        <h1 className="ml-3 text-sm font-thin text-gray-200 hover:text-white">{index+1}</h1>
                                                </div>
                                                <div className="text-right font-bold text-gray-200 hover:text-white">
                                                    {item.name}
                                                </div>
                                            </a>
                                            </li>
                                        ))}
                                    
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-sm bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="/hominis-h.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-red-500 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-bold text-gray-100 hover:text-white hover:bg-red-500"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}