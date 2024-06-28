import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import IMAGES from "../assets/Images";

export default function Home() {

    const slides = [
        IMAGES.lg1,
        IMAGES.lg2,
        IMAGES.lg3,
        IMAGES.lg4,
        IMAGES.lg5,
        IMAGES.lg6,
        IMAGES.lg7,
    ]

    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <NavBar />
            <div className="h-full">
                <Carousel>
                    {slides.map(slide => <img src={slide} className="object-cover min-h-[95vh]" />)}
                </Carousel>
            </div>
            <Footer />
        </div>
    )
}