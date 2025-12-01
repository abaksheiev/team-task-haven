import { BrowserRouter, Routes, Route, NavLink} from 'react-router';
import DashboardPage from '../modules/dashboard/pages/DashboardPage';
import ProfilePage from '../modules/profile/pages/ProfilePage';
import TaskDetailsPage from '../modules/tasks/pages/TaskEditForm';
import TaskListPage from '../modules/tasks/pages/TaskListPage';

function App() {
 return (
   <BrowserRouter>
         <header className="sticky">
         <NavLink to="/"  className="button rounded">
           <span className="icon-home"></span>
           Dashboard
         </NavLink>
         <NavLink to="/taskList" className="button rounded">
          <span className='icon-search'></span>  Tasks
         </NavLink>
         <NavLink to="/profile" className="button rounded">
          <span className="icon-user"></span> Profile
         </NavLink>
       </header>
      <div className="container">
        <Routes>
           <Route path="/" element={<DashboardPage />} />
           <Route path="/taskList" element={<TaskListPage />} />
           <Route path="/task/:id" element={<TaskDetailsPage />} />
           <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}

export default App;
