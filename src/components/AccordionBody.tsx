import { useState } from "react";
import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'

interface AccordionProps {
    title: string
    content: string
    isOpenState?: boolean
}

const Accordion = ({ title, content, isOpenState = false }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(isOpenState)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='bg-whiteFaq p-4'>
            <button onClick={toggleAccordion} className='flex justify-between items-center w-full'>
                <h2 className='text-dark-purple font-work-sans text-lg font-bold hover:text-medium-purple transition duration-300 text-left'>{title}</h2>
                {isOpen ? <Minus /> : <Plus />}
            </button>

				<div className={`overflow-hidden transition-max-height duration-300 ease-in ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
					<p className='text-dark-grayish-blue font-work-sans text-sm mt-2 text-gray-purple'>{content}</p>
				</div>

        </div>
    )
}

export default Accordion