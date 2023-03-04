
import { Outlet } from 'react-router'
import GlobalStyle from '../GlobalStyles'
import { LayoutWrapper } from '../styledComponents/Wrappers/StyledWrappers'
import Navbar from '../Navbar'

export default function Layout() {
    return (
        <>
            <GlobalStyle />
            <LayoutWrapper>
                <Navbar />
                <Outlet></Outlet>
            </LayoutWrapper>
        </>
    )
}
