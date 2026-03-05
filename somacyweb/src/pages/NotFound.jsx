import { Home, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 
        bg-[radial-gradient(#dbeafe_1px,transparent_1px)] 
        [background-size:22px_22px] opacity-40"
      ></div>

      <div className="relative z-10 text-center max-w-xl w-full">
        <div className="relative flex justify-center mb-12">
          <div
            className="relative w-44 h-44 md:w-52 md:h-52 
    bg-blue-100 rounded-full 
    flex items-center justify-center shadow-inner"
          >
            <svg
              className="w-24 h-24 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 10h-5V5a2 2 0 0 0-4 0v5H5a2 2 0 0 0 0 4h5v5a2 2 0 0 0 4 0v-5h5a2 2 0 0 0 0-4z" />
            </svg>

            <div
              className="absolute bottom-4 right-4 
      bg-blue-600 text-white rounded-full p-2 shadow-md"
            >
              🔍
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/3 -translate-x-1/2 animate-float">
            <Stethoscope className="w-7 h-7 text-blue-200" />
          </div>
          <div className="absolute right-1/4 top-4 animate-float delay-300">
            <div className="text-blue-200 text-2xl">⚕️</div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-slate-700">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed">
          It looks like the page you are looking for has been moved or doesn't
          exist.
          <span className="text-blue-600 font-medium">
            {" "}
            Don't worry, your health records are safe!
          </span>
        </p>
        <button
          className="mt-8 inline-flex items-center gap-2 
          bg-blue-600 hover:bg-blue-700 
          text-white px-7 py-3 
          rounded-xl shadow-lg 
          transition-all duration-300 hover:scale-105"
        >
          <Home size={18} />
          Back to Home
        </button>
      </div>

      <style>
        {`
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  }
`}
      </style>
    </div>
  );
}
