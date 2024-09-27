import AccordionContainer from "./components/AccordionContainer.tsx";

const App = () => {
  return (
    <main className='font-workSans bg-light-pink w-full h-screen relative flex flex-col justify-center items-center px-6'>
       <section className='bg-mobile md:bg-desktop bg-cover h-2/5 absolute inset-0'></section>
        <AccordionContainer />
    </main>
  )
}

export default App