import downarrow from "@/images/downarrow.svg";
import {useState} from "react";

const FAQs = () => {

    const initialDropdowns = [
        { isOpen: false, question: "Do I need an x-ray or a scan/ Can I have an x-ray or a scan?", answer: "Answer1" },
        { isOpen: false, question: "How long would this take to get better?", answer: "Answer2" },
        { isOpen: false, question: "Can I have a pain killing injection?", answer: "Answer3" },
        { isOpen: false, question: "Is Ice or Heat better for my injury?", answer: "Answer 4." },
        { isOpen: false, question: "How many times a day should I do the exercises?", answer: "Answer5" },
        { isOpen: false, question: "Question6", answer: "Answer6" },

    ];

    const [dropdowns, setDropdowns] = useState(initialDropdowns);

    const toggleDropdown = (index) => {
        const updatedDropdowns = dropdowns.map((dropdown, i) => {
            if (i === index) {
                return { ...dropdown, isOpen: !dropdown.isOpen };
            }
            return dropdown;
        });
        setDropdowns(updatedDropdowns);
    };
 
    return (
        <div className="dropdown-container" role="region" aria-label="Frequently Asked Questions">
            <h1 className="FAQs">Frequently Asked Questions</h1>
            {dropdowns.map((dropdown, index) => (
                <li className="dropdown-item" key={index}>
                    <button
                        className="dropbtn"
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={dropdown.isOpen ? 'true' : 'false'}
                        aria-controls={`dropdown-content-${index}`}
                    >
                        <h3>{dropdown.question}</h3>
                        <div className="downarrow">
                            <img src={downarrow} alt="Arrow" />
                            {/* "src/images/downarrow.svg"  */}
                        </div>
                    </button>
                    <div
                        id={`dropdown-content-${index}`}
                        className={`dropdown-content ${dropdown.isOpen ? 'show' : ''}`}
                        aria-hidden={!dropdown.isOpen}
                    >
                        <p>{dropdown.answer}</p>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default FAQs;