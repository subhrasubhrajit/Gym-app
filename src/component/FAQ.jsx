import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";


const FAQ = ({ question, answer }) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);



    return (
        <div className='faq' onClick={() => setIsAnswerShowing(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button className="faq_icon">
                    {
                        isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>
            </div>
            {isAnswerShowing && <p className='faq_para'>{answer}</p>}
        </div>
    )
}

export default FAQ
