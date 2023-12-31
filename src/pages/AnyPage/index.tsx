import {useParams} from "react-router-dom";


export const AnyPage = () => {
    const {id} = useParams();
    return (
        <section className="main-container">
            <h1 className="main-container__title">{id?.toLowerCase().replace("_"," ")}</h1>
        </section>
    )
}