import { Header } from "../comps/Header";
import MouseShadow from "../comps/MouseShadow";
import { Footer } from "../sections/Footer";
import Projects from "../sections/Projects";
import Stack from "../sections/Stack";
import { Welcome } from "../sections/Welcome";
// import {FpsView} from "react-fps";

export function Home() {

    return (
        <>
            <Header />
            <Welcome />
            <Stack />
            <Projects />
            {/* <FpsView /> */}
            <MouseShadow />
            <Footer />

        </>
    );
}
