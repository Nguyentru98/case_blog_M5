
import './App.css';
import { useSelector} from "react-redux";
// import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/home/login"
import ListBlog from "./pages/home/blog/listBlog";
import BlogDetails from "./pages/home/blog/BlogDetails";
import AddBlog from "./pages/home/blog/addBlog";
import EditBlog from './pages/home/blog/editBlog';
import Register from './pages/home/register';



function App() {
  const user = useSelector(state => {
    return state.user
  })
  console.log('userrrr',user)
  return (
      <>
          <Routes>
            <Route path={''} element={<Login/>}/>
            <Route path={'register'} element={<Register/>}/>
              {user != null}
              <Route path={'home'} element={<Home/>}>
                  <Route path={''} element={<ListBlog/>}/>
                  <Route path={'add'} element={<AddBlog/>}/>
                  <Route path={'edit/:id'} element={<EditBlog/>}/>
                  <Route path={'blogDetails/:id'} element={<BlogDetails/>}/>
                 
             </Route>
          </Routes>
      </>
  );
}

export default App;
