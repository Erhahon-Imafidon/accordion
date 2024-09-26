import AccordionContainer from "./components/AccordionContainer.tsx";

const App = () => {
  return (
    <div className='font-workSans bg-light-pink w-full h-screen relative flex flex-col justify-center items-center'>
       <div className='bg-mobile md:bg-desktop bg-cover h-2/5 absolute inset-0'></div>
        <AccordionContainer />
    </div>
  )
}

export default App