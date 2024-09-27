import AccordionHeader from "./AccordionHeader.tsx";
import Accordion from "./AccordionBody.tsx";

const AccordionContainer = () => {
  return (
    <section className='bg-whiteFaq w-full md:w-1/2 md:max-w-[600px] p-3 md:p-6 rounded-xl relative z-30'>
       <AccordionHeader />
        <div className='divide-y divide-solid divide-light-pink'>
           <Accordion title='What is Frontend Mentor, and how will it help me?' content='Frontend Mentor offers realistic coding challengesto help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It&apos;s suitable for all levels and suitable for portfolio building. ' isOpenState={true} />

            <Accordion title='Is Frontend Mentor Free' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid cum cumque dicta facilis laudantium nulla optio quae quasi voluptatibus.' />
            <Accordion title='Can I use Frontend projects in my portfolio' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eum nulla odio quae quaerat sequi?' />
            <Accordion title='How can I get help with a challenge?' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi facilis illum, impedit laborum nam odit officiis placeat quasi, reiciendis rerum similique totam velit voluptatum.' />

        </div>
    </section>
  )
}

export default AccordionContainer