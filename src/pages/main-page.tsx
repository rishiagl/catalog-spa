import { MainNavbar } from "../components/main-navbar";

export function MainPage() {
  return (
    <>
      <div className="p-2 pb-3 mx-auto w-full h-full bg-slate-900">
        <div className="flex flex-col lg:h-[calc(100vh-20px)]">
          <MainNavbar
            tittle="Catalog"
          ></MainNavbar>
          <div className="flex lg:flex-row lg:justify-around mt-5 flex-col bg-slate-900 lg:h-full font-semibold rounded space-x-4">
            <div className="lg:w-3/6 m-1 p-2 rounded-lg bg-slate-900 shadow-md shadow-white text-white">
                list
            </div>
            <div className="lg:w-2/6 mb-1 mt-4 text-white flex flex-col">
                <div className="h-3/5">
                    Photo
                </div>
                <div className="h-2/5 p-2 rounded-lg bg-slate-900 shadow-md shadow-white">
                    Details
                </div>
            </div>
            <div className="lg:w-1/6 m-1 p-2 rounded-lg bg-slate-900 shadow-md shadow-white text-white">
                filter
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
