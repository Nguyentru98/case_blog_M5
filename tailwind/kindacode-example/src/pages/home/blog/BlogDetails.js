import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {blogDetail} from "../../../service/blogSevice";
import customAxios from "../../../service/api";
import blogSlice from "../../../redux/blog/blogSlice";
import {deleteBlogs,getBlog} from "../../../service/blogSevice";
export  default function  BlogDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()
    console.log("id", id)
    const blogs = useSelector(state => {
        console.log('data blog', state.blogs.blogs)
        return state.blogs.blogs;
    })
    let data ='';
    for (let i = 0; i < blogs.length; i++) {
        if(blogs[i].id == id) {
            data = blogs[i]
        }
    }
    console.log(data.title)
   // useEffect(()=>{
   //      dispatch(blogDetail(id))
   //  },[])
    const handleDelete =  ( (id)=>{
        dispatch(deleteBlogs(id)).then(()=>{
            dispatch(getBlog())
            navigate("/home")
        })
    })
    return(
        <>
            <div
                className="max-w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20 w-max h-max">
                <div>
                    <img className="rounded-t-lg" src={data.image} alt=""/>
                </div>
                <div className="p-5">
                    <div className="flex">
                        <div className="">
                            <img className="mr-4 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Rounded avatar" />
                            <div className="">{data.user.username}</div>
                        </div>
                        <div>
                            <svg className="mr-4 mt-3  h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <Link to={'/home/edit/' + data.id} >
                                   <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
                                </Link>
                            </svg>
                        </div>
                        <div>
                            <svg className=" mr-4 mt-3 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <Link to="/home" onClick={() => handleDelete(data.id)}>
                                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                               </Link>
                            </svg>
                        </div>

                    </div>

                        <div>
                            <h5 className="mt-4 mb-2 mr-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                            <div className="mb-1.5">Post Date : {data.publishDate}</div>
                        </div>

                    <div className="w-6/12">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-3/4 " >{data.content}</p>
                    </div>

                    {/*<Link to={"/home/BlogDetails"}>*/}
                    {/*    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
                    {/*        Read more*/}
                    {/*        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">*/}
                    {/*            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                  strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9"/>*/}
                    {/*        </svg>*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </>


    )

}
