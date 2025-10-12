
import { useParams } from "react-router"

const ConfigItemPage = () => {

    const params = useParams()

    return (
        <>
            {params.id} - {crypto.randomUUID()}
        </>
    )
}

export default ConfigItemPage