import Header from "../Components/Header/Header.tsx";

import Sidebar from "../Components/Sidebar/Sidebar.tsx";

export default function Index() {
    return (
        <div className="nextpick-layout">
            <Header/>

            <div className="nextpick-content">
                <Sidebar/>

                <main className="nextpick-main">
                    {/* Homepage content goes here */}
                </main>
            </div>
        </div>
    )
}