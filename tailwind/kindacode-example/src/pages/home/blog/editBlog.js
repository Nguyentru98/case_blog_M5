import {Link, useNavigate, useParams} from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addBlog, blogDetail, getBlog, updateBlog } from "../../../service/blogSevice";
import storage from "../../../firebaseConfig";

export default function EditBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const {id} = useParams()
    const [fileUpload, setFileUpload] = useState('');
    const [percent, setPercent] = useState('')

    useEffect(()=>{
        dispatch(blogDetail(id)).then((res)=>{
            setBlog(res.payload.data);
            console.log(res.payload.data, blog, 'ressssssssssssssss');

        });
    },[])

    const handleUpdate = (values) => {
        console.log(values, 'valuesvaluesvaluesvaluesvalues');
        const storageRef = ref(storage, `/files/${fileUpload.name}`)
        const uploadTask = uploadBytesResumable(storageRef, fileUpload);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
     
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(values, 666666666666666);
                    const postData = { ...values, image: url }
                    console.log(id, postData, 'url');
                    dispatch(updateBlog({id, postData})).then((res)=>{
                        console.log(res, 'update ok');
                        dispatch(getBlog()).then(()=>{
                            navigate('/home')
                        })
            
                    });
                });
            }
        )

    }

    console.log(blog, 'blog');
    return (
        <>
            <div className="mt-20"></div>
            <Formik enableReinitialize initialValues={{title: blog?.title,content: blog?.content,publishDate: blog?.publishDate, image:'',user: {id: 1}}}
                    onSubmit={(values)=>{
                        handleUpdate(values)
                    }}>

            <Form >
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <Field name={'title'} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                    <Field name={'content'} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                    <Field name={'publishDate'} type="date" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file Image</label>
                    <Field name={'image'} className="block w-3/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={(event) => {
                        console.log(event.currentTarget.files[0], 'event.currentTarget.files[0]');
                        setFileUpload(event.currentTarget.files[0]);
                        }} />
                    <p>{percent} "% done"</p>
                    <div
                            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-max h-max">
                            <a href="#">
                                <img className="rounded-t-lg" src={(blog?.image)}
                                     alt=""/>
                            </a>
                    </div>
                </div>
                {/*<div>*/}
                {/*    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contents</label>*/}
                {/*    <textarea name={'content'} id="message" rows={4} className="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." defaultValue={""} />*/}
                {/*</div>*/}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Save</button>
            </Form>
            </Formik>
        </>
    );
}