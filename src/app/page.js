// 'use client'; // Tells Next.js this file is a client-side component


// export default function Home() {
  
  
//   return (
//     <div className="flex flex-col min-h-screen bg-slate-100">
//       <main className="flex-grow px-5 md:px-20 md:py-20 flex justify-center">
//         <section className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 py-12 bg-white rounded-[30px] mx-auto min-w-full">
//           <div className="flex-1 flex justify-center mb-4 md:mb-0">
//             <img src="/assets/couplrLogo.svg" alt="Logo" width={131} height={82} />
//           </div>
//           <div className="flex-1">
//             <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md mx-auto">
//               <h2 className="text-2xl md:text-3xl leading-10 text-zinc-800 text-left mb-6">
//                 Master <br /> Control Panel
//               </h2>
//               {error && <p className="text-red-500 text-sm mb-2">{error}</p>} {/* Error message */}
//               <div className="flex flex-col gap-5 mt-3">
//                 <label htmlFor="email" className="sr-only">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="px-4 py-3.5 w-full bg-white border border-neutral-400 rounded-xl placeholder:text-black"
//                   placeholder="Email"
//                   required
//                 />
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="px-4 py-3.5 w-full bg-white border border-neutral-400 rounded-xl placeholder:text-black"
//                   placeholder="Password"
//                   required
//                 />
//               </div>
//               <div className="flex justify-center md:justify-end mt-5">
//                 <button
//                   type="submit"
//                   className="px-10 py-2 text-white rounded-3xl bg-neutral-800"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useAuthStore } from "@/lib/store/authStore";
import { login } from "@/api/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // Initialize Router
  const { login: setLogin } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      setLogin(data.accessToken);
      router.push("/controlPanel/newSignup");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <main className="flex-grow px-5 md:px-20 md:py-20 flex justify-center">
        <section className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 py-12 bg-white rounded-[30px] mx-auto min-w-full">
          <div className="flex-1 flex justify-center mb-4 md:mb-0">
            <img src="/assets/couplrLogo.svg" alt="Logo" width={131} height={82} />
          </div>
          <div className="flex-1">
            <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md mx-auto">
              <h2 className="text-2xl md:text-3xl leading-10 text-zinc-800 text-left mb-6">
                Master <br /> Control Panel
              </h2>
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <div className="flex flex-col gap-5 mt-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3.5 w-full bg-white border border-neutral-400 rounded-xl placeholder:text-black text-black"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-3.5 w-full bg-white border border-neutral-400 rounded-xl placeholder:text-black text-black"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex justify-center md:justify-end mt-5">
                <button type="submit" className="px-10 py-2 text-white rounded-3xl bg-neutral-800">
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
