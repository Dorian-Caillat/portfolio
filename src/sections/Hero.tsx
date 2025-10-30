import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../Components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/navIdex";
import Target from "../Components/Target";
import Reactlogo from "../Components/ReactLogo";
import Cube from "../Components/Cube";
import Rings from "../Components/Rings";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";

const Hero = () => {


    const isMobile = useMediaQuery(
        {
            maxWidth: 768
        }
    );

    const isTablet = useMediaQuery(
        {
            minWidth: 768,
            maxWidth: 1024,
        }
    );

    const isSmall = useMediaQuery(
        {
            maxWidth: 440
        }
    )

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Bonjour, je suis Dorian <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Mon Portfolio</p>
            </div>

            <div className="w-full h-full absolute inset-0">


                <Canvas className="w-full h-full absolute inset-0">

                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 20]}  />

                    <HeroCamera isMobile={isMobile}>  

                        <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, -Math.PI, 0]} />
                    
                    </HeroCamera>

                    

                    <group>
                        <Target position={sizes.targetPosition} />
                        <Reactlogo position={sizes.reactLogoPosition} />
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition} />
                    </group>


                    <ambientLight intensity={1} />
                    
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />

                    </Suspense>

                </Canvas>
            </div>

            <div className="absolute bottom-7 inset-x-0 z-10 c-space flex justify-center">
                <a href="#contact">
                    <Button name="Travaillons ensemble" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>

        </section>
    )
}

export default Hero;