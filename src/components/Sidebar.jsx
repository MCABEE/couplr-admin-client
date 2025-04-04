  // "use client";

  // import React, { useState } from "react";
  // import { IoIosArrowDown } from "react-icons/io";
  // import { useRouter } from "next/navigation";
  // import Image from "next/image";
  // import Link from "next/link";
  // import { menus } from "../lib/Menu";
  // const Sidebar = () => {
  //   const [active, setActive] = useState("Home");
  //   const [activeSubMenu, setActiveSubMenu] = useState("");
  //   const [activeSubSubMenu, setActiveSubSubMenu] = useState(""); // Track sub-submenu
  //   const router = useRouter();

  //   const handleMenuClick = (item) => {
  //     setActive((prev) => (prev !== item.name ? item.name : prev)); // Keep item selected
  //     setActiveSubMenu(""); // Reset submenu when switching
  //     setActiveSubSubMenu("");
  //     if (item.link) router.push(item.link);
  //   };

  //   const handleSubMenuClick = (subItem) => {
  //     setActiveSubMenu((prev) => (prev !== subItem.name ? subItem.name : prev));
  //     setActiveSubSubMenu("");
  //     if (subItem.link) router.push(subItem.link);
  //   };

  //   const handleSubSubMenuClick = (subSubItem) => {
  //     setActiveSubSubMenu((prev) => (prev !== subSubItem.name ? subSubItem.name : prev));
  //     if (subSubItem.link) router.push(subSubItem.link);
  //   };

  //   return (
  //     <div className="h-full px-4 bg-white rounded-[16px] border border-gray-300">
  //       <div className="h-[75%] py-5">

  //         {menus.map((item) => (
  //           <div key={item.id}>
  //             <div
  //               className={`text-black rounded-lg p-2 flex items-center justify-between cursor-pointer ${
  //                 active === item.name ? "bg-[#F0F4F9]" : "text-black"
  //               }`}
  //               onClick={() => handleMenuClick(item)}
  //             >
  //               <span>{item.name}</span>
  //               {item.subMenu && (
  //                 <IoIosArrowDown className={`transition-transform ${active === item.name ? "rotate-180" : ""}`} />
  //               )}
  //             </div>

  //             {item.subMenu && active === item.name && (
  //               <div className="ml-6 mt-2 transition-all duration-300">
  //                 {item.subMenu.map((subItem) => (
  //                   <div key={subItem.id}>
  //                     <div
  //                       className={`p-2 flex items-center justify-between cursor-pointer ${
  //                         activeSubMenu === subItem.name ? "bg-[#F0F4F9]" : "text-black"
  //                       }`}
  //                       onClick={() => handleSubMenuClick(subItem)}
  //                     >
  //                       <span>{subItem.name}</span>
  //                       {subItem.subMenus && (
  //                         <IoIosArrowDown className={`transition-transform ${activeSubMenu === subItem.name ? "rotate-180" : ""}`} />
  //                       )}
  //                     </div>

  //                     {subItem.subMenus && activeSubMenu === subItem.name && (
  //                       <div className="ml-6 mt-2 transition-all duration-300">
  //                         {subItem.subMenus.map((subSubItem) => (
  //                           <div
  //                             key={subSubItem.id}
  //                             className={`p-2 cursor-pointer ${
  //                               activeSubSubMenu === subSubItem.name ? "bg-[#F0F4F9]" : "text-black"
  //                             }`}
  //                             onClick={() => handleSubSubMenuClick(subSubItem)}
  //                           >
  //                             <span>{subSubItem.name}</span>
  //                           </div>
  //                         ))}
  //                       </div>
  //                     )}
  //                   </div>
  //                 ))}
  //               </div>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  // export default Sidebar;





//   "use client";

// import React from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { useRouter, usePathname } from "next/navigation";
// import { menus } from "../lib/Menu";

// const Sidebar = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleMenuClick = (item) => {
//     if (item.link) router.push(item.link);
//   };

//   const handleSubMenuClick = (subItem) => {
//     if (subItem.link) router.push(subItem.link);
//   };

//   const handleSubSubMenuClick = (subSubItem) => {
//     if (subSubItem.link) router.push(subSubItem.link);
//   };

//   return (
//     <div className="h-full px-4 bg-white rounded-[16px] border border-gray-300">
//       <div className="h-[75%] py-5">
//         {menus.map((item) => {
//           const isMenuActive = item.link && pathname.startsWith(item.link);

