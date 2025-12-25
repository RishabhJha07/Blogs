import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination=()=>{
    const {page,handlePageChange,totalPages}=useContext(AppContext);
    return(
        <div className="w-full border-2 shadow-md py-2 fixed bottom-0 bg-white flex justify-center items-center">
            <div className="flex justify-between w-11/12 max-w-[630px] py-2">
                <div className="gap-x-2 flex">
                    {page>1 && (<button className="rounded-md border-2 px-4 py-1" onClick={()=>handlePageChange(page-1)}>Previous</button>)
                    }
                    {page<totalPages && (<button className="rounded-md border-2 px-4 py-1" onClick={()=>handlePageChange(page+1)}>Next</button>)
                    }
                </div>
                <p className="font-bold text-sm">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}
export default Pagination;