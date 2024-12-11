import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="bg-gray-100 flex justify-center h-screen">
                <div className="text-center px-4">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Welcome to <span className='text-blue-600'>CLS</span></h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The best platform for managing your tasks and projects seamlessly.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
                        Get Started
                    </button>
                </div>
            </section>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="grid grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="relative group">
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform group-hover:scale-105 duration-300 ease-in-out group-hover:z-10">
                            <h3 className="text-xl font-bold mb-4">Card 1</h3>
                            <p className="text-gray-600">
                                This is some content inside the first card.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative group">
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform group-hover:scale-105 duration-300 ease-in-out group-hover:z-10">
                            <h3 className="text-xl font-bold mb-4">Card 2</h3>
                            <p className="text-gray-600">
                                This is some content inside the second card.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative group">
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform group-hover:scale-105 duration-300 ease-in-out group-hover:z-10">
                            <h3 className="text-xl font-bold mb-4">Card 3</h3>
                            <p className="text-gray-600">
                                This is some content inside the third card.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
