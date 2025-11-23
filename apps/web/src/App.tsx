import { BrowserRouter, Routes, Route, NavLink} from 'react-router';
import DashboardPage from './Dashboard/DashboardPage';
import ProfilePage from './Profile/ProfilePage';
import TaskDetailsPage from './TaskDetails/TaskDetailsPage';
import TaskListPage from './TaskList/TaskListPage';

function App() {
 return (
   <BrowserRouter>
         <header className="sticky">
         <NavLink to="/"  className="button rounded">
           <span className="icon-home"></span>
           Dashboard
         </NavLink>
         <NavLink to="/taskList" className="button rounded">
           Tasks
         </NavLink>
         <NavLink to="/profile" className="button rounded">
           Profile
         </NavLink>
       </header>
      <div className="container">
        <Routes>
           <Route path="/" element={<DashboardPage />} />
           <Route path="/taskList" element={<TaskListPage />} />
           <Route path="/taskDetails/:id" element={<TaskDetailsPage />} />
           <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}

export default App;
