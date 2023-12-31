import { Field, Formik } from "formik"
// import { useDispatch } from "react-redux";
import { Form, Link, useNavigate } from "react-router-dom"
// import { register } from "../../service/userService";


export default function Register() {
 
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const handleRegister = async (values) => {
    //     let a = await dispatch(register(values))
    //      if (a.payload.data.message.token === "User is not exist"){
    //         alert("dang nhap ko thanh cong")
    //         navigate("/")
    //     }else if (a.payload.data.message.token === "Password is wrong") {
    //         alert("sai mk")
    //         navigate("/")
    //     } else {
    //         await dispatch(register(values))
    //         navigate("/home")
    //     }

    // }
    return (
        <>
            <Formik> 
                {/* initialValues={{username:'',password:''}}
                    onSubmit={(values)=>{
                        handleRegister(values)
                    }}   */}
                         
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Register an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                User Name
                            </label>
                            <div className="mt-2">
                                <Field
                                    id="text"
                                    name={'username'}
                                    type="text"
                                    autoComplete="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to={"#"} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Field
                                    id="password"
                                    name={'password'}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Register
                            </button>
                        </div>
                    </Form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        <Link to={"/"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Go back to login
                        </Link>
                    </p>
                </div>
            </div>
        </Formik>
        </>
    )
}
