import { Boxes } from "../comps/Boxes";
import { Header } from "../comps/Header";
import MouseShadow from "../comps/MouseShadow";
import { Welcome } from "../sections/Welcome";


export function Home() {
    return (
        <div>
            <Header />
            <Welcome />
            <Boxes />
            <MouseShadow />
        </div>
    );
}
