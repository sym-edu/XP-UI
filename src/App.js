import React from 'react';
import CoursesOverview from "./coursesOverview";
import Dashboard from './dashboard';

function App () {
    return(
        <div className="root">
            <div>
        <CoursesOverview />
        </div>
        <div>
            <Dashboard />
        </div>
        </div>
    )
}

export default App;