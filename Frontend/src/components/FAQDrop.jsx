import downarrow from "@/images/downarrow.svg";
import {useState} from "react";

const FAQs = () => {

    const initialDropdowns = [
        { isOpen: false, question: "Do I need an x-ray or a scan/ Can I have an x-ray or a scan?", answer: "While x-rays and scans can be useful diagnostic tools, they are not always necessary for managing your symptoms initially. Most patients benefit greatly from exercise-based rehabilitation and physical therapy. If there is no improvement with these treatments, imaging can then help guide the next steps of your care." },
        { isOpen: false, question: "How long would this take to get better?", answer: "Muscles tend to take 8-12 weeks to adapt and get stronger, it is important to stay consistent with exercises to see the full effects. Different symptoms can vary in recovery time. Recovery time also depends on the type of symptoms you have." },
        { isOpen: false, question: "Can I have a pain killing injection?", answer: "We advise to attempt the least invasive techniques before moving onto the more invasive options such as injections and operations. This is because these more invasive treatments may not always produce the desired outcomes and the cons may outweigh the pros of the treatment" },
        { isOpen: false, question: "Is Ice or Heat better for my injury?", answer: "The answer to this is 'Whatever works best for you'. We tend to find that heat works better for individuals with lower back pain but ice could work better for those who have inflammation of the joints. For arthritic pains, heat also tends to work better" },
        { isOpen: false, question: "How many times a day should I do the exercises?", answer: "Answer5" },
        { isOpen: false, question: "Can I continue my regular activities and sports?", answer: "Yes. Although you may be experiencing discomfort, we recommend that you remain active during your rehabilitation. However, it is important not force yourself to do activities in the same way you were before your symptoms, it is important to ease yourself back into the flow of the activities." },
        { isOpen: false, question: "What should I do if my pain worsens?", answer: "Answer7" },

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