//           return (
//             <div key={item.id}>
//               <div
//                 className={`text-black rounded-lg p-2 flex items-center justify-between cursor-pointer ${
//                   isMenuActive ? "bg-[#F0F4F9] font-semibold" : ""
//                 }`}
//                 onClick={() => handleMenuClick(item)}
//               >
//                 <span>{item.name}</span>
//                 {item.subMenu && (
//                   <IoIosArrowDown
//                     className={`transition-transform ${
//                       isMenuActive ? "rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </div>

//               {item.subMenu && isMenuActive && (
//                 <div className="ml-6 mt-2 transition-all duration-300">
//                   {item.subMenu.map((subItem) => {
//                     const isSubMenuActive =
//                       subItem.link && pathname.startsWith(subItem.link);

//                     return (
//                       <div key={subItem.id}>
//                         <div
//                           className={`p-2 flex items-center justify-between cursor-pointer ${
//                             isSubMenuActive ? "bg-[#F0F4F9] font-medium" : ""
//                           }`}
//                           onClick={() => handleSubMenuClick(subItem)}
//                         >
//                           <span>{subItem.name}</span>
//                           {subItem.subMenus && (
//                             <IoIosArrowDown
//                               className={`transition-transform ${
//                                 isSubMenuActive ? "rotate-180" : ""
//                               }`}
//                             />
//                           )}
//                         </div>

//                         {subItem.subMenus && isSubMenuActive && (
//                           <div className="ml-6 mt-2 transition-all duration-300">
//                             {subItem.subMenus.map((subSubItem) => {
//                               const isSubSubMenuActive =
//                                 subSubItem.link &&
//                                 pathname.startsWith(subSubItem.link);

//                               return (
//                                 <div
//                                   key={subSubItem.id}
//                                   className={`p-2 cursor-pointer ${
//                                     isSubSubMenuActive
//                                       ? "bg-[#F0F4F9] font-normal"
//                                       : ""
//                                   }`}
//                                   onClick={() =>
//                                     handleSubSubMenuClick(subSubItem)
//                                   }
//                                 >
//                                   <span>{subSubItem.name}</span>
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import { menus } from "../lib/Menu";

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [activeSubSubMenu, setActiveSubSubMenu] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (link) => {
    if (!link) return false;
    return pathname.includes(link);
  };

  const handleMenuClick = (item) => {
    setActive((prev) => (prev !== item.name ? item.name : prev));
    setActiveSubMenu("");
    setActiveSubSubMenu("");
    if (item.link) router.push(item.link);
  };

  const handleSubMenuClick = (subItem) => {
    setActiveSubMenu((prev) => (prev !== subItem.name ? subItem.name : prev));
    setActiveSubSubMenu("");
    if (subItem.link) router.push(subItem.link);
  };

  const handleSubSubMenuClick = (subSubItem) => {
    setActiveSubSubMenu((prev) => (prev !== subSubItem.name ? subSubItem.name : prev));
    if (subSubItem.link) router.push(subSubItem.link);
  };

  return (
    <div className="h-full px-4 bg-white rounded-[16px] border border-gray-300">
      <div className="h-[75%] py-5">
        {menus.map((item) => {
          const isMenuActive = isActive(item.link);
          return (
            <div key={item.id}>
              <div
                className={`text-black rounded-lg p-2 flex items-center justify-between cursor-pointer ${
                  isMenuActive ? "bg-[#F0F4F9]" : "text-black"
                }`}
                onClick={() => handleMenuClick(item)}
              >
                <span>{item.name}</span>
                {item.subMenu && (
                  <IoIosArrowDown
                    className={`transition-transform ${
                      active === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.subMenu && active === item.name && (
                <div className="ml-6 mt-2 transition-all duration-300">
                  {item.subMenu.map((subItem) => {
                    const isSubMenuActive = isActive(subItem.link);
                    return (
                      <div key={subItem.id}>
                        <div
                          className={`p-2 flex items-center justify-between cursor-pointer ${
                            isSubMenuActive ? "bg-[#F0F4F9]" : "text-black"
                          }`}
                          onClick={() => handleSubMenuClick(subItem)}
                        >
                          <span>{subItem.name}</span>
                          {subItem.subMenus && (
                            <IoIosArrowDown
                              className={`transition-transform ${
                                activeSubMenu === subItem.name
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </div>

                        {subItem.subMenus && activeSubMenu === subItem.name && (
                          <div className="ml-6 mt-2 transition-all duration-300">
                            {subItem.subMenus.map((subSubItem) => {
                              const isSubSubMenuActive = isActive(subSubItem.link);
                              return (
                                <div
                                  key={subSubItem.id}
                                  className={`p-2 cursor-pointer ${
                                    isSubSubMenuActive ? "bg-[#F0F4F9]" : "text-black"
                                  }`}
                                  onClick={() => handleSubSubMenuClick(subSubItem)}
                                >
                                  <span>{subSubItem.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
