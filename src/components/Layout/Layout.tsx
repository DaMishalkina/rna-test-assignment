import {Logo} from "../svgs/Logo";
import {Header} from "../Header/Header";
import layoutContent from "../../data/layoutContent.json";
import {Outlet} from "react-router-dom";



export const Layout = () => {
    return (
        <section>
            <Header
                navigationMenu={layoutContent?.header?.navigationMenu}
                languages={layoutContent?.header?.languages}
                registerLinks={layoutContent?.header?.loginLinks}
                title={layoutContent?.title}
                logo={<Logo title={layoutContent?.title} />}
            />
            <main>
                <Outlet />
            </main>
        </section>

    )
}