import React from "react";

function Card(props) {
    const { name, aboutme, interests, socials } = props.props;

    return (
        <div className="p-8 shadow-xl border border-gray-200 bg-white rounded-lg w-80 max-w-sm flex flex-col items-start space-y-4">
            <div className="text-2xl font-semibold text-gray-800">
                Hi, I am <span className="text-indigo-600 text-3xl">{name}</span>
            </div>
            <div className="text-gray-700 text-lg">{aboutme}</div>
            <div className="text-gray-800 font-semibold text-lg">
                My interests are:
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                    {interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
            <div className="text-gray-800 font-semibold text-lg w-full">
                Contact me at:
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                    {socials.map((social, index) => (
                        <a 
                            href={social} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            key={index}
                            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
                        >
                            Social {index + 1}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;