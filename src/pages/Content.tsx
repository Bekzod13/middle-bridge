import { useParams } from "react-router";

const Content = () => {
    const {page} = useParams();
    return <>
        <h1>{page}</h1>
    </>
}

export  default Content;