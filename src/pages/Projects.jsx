// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// function Projects() {
//   const projects = [
//     {
//       title: "Tarteel Academy",
//       subtitle: "Madrasa Attendance Management",
//       description: [
//         "Role-based access (Admin, Super Admin, Teacher, Coordinator)",
//         "Built using Flutter & Firebase",
//         "Focused on real-time attendance tracking",
//       ],
//       tech: ["Flutter", "Firebase"],
//       image: "https://images.pexels.com/photos/19473658/pexels-photo-19473658.jpeg", // Replace with your own
//       playstore: "#",
//     },
//     {
//       title: "Quran App",
//       subtitle: "Daily Quran Reading",
//       description: [
//         "Dark mode, bookmarks, and audio recitation",
//         "Built with Flutter",
//       ],
//       tech: ["Flutter"],
//       image: "https://skift.com/wp-content/uploads/2023/09/dr-vallabh-kulkarni-U-zLOaxbGt0-unsplash-1.jpg",
//       playstore: "#",
//     },
//     {
//       title: "Attendance Tracker",
//       subtitle: "For Remote Teams",
//       description: [
//         "Geofencing & facial recognition login",
//         "Used Firebase and Google Maps API",
//       ],
//       tech: ["Flutter", "Firebase", "Maps API"],
//       image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EixEby1cqaOsP2BM6XCCDg.jpeg",
//       playstore: "#",
//     },
//     {
//       title: "Portfolio App",
//       subtitle: "Personal App",
//       description: [
//         "Flutter-powered mobile portfolio",
//         "Live project previews & CV download",
//       ],
//       tech: ["Flutter"],
//       image: "https://images.unsplash.com/photo-1707328739134-7cf382e74fc2?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       playstore: "#",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const total = projects.length;

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % total);
//   };

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + total) % total);
//   };

//   const currentProject = projects[current];

//   return (
//     <div className="bg-[#fffaf6] px-5 md:px-20 py-10 pt-15 h-auto flex flex-col justify-center">
//       {/* Heading */}
//       <div className="mb-10">
//         <h1 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "Cinzel" }}>
//           My Projects
//         </h1>
//         <p className="text-2xl text-[#7A4E2D] mt-2" style={{ fontFamily: "Montserrat" }}>
//           Here's some of my projects
//         </p>
//       </div>

//       {/* Project Content */}
//       <div className="flex flex-col md:flex-row gap-5 items-start">
//         {/* LEFT: Text */}
//         <div className="md:w-1/2 space-y-4">
//           <h2 className="text-2xl md:text-3xl font-semibold text-black" style={{ fontFamily: "Montserrat" }}>
//             {currentProject.title}
//           </h2>
//           <p className="text-lg text-gray-600">{currentProject.subtitle}</p>
//           <ul className="list-none space-y-2 mt-2">
//             {currentProject.description.map((point, index) => (
//               <li key={index} className="flex items-start gap-2 text-gray-700">
//                 <span className="text-[#7A4E2D]">✔️</span>
//                 <span>{point}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="flex items-center gap-2 mt-3 font-semibold">
//             <span>Tech Used:</span>
//             {currentProject.tech.map((tech, i) => (
//               <span
//                 key={i}
//                 className="bg-[#e7dcd1] text-sm px-3 py-1 rounded-full text-[#7A4E2D]"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <a
//             href={currentProject.playstore}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block mt-4 px-5 py-2 bg-[#7A4E2D] text-white rounded-md shadow hover:bg-[#603b1e] transition"
//           >
//             View on Play Store
//           </a>
//         </div>

//         {/* RIGHT: Image + Controls */}
//         <div className="md:w-2/5 flex flex-col items-center -mt-2">
//           <img
//             src={currentProject.image}
//             alt={currentProject.title}
//             className="w-full h-[300px] md:h-[300px] object-cover rounded-2xl shadow-lg"
//           />
//           <div className="flex items-center gap-6 mt-4">
//             <button
//               onClick={handlePrev}
//               className="p-3 bg-[#7A4E2D] text-white rounded-md hover:bg-[#603b1e] transition"
//             >
//               <FaArrowLeft />
//             </button>
//             <span className="text-lg font-semibold">{`${current + 1}/${total}`}</span>
//             <button
//               onClick={handleNext}
//               className="p-3 bg-[#7A4E2D] text-white rounded-md hover:bg-[#603b1e] transition"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;


import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Tarteel Academy",
      subtitle: "Madrasa Attendance Management",
      description: [
        "Role-based access (Admin, Super Admin, Teacher, Coordinator)",
        "Built using Flutter & Firebase",
        "Focused on real-time attendance tracking",
      ],
      tech: ["Flutter", "Firebase"],
      image: "https://images.pexels.com/photos/19473658/pexels-photo-19473658.jpeg",
      playstore: "#",
    },
    {
      title: "Sterling",
      subtitle: "Resort Booking App (User Side)",
      description: [
        "Clean UI with smooth animations",
        "Multi-screen navigation and seamless experience",
        "Conntected to Firebase for data management",
      ],
      tech: ["Flutter", "Firebase"],
      image: "https://skift.com/wp-content/uploads/2023/09/dr-vallabh-kulkarni-U-zLOaxbGt0-unsplash-1.jpg",
      playstore: "#",
    },
    {
      title: "Adab-E-Kalam",
      subtitle: "Multilingual Shayari Platform",
      description: [
        "Support multiple indian languages",
        "Filter Content by selected language",
        "No login needed - quick access for users",
      ],
      tech: ["Flutter", "Firebase"],
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EixEby1cqaOsP2BM6XCCDg.jpeg",
      playstore: "#",
    },
    {
      title: "Kubra Market",
      subtitle: "Multi-Shop E-Commerce Platform",
      description: [
        "Multi store support in single app",
        "Responsive design with intuitive UI",
        "Used AI tools like chatGPT & Replit, completed UI in just 4 days"
      ],
      tech: ["Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1707328739134-7cf382e74fc2?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      playstore: "#",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const getOffset = (index) => {
    if (index === current) return 0;
    if (index === (current + 1) % total) return 1;
    if (index === (current - 1 + total) % total) return -1;
    return null; // hide others
  };

  return (
    <div className="bg-[#fffaf6] px-5 md:px-20 py-2 md:py-16 flex items-center justify-center">
      {/* Header */}
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl font-light mb-2 hidden md:block" style={{ fontFamily: "Cinzel" }}>
        My Projects
      </h1>
      <p className="text-2xl text-[#7A4E2D] mb-10 hidden md:block" style={{ fontFamily: "Montserrat" }}>
        Here's some of my projects
      </p>
      {/* Details Below */}
      <div className=" max-w-4xl text-left">
        <h2 className="text-2xl font-semibold mb-2">{projects[current].title}</h2>
        <p className="text-gray-600">{projects[current].subtitle}</p>
        <ul className="list-none mt-4 space-y-2">
          {projects[current].description.map((point, i) => (
            <li key={i} className="text-gray-700 flex items-start justify-start gap-2">
              <span className="text-[#7A4E2D]">✔️</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-start gap-2 mt-4 font-semibold flex-wrap">
          {projects[current].tech.map((tech, i) => (
            <span key={i} className="bg-[#e7dcd1] px-3 py-1 rounded-full text-[#7A4E2D] text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={projects[current].playstore}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-[#7A4E2D] text-white rounded-md shadow hover:bg-[#603b1e] transition"
        >
          View on Play Store
        </a>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-6 mt-8 justify-center">
        <button
          onClick={handlePrev}
          className="p-3 bg-[#7A4E2D] text-white rounded-md hover:bg-[#603b1e] transition"
        >
          <FaArrowLeft />
        </button>
        <span className="text-lg font-semibold">{`${current + 1}/${total}`}</span>
        <button
          onClick={handleNext}
          className="p-3 bg-[#7A4E2D] text-white rounded-md hover:bg-[#603b1e] transition"
        >
          <FaArrowRight />
        </button>
      </div>
      </div>
      {/* Carousel */}
      <div className="relative w-full md:max-w-5xl h-70  md:h-[360px] flex items-center justify-center">
        {projects.map((project, index) => {
          const offset = getOffset(index);
          if (offset === null) return null;

          const baseClass =
            "absolute transition-all duration-700 ease-in-out transform rounded-2xl shadow-xl border-4 border-white bg-white overflow-hidden";

          let transform = "";
          let zIndex = 0;
          let opacity = "opacity-0";
          let scale = "scale-75";

          if (offset === 0) {
            transform = "translate-x-0 rotate-0";
            zIndex = 30;
            opacity = "opacity-100";
            scale = "scale-100";
          } else if (offset === -1) {
            transform = "-translate-x-[60%] rotate-y-6";
            zIndex = 20;
            opacity = "opacity-60";
            scale = "scale-90";
          } else if (offset === 1) {
            transform = "translate-x-[60%] -rotate-y-6";
            zIndex = 20;
            opacity = "opacity-60";
            scale = "scale-90";
          }

          return (
            <div
              key={index}
              className={`${baseClass} ${transform} ${scale} ${opacity}`}
              style={{
                zIndex,
                width: "280px",
                height: "100%",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-2/3 object-cover"
              />
              <div className="p-3">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
  );
}

export default Projects;

