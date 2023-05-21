import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - ToyCarExpress`;
    }, [title])
};

export default useTitle;