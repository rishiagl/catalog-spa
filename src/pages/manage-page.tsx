import { MainNavbar } from "../components/main-navbar";

export function ManagePage() {
  return (
    <>
      <div className="p-2 pb-3 mx-auto w-full h-full bg-slate-900">
        <div className="flex flex-col lg:h-[calc(100vh-20px)]">
          <MainNavbar tittle="Catalog"></MainNavbar>
          <div className="flex lg:flex-row lg:justify-around m-4 mt-6 p-2 flex-col bg-slate-900 lg:h-1/3 font-semibold rounded space-x-4">
            <div className="lg:w-1/3 m-1 p-2 flex rounded-lg bg-slate-900 shadow-md shadow-white text-white justify-center items-center">
              <h1 className="align-middle">Product</h1>
            </div>
            <div className="lg:w-1/3 m-1 p-2 flex rounded-lg bg-slate-900 shadow-md shadow-white text-white justify-center items-center">
              <h1 className="align-middle">Brand</h1>
            </div>
            <div className="lg:w-1/3 m-1 p-2 flex rounded-lg bg-slate-900 shadow-md shadow-white text-white justify-center items-center">
              <h1 className="align-middle">Category</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
