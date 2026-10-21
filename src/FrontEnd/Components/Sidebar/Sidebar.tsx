import './Sidebar.css'
import {House, Compass, Bookmark, Users } from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className="Sidebar">
            <nav>
                <a href="#">
                    <House size={20} />
                    Home
                </a>
                <a href="#">
                    <Compass size={20} />
                    Discover
                </a>
                <a href="#">
                    <Bookmark size={20} />
                    My Lists
                </a>
                <a href="#">
                    <Users size={20} />
                    Groups
                </a>
            </nav>
        </aside>

    )
}