const basicSubmenus = [{ id: 1, name: "Mother Tounge", link: "motherTounge" }];

const placeSubmenus = [
  { id: 1, name: "Country", link: "country" },
  { id: 2, name: "State", link: "state" },
  { id: 3, name: "District", link: "district" },
  { id: 4, name: "Home Town", link: "homeTown" },
  { id: 5, name: "Pin Code", link: "pincode" },
  { id: 6, name: "Cities", link: "cities" },
];

const academicSubmenus = [
  { id: 1, name: "Steams", link: "streams" },
  { id: 2, name: "Courses", link: "courses" },
  { id: 3, name: "Levels", link: "levels" },
  { id: 4, name: "Fields", link: "fields" },
];

const occupationSubmenus = [
  { id: 1, name: "Steams", link: "occupationStreams" },
  { id: 2, name: "Designations", link: "designations" },
];

const religionSubmenus = [
  { id: 1, name: "Religion", link: "religion" },
  { id: 2, name: "Caste", link: "caste" },
  { id: 3, name: "Diocese", link: "diocese" },
];

const institutionSubmenus = [
  { id: 1, name: "College Names", link: "colleges" },
  { id: 2, name: "University Names", link: "universities" },
  { id: 3, name: "Institute Names", link: "institutes" },
];

const adminPublishSubmenus = [
  { id: 4, name: "FAQs", link: "faqs" },
  { id: 1, name: "Feed Post", link: "feedPost" },
  { id: 2, name: "News", link: "news" },
  { id: 3, name: "Notifications", link: "notifications" },
];

const employersSubmenu = [{ id: 1, name: "Employer", link: "employer" }];

export const menus = [
  { id: 0, name: "Home", hasSubmenu: false, link: "" },
  { id: 1, name: "Users", hasSubmenu: false, link: "/controlPanel/user/newSignup"  },
  {
    id: 2,
    name: "Payments",
    hasSubmenu: false,
    link: ""
    // subMenu: [
    //   { id: 1, name: "New Users", hasSubmenu: false, link: "users/new" },
    //   { id: 2, name: "All Users", hasSubmenu: false, link: "users/all" },
    //   {
    //     id: 3,
    //     name: "Active Users",
    //     hasSubmenu: false,
    //     link: "users/active",
    //   },
    //   {
    //     id: 4,
    //     name: "Incomplete Users",
    //     hasSubmenu: false,
    //     link: "users/incomplete",
    //   },
    //   {
    //     id: 5,
    //     name: "Deleted Users",
    //     hasSubmenu: false,
    //     link: "users/deleted",
    //   },
    //   {
    //     id: 6,
    //     name: "ID Verification",
    //     hasSubmenu: false,
    //     link: "users/IdVerification",
    //   },
    // ],
  },
  {
    id: 3,
    name: "Reports",
    hasSubmenu: true,
    // subMenu: [
    //   { id: 1, name: "Payments", hasSubmenu: false, link: "payments" },
    //   { id: 2, name: "Payment Plans", hasSubmenu: false, link: "paymentPlans" },
    //   { id: 3, name: "Coupons", hasSubmenu: false, link: "coupons" },
    // ]
  },
  {
    id: 4,
    name: "Posts",
    hasSubmenu: false,
     link: "/controlPanel/posts/photos",
  },
  {
    id: 5,
    name: "Verification",
    hasSubmenu: false,
    link: ""
    // link: "videoUpdates",
  },
  {
    id: 7,
    name: "Analytics",
    hasSubmenu: false,
    //link: "profileReports",
  },
  {
    id: 8,
    name: "Customer Care",
    hasSubmenu: false,
    // link: "inquiries",
  },
  {
    id: 9,
    name: "Data Manager",
    hasSubmenu: false,
    //link: "feedbacks",
  },
  {
    id: 10,
    name: "Notifications",
    hasSubmenu: true,
    // subMenu: [
    //   { id: 1, name: "Basic", hasSubmenu: true, subMenus: basicSubmenus },
    //   { id: 2, name: "Places", hasSubmenu: true, subMenus: placeSubmenus },
    //   { id: 3, name: "Religion", hasSubmenu: true, subMenus: religionSubmenus },
    //   {
    //     id: 4,
    //     name: "Institution",
    //     hasSubmenu: true,
    //     subMenus: institutionSubmenus,
    //   },
    //   {
    //     id: 5,
    //     name: "Employers",
    //     hasSubmenu: true,
    //     subMenus: employersSubmenu,
    //   },
    //   { id: 6, name: "Academic", hasSubmenu: true, subMenus: academicSubmenus },
    //   { id: 7, name: "Occupation", hasSubmenu: true, subMenus: occupationSubmenus },
    //   { id: 8, name: "Admin Publish", hasSubmenu: true, subMenus: adminPublishSubmenus }
    // ],
  },
  {
    id: 11,
    name: "Website Messages",
    hasSubmenu: false,
    link: "",
  },
  {
    id: 12,
    name: "Settings",
    hasSubmenu: false,
    link: "",
  },
];
