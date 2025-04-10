import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// Create router with future flags
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      ),
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    },
  }
);

const App = () => {
  return (
    // Using RouterProvider with the configured router
    <RouterProvider router={router} />
  );
}

export default App;
