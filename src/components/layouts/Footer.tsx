import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">CODINGPRO</h3>
                        <p className="text-gray-600">Empowering the next generation of developers</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Programs</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
                            <li><a href="#" className="hover:text-gray-900">Data Science</a></li>
                            <li><a href="#" className="hover:text-gray-900">Mobile Development</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;