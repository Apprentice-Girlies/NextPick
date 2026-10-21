import Header from "../Components/Header/Header.tsx";

import Sidebar from "../Components/Sidebar/Sidebar.tsx";

export default function Index() {
    return (
        <div className="app-layout">
            <Sidebar></Sidebar>
        <div>
            <Header />
        </div>
    )
}