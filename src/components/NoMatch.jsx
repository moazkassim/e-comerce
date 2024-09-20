import { useNavigate } from "react-router-dom";
export default function NoMatch() {
  const navigate = useNavigate();
  return (
    <>
      <main className="m-0 grid h-[609px] min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center ">
          <p className="text-2xl font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate("/")}
              className="rounded-md bg-[#ee50ff] px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm hover:bg-[#c164cb]"
            >
              Go back home
            </button>
            <a href="/contact" className="text-sm font-semibold ">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
