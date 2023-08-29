import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {blogDetail} from "../../../service/blogSevice";

export  default function  BlogDetails() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate()
    // const blogs = useSelector(state => {
    //     console.log('BlogDetails', state.blogs.blogs)
    //     return state.blogs.blogs;
    //
    // })
    // useEffect(() => {
    //     dispatch(blogDetail());
    // })
    // console.log(blogDetail())
    return(
        <>
            <div
                className="max-w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20 w-max h-max">
                <a href="#">
                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg"
                         alt=""/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tiêu De</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                        enterprise technology acquisitions of 2021 so far, in reverse chronological
                        order.</p>

                    <Link to={"/home/BlogDetails"}>
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
        </>


    )

}
