import React, {useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom"

function UserProfile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
        await logout()
        history.push("/signin")
        } catch {
        setError("Failed to log out")
        }
    }

    return (
        <div className="flex h-full justify-center items-center">
            <div className="flex-col border">
                <h2 className="text-center py-2">User Profile</h2>
                {error && <p className="text-red-600 text-center text-sm">{error}</p>}
                <div className="p-4 flex-col border-solid border-2 border-white">
                <p><strong>Email:</strong> {currentUser.email}</p>
                <div>
                    <Link to="/update-profile" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-sm">
                Update Profile
                    </Link>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
        
    )
}

export default UserProfile;