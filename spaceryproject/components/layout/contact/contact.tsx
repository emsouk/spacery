


export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Contactez-nous</h2>
            <p className="mb-8 text-white">Vous avez des questions ou souhaitez en savoir plus sur nos services ? Hésitez pas à nous contacter !</p>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-left mb-2 text-white">Nom</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Votre nom" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-left mb-2 text-white">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Votre email" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-left mb-2 text-white">Message</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Votre message"></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition">Envoyer</button>
            </form>
        </div>
    );
}