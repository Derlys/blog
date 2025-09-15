import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
    return (
        <div className=" h-screen bg-gray-900 px-6 pt-24 pb-32 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Quieres contribuir con un articulo</h2>
                        <p className="mt-6 text-lg/8 text-gray-400">
                            Aquí puedes plasmar tus ideas y dejar tu opinion sobre temas tecnológicos
                        </p>
                        <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    545 Mavis Island
                                    <br />
                                    Chicago, IL 99191
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                                        +1 (555) 234-5678
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:hello@example.com" className="hover:text-white">
                                        hello@example.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                )
}
