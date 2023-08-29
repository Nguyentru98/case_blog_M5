import Navbar from "../../component/navbar";
import {Outlet} from "react-router-dom";
import SideBar from "../../component/sideBar";

export default function Home() {
    return (
        <>
            {/*<div className="grid grid-rows-1 grid-flow-col gap-4">*/}
            {/*    <div className="col-end-12">*/}
            {/*        <Navbar/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="grid grid-rows-2 grid-flow-col gap-4 ">*/}
            {/*    <div className="col-start-2 flex ">*/}
            {/*        <div className="col-end-4 flex ">*/}
            {/*            <SideBar></SideBar>*/}
            {/*        </div>*/}
            {/*        <div className="col-start-2 flex ">*/}
            {/*            <Outlet></Outlet>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}

            {/*<div className="grid-rows-1">*/}
            {/*    <div className="col-end-12">*/}

            {/*    </div>*/}
            {/*</div>*/}



            {/*<div className="grid grid-rows-3 grid-flow-col gap-4">*/}
            {/*    <div className="row-span-3 ">*/}
            {/*        <div className="grid grid-rows-2 grid-flow-col gap-4 ">*/}
            {/*            <div className="col-start-2 flex ">*/}
            {/*                <div className="col-end-4 flex ">*/}
            {/*                    <SideBar></SideBar>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="row-span-2 col-span-2 ">*/}
            {/*            <div className="col-start-2 flex " style={{marginLeft:250, width:"100%", height:"250px"}}>*/}
            {/*                <Outlet></Outlet>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="flex flex-col h-screen">
                <div className="flex-none ">
                    <Navbar/>
                </div>
                <div className="flex flex-1">
                    <div className=" w-1/5">
                        <SideBar/>
                    </div>
                    <div className="w-4/5" >
                        <Outlet />
                    </div>
                </div>

            </div>
</>
    )
}
