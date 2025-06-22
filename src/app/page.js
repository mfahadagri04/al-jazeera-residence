import './globals.css';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import OurVillas from '../components/OurVillas';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Facilities from '../components/Facilities';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section with Background */}
            <section className="home_section relative min-h-screen">
                <Navbar />
                <Home />
            </section>

            {/* Main Content Sections */}
            <main className="flex-1">
                <section id="villas" className="py-20">
                    <OurVillas />
                </section>

                <section id="facilities" className="py-20 bg-gray-50">
                    <Facilities />
                </section>

                <section id="testimonials" className="py-20">
                    <Testimonial />
                </section>

                <section id="contact" className="py-20 bg-gray-100">
                    <Contact />
                </section>
            </main>
        </div>
    );
}

export default App;