const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[color:#1a1a1a] to-[color:#2d2d2d] text-white py-12 mt-8 shadow-2xl h-52 dark:text-black dark:from-[color:#f5f5f5] dark:to-[color:#e0e0e0]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">AK</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Ali Mohammed Khalass</h3>
                                <p className="text-gray-300 dark:text-black">Frontend Developer</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 mt-2 flex items-center justify-center md:justify-start gap-1 dark:text-black">
                            Made With  <i className="fas fa-heart text-primary"></i> By Ali Khalass
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-1">My Contacts</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a href="https://www.instagram.com/ali_mohammed_khalas/" target="_blank"
                                className="social-btn bg-gradient-to-r from-pink-500 to-pink-700" rel="noreferrer">
                                <i className="fab fa-instagram text-lg"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/ali.khalass" target="_blank"
                                className="social-btn bg-gradient-to-r from-blue-600 to-blue-800" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                                <span>FaceBook</span>
                            </a>
                            <a href="https://codepen.io/AliKh01" target="_blank"
                                className="social-btn bg-gradient-to-r from-gray-700 to-gray-900" rel="noreferrer">                                <i className="fab fa-codepen"></i>
                                <span>CodePen</span>
                            </a>
                            <a href="https://www.threads.com/@ali_mohammed_khalas" target="_blank"
                                className="social-btn bg-gradient-to-r from-gray-500 to-gray-700" rel="noreferrer">
                                <i className="fab fa-threads"></i>
                                <span>Threads</span>
                            </a>
                            <a href="mailto:alikhalss60@gmail.com?subject=مرحبا" target="_blank"
                                className="social-btn bg-gradient-to-r from-red-500 to-red-700" rel="noreferrer">
                                <i className="far fa-envelope"></i>
                                <span>Gmail</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-gray-400 text-sm dark:text-black">All rights reserved © 2025 | Design & Development by Ali Mohammed Khalas</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


