import Globe from "react-globe.gl"
import Button from "../Components/Button"
import { useState } from "react"


const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('caillatdorian@gmail.com')

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    };

  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-col-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Bonjour, je suis Dorian</p>
                        <p className="grid-subtext">Je suis développeur web backend </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Technologies</p>
                        <p className="grid-subtext">Je suis spécialisé en typescript, node.js et nest.js. </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.jpg"
                         />
                    </div>
                    <div>
                        <p className="grid-headtext">Je travaille en France.</p>
                        <p className="grid-subtext">J'habite en Corrèze. </p>
                        <Button name="Contacter moi" isBeam containerClass="w-full mt-10" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Ma passion pour le code</p>
                        <p className="grid-subtext">J'aime résoudre des problèmes.</p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full h-[220px] sm:h-[276px] md:h-[300px] object-cover object-top block" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">
                            Contactez-moi
                        </p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg' } alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">caillatdorian@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About