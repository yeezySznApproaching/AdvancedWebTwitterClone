import React, {useState } from 'react';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile.js';
import ProfileManagement from '.pages/ProfileManagement';
import Search from './Pages/Search';

const App = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const navigateTo = (page) => {
        setCurrentPage(page);
    };
    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'UserProfile':
                return <UserProfile />;
            case 'ProfileManagement':
                return <ProfileManagement />;
            case 'Search':
                return <Search />;x
            default:
                return <Home />;
        }
    };
    return (
        <div>
            <NavBar navigateTo ={navigateTo} />
            {renderPage()}
        </div>
    );
};
export default App;