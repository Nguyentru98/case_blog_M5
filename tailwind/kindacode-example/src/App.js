
import './App.css';
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/home/login"
import ListBlog from "./pages/home/blog/listBlog";
import BlogDetails from "./pages/home/blog/BlogDetails";
import BlogMange from "./pages/home/blog/blogMange";
import AddBlog from "./pages/home/blog/addBlog";



function App() {
  // const user = useSelector(state => {
  //   return state.user
  // })
  // console.log(user)
  return (
      <>
          <Routes>
            <Route path={''} element={<Login/>}/>
              <Route path={'home'} element={<Home/>}>
                  <Route path={'list'} element={<ListBlog/>}/>
                  <Route path={'add'} element={<AddBlog/>}/>
                  <Route path={'blogDetails'} element={<BlogDetails/>}/>
                  <Route path={'blogManage'} element={<BlogMange/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;