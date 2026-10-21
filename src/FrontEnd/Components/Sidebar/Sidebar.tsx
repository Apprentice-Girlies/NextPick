import '/src/Frontend/Components/Sidebar/Sidebar.css'

export default function Sidebar() {
    return (
        <div className="app-layout">
            <aside className="Sidebar">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Discover</a>
                    <a href="#">My Lists</a>
                    <a href="#">Groups</a>
                </nav>
            </aside>
        </div>
    )
}