import Link from 'next/link';


export default function Formulario() {
    return (
        <main className="flex justify-center items-center h-screen bg-white text-gray-800">
            <div id="inicio" className="container mx-auto w-150 bg-white shadow-md rounded-lg p-6 border-1 border-black-500">
                <div className='w-15'>
                    <Link
                        href="/"
                        className=" px-3 py-1 text-sm border rounded hover:bg-gray-50 flex"
                    >
                        volver
                    </Link>
                </div>
                <header className="flex flex-col items-center gap-6">
                    <h1 className="text-2xl font-semibold">contáctame</h1>
                </header>

                <div className="flex justify-center-safe">
                    <form
                        action="https://formspree.io/f/mqekzlgd"
                        method="POST"
                        className="space-y-4 w-150 "
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            className="border p-2 w-full"
                        />

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Tu email"
                            className="border p-2 w-full"
                        />

                        <textarea
                            name="message"
                            required
                            placeholder="Tu mensaje"
                            className="border p-2 w-full"
                        />
                        <div className="flex justify-center items-center">
                            <button type="submit" className="w-50 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                                Enviar
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </main>
    );
}