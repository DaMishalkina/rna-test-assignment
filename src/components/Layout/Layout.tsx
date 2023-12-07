import {Logo} from "../svgs/Logo";
import {Header} from "../Header/Header";
import layoutContent from "../../data/layoutContent.json";
import {Outlet} from "react-router-dom";



export const Layout = () => {
    return (
        <section>
            <Header
                navigationMenu={layoutContent?.header?.navigationMenu}
                languagesSection={layoutContent?.header?.languagesSection}
                registerLinks={layoutContent?.header?.loginLinksSection}
                title={layoutContent?.title}
                logo={<Logo title={layoutContent?.title} width="120" height="36" />}
            />
            <main>
                <Outlet />
            </main>
        </section>

    )
}