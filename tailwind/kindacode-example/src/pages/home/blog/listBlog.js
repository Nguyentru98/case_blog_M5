import BlogDetails from "./BlogDetails";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector,} from "react-redux";
import {useEffect} from "react";
import {blogDetail, getBlog} from "../../../service/blogSevice";
import {login} from "../../../service/userService";

export default function ListBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const blogs = useSelector(state => {
        console.log('list', state.blogs.blogs)
        return state.blogs.blogs;

    })
    useEffect(() => {
        dispatch(getBlog());
    }, [])

    return (
        <>
            {
                blogs.map((item, index) => (
                    <div className={'p-2'} key={index}>
                        <div
                            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20 w-max h-max">
                            <a href="#">
                                <img className="rounded-t-lg" src={(item.image)}
                                     alt=""/>
                            </a>
                            <div className="p-5">
                                <div className="">
                                    <img className="mr-4 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Rounded avatar"/>
                                    <div className="">{item.user.username}</div>
                                </div>
                                <a href="#">
                                    <h5 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{(item.title)}</h5>
                                    <div>Post Date : {item.publishDate}</div>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>

                                <Link to={"/home/blogDetails/"+item.id}>
                                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}