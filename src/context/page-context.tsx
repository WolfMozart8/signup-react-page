import {createContext} from "react"

interface PagesData {
    currentPage: string,
    changePage: (s: string) => void,



    email: string,
    submitedEmail: (e: string) => void
}

const PagesContext = createContext<PagesData | undefined>(undefined);

export default PagesContext;
