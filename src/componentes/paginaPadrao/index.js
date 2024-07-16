import { Outlet } from 'react-router-dom'
import Banner from '../banner'

function PaginaPadrao() {
    return ( 
        <main>
            <Banner/>

            <Outlet/>
        </main>
    )
}

export default PaginaPadrao