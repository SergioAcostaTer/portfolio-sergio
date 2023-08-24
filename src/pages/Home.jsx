import { Boxes } from "../comps/Boxes";
import { Header } from "../comps/Header";
import { Welcome } from "../sections/Welcome";


export function Home() {
    return (
        <div>
            <Header />
            <Welcome />
            <Boxes />

        </div>
    );
}
