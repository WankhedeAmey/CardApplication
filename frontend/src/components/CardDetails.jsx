import React, { useState } from "react";
import axios from "axios";

function CardDetails({ formsumbission, setFormsubmission }) {
    const [name, setName] = useState("");
    const [aboutme, setAboutme] = useState("");
    const [interests, setInterests] = useState("");
    const [linkedIn, setlinkedIn] = useState("");
    const [github, setgithub] = useState("");
    const [twitter, settwitter] = useState("");

    const [errors, setErrors] = useState({});

    const handleSubmit = async () => {
        const newErrors = {};

        if (!name) newErrors.name = "Name is required";
        if (!aboutme) newErrors.aboutme = "About Me is required";
        if (!interests) newErrors.interests = "Interests are required";
        if (!linkedIn && !github && !twitter)
            newErrors.socials = "At least one social link is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const socials = [linkedIn, github, twitter].filter((ele) => ele !== "");
        const interestsArr = interests.split(",").map((ele) => ele.trim());
        const payload = { name, aboutme, interests: interestsArr, socials };

        try {
            const response = await axios.post(
                "http://localhost:3000/api/cards",
                payload
            );
            console.log("response: ", response);
            // Reset form if needed
            setName("");
            setAboutme("");
            setInterests([]);
            setlinkedIn("");
            setgithub("");
            settwitter("");
            setErrors({});
            setFormsubmission((prev) => !prev);
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <div className="flex flex-col w-80 p-6 bg-orange-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Card Details</h2>
            <label className="mb-2 font-medium">Name</label>
            <input
                className={`mb-4 p-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <label className="mb-2 font-medium">About Me</label>
            <input
                className={`mb-4 p-2 border ${
                    errors.aboutme ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="About me"
                value={aboutme}
                onChange={(e) => setAboutme(e.target.value)}
            />
            {errors.aboutme && <p className="text-red-500">{errors.aboutme}</p>}
            <label className="mb-2 font-medium">Interests</label>
            <input
                className={`mb-4 p-2 border ${
                    errors.interests ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="Interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
            />
            {errors.interests && (
                <p className="text-red-500">{errors.interests}</p>
            )}
            <h3 className="text-lg font-bold mt-4 mb-2">Social Links</h3>
            <label className="mb-2 font-medium">LinkedIn</label>
            <input
                className={`mb-4 p-2 border ${
                    errors.socials ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="LinkedIn URL"
                value={linkedIn}
                onChange={(e) => setlinkedIn(e.target.value)}
            />
            <label className="mb-2 font-medium">GitHub</label>
            <input
                className={`mb-4 p-2 border ${
                    errors.socials ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="GitHub URL"
                value={github}
                onChange={(e) => setgithub(e.target.value)}
            />
            <label className="mb-2 font-medium">Twitter</label>
            <input
                className={`mb-4 p-2 border ${
                    errors.socials ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="Twitter URL"
                value={twitter}
                onChange={(e) => settwitter(e.target.value)}
            />
            {errors.socials && <p className="text-red-500">{errors.socials}</p>}
            <button
                className="mt-6 p-2 bg-orange-500 text-white rounded-md font-bold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}

export default CardDetails;
