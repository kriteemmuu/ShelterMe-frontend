// // import React from "react";

// // const Story = () => {
// //   return (
// //     <div
// //       className="container mt-5 p-4 rounded"
// //       style={{
// //         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
// //         borderRadius: "10px",
// //         backgroundColor: "#f9f9f9",
// //       }}
// //     >
// //       <div className="row">
// //         {/* Main Image */}
// //         <div className="col-md-6">
// //           <img
// //             src="../assets/images/husky.png" // Replace with the main image URL
// //             alt="Husky Dog"
// //             className="w-100 h-auto rounded mb-3"
// //             style={{ objectFit: "cover" }}
// //           />
// //           <div className="row">
// //             {/* Thumbnail Images */}
// //             <div className="col-4">
// //               <img
// //                 src="../assets/images/husky.png" // Replace with thumbnail image URL
// //                 alt="Side Profile"
// //                 className="w-100 h-auto rounded"
// //                 style={{ objectFit: "cover" }}
// //               />
// //             </div>
// //             <div className="col-4">
// //               <img
// //                 src="../assets/images/husky.png" // Replace with thumbnail image URL
// //                 alt="Front Profile"
// //                 className="w-100 h-auto rounded"
// //                 style={{ objectFit: "cover" }}
// //               />
// //             </div>
// //             <div className="col-4">
// //               <img
// //                 src="../assets/images/husky.png" // Replace with thumbnail image URL
// //                 alt="Happy Face"
// //                 className="w-100 h-auto rounded"
// //                 style={{ objectFit: "cover" }}
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Text Content */}
// //         <div className="col-md-6">
// //           <h2 className="mb-3">Success Story</h2>
// //           <p>
// //             <strong>Type:</strong> Dog
// //           </p>
// //           <p>
// //             <strong>Name:</strong> Rocky
// //           </p>
// //           <p>
// //             <strong>Age:</strong> 4 years
// //           </p>
// //           <p>
// //             <strong>Adopted by:</strong> Prapti Aryal
// //           </p>
// //           <p className="mt-4">
// //             Rocky, a lively Siberian Husky, found his forever home with Prapti
// //             Aryal, who instantly connected with his playful and energetic
// //             nature. Once a shelter dog longing for companionship, Rocky now
// //             enjoys adventurous hikes, fun-filled play sessions, and cozy
// //             evenings with Prapti. His quirky husky "talk" and affectionate
// //             personality have made him the heart of his new family, proving that
// //             love and second chances can truly transform lives.
// //           </p>
// //         </div>
// //       </div>
// //       {/* Footer Title */}
// //       <h3 className="text-center mt-4">Husky</h3>
// //     </div>
// //   );
// // };

// // export default Story;





// import React, { useState } from "react";

// const Story = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const stories = [
//     {
//       id: 1,
//       type: "Dog",
//       name: "Rocky",
//       age: "4 years",
//       adoptedBy: "Prapti Aryal",
//       description:
//         "Rocky, a lively Siberian Husky, found his forever home with Prapti Aryal, who instantly connected with his playful and energetic nature. Once a shelter dog longing for companionship, Rocky now enjoys adventurous hikes, fun-filled play sessions, and cozy evenings with Prapti. His quirky husky 'talk' and affectionate personality have made him the heart of his new family, proving that love and second chances can truly transform lives.",
//       images: ["../assets/images/husky.png", "../assets/images/husky.png", "../assets/images/husky.png"],
//     },
//     {
//       id: 2,
//       type: "Cat",
//       name: "Mimi",
//       age: "2 years",
//       adoptedBy: "Ravi Singh",
//       description:
//         "Mimi, a curious tabby cat, found his home with Ravi Singh. With his playful antics and warm cuddles, Mimi quickly became a beloved family member. Once shy and reserved, Milo now loves exploring every nook and cranny of his new home.",
//       images: ["assets/images/mimi.avif", "assets/images/mimi.avif", "assets/images/mimi.avif"],
//     },
//     {
//       id: 3,
//       type: "Dog",
//       name: "Buddy",
//       age: "1 year",
//       adoptedBy: "Anjali Sharma",
//       description:
//         "Buddy, a gentle dog, found her forever home with Anjali Sharma. With her soft fur and calm demeanor, Buddy has brought a sense of peace and joy to Anjali's life. Once timid, Fluffy now enjoys hopping around the garden and munching on fresh greens.",
//       images: ["/assets/images/LabRetriever.jpg", "/assets/images/LabRetriever.jpg", "/assets/images/LabRetriever.jpg"],
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % stories.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
//   };

//   const currentStory = stories[currentSlide];

//   return (
//     <div
//       className="container mt-5 p-5 rounded-lg"
//       style={{
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//         borderRadius: "15px",
//         background: "linear-gradient(135deg, #f9f9f9, #eaeaea)",
//       }}
//     >
//       <div className="row">
//         {/* Main Image */}
//         <div className="col-md-6">
//           <img
//             src={currentStory.images[0]}
//             alt={`${currentStory.name}`}
//             className="w-100 h-auto rounded-lg mb-3"
//             style={{ objectFit: "cover", border: "3px solid #ddd" }}
//           />
//           <div className="row">
//             {currentStory.images.map((image, index) => (
//               <div className="col-4" key={index}>
//                 <img
//                   src={image}
//                   alt={`${currentStory.name} ${index + 1}`}
//                   className="w-100 h-auto rounded-lg"
//                   style={{
//                     objectFit: "cover",
//                     border: "2px solid #ccc",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
//                   onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="col-md-6">
//           <h2 className="mb-3 text-center" style={{ color: "#333", fontWeight: "bold" }}>
//             Success Story
//           </h2>
//           <p>
//             <strong>Type:</strong> {currentStory.type}
//           </p>
//           <p>
//             <strong>Name:</strong> {currentStory.name}
//           </p>
//           <p>
//             <strong>Age:</strong> {currentStory.age}
//           </p>
//           <p>
//             <strong>Adopted by:</strong> {currentStory.adoptedBy}
//           </p>
//           <p className="mt-4" style={{ lineHeight: "1.8", color: "#555" }}>
//             {currentStory.description}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="text-center mt-4">
//         <button
//           onClick={prevSlide}
//           className="btn mx-2"
//           style={{
//             backgroundColor: "#6c63ff",
//             color: "#fff",
//             borderRadius: "25px",
//             padding: "10px 20px",
//             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextSlide}
//           className="btn mx-2"
//           style={{
//             backgroundColor: "#6c63ff",
//             color: "#fff",
//             borderRadius: "25px",
//             padding: "10px 20px",
//             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           Next
//         </button>
//       </div>

//       {/* Footer Title */}
//       <h3
//         className="text-center mt-4"
//         style={{
//           fontWeight: "600",
//           color: "#555",
//           textTransform: "uppercase",
//           letterSpacing: "1px",
//         }}
//       >
//         {currentStory.type}
//       </h3>
//     </div>
//   );
// };

// export default Story;
import React, { useState } from "react";

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      type: "Dog",
      name: "Rocky",
      age: "4 years",
      adoptedBy: "Prapti Aryal",
      description:
        "Rocky, a lively Siberian Husky, found his forever home with Prapti Aryal, who instantly connected with his playful and energetic nature. Once a shelter dog longing for companionship, Rocky now enjoys adventurous hikes, fun-filled play sessions, and cozy evenings with Prapti. His quirky husky 'talk' and affectionate personality have made him the heart of his new family, proving that love and second chances can truly transform lives.",
      images: ["../assets/images/husky.png", "../assets/images/husky.png", "../assets/images/husky.png"],
    },
    {
      id: 2,
      type: "Cat",
      name: "Mimi",
      age: "2 years",
      adoptedBy: "Ravi Singh",
      description:
        "Mimi, a curious tabby cat, found his home with Ravi Singh. With his playful antics and warm cuddles, Mimi quickly became a beloved family member. Once shy and reserved, Milo now loves exploring every nook and cranny of his new home.",
      images: ["assets/images/mimi.avif", "assets/images/mimi.avif", "assets/images/mimi.avif"],
    },
    {
      id: 3,
      type: "Dog",
      name: "Buddy",
      age: "1 year",
      adoptedBy: "Anjali Sharma",
      description:
        "Buddy, a gentle dog, found her forever home with Anjali Sharma. With her soft fur and calm demeanor, Buddy has brought a sense of peace and joy to Anjali's life. Once timid, Fluffy now enjoys hopping around the garden and munching on fresh greens.",
      images: ["/assets/images/LabRetriever.jpg", "/assets/images/LabRetriever.jpg", "/assets/images/LabRetriever.jpg"],
    },
  ];

  const adoptionTips = [
    "Prepare a safe and comfortable space for your pet.",
    "Learn about the specific needs of the breed you're adopting.",
    "Have a veterinarian checkup scheduled post-adoption.",
    "Be patient as the pet adjusts to their new environment.",
    "Ensure a balanced diet and plenty of exercise."
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentSlide];

  return (
    <div className="container mt-5 p-5 rounded-lg bg-white shadow-lg">
      {/* Story Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={currentStory.images[0]}
            alt={currentStory.name}
            className="w-100 rounded-lg shadow"
            style={{ objectFit: "cover", maxHeight: "400px" }}
          />
          <div className="d-flex justify-content-center gap-2 mt-3">
            {currentStory.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${currentStory.name}-${index}`}
                className={`rounded-lg cursor-pointer border ${
                  index === 0 ? "border-primary" : "border-light"
                }`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-primary text-center mb-3">{currentStory.type} Success Story</h2>
          <p>
            <strong>Name:</strong> {currentStory.name}
          </p>
          <p>
            <strong>Age:</strong> {currentStory.age}
          </p>
          <p>
            <strong>Adopted By:</strong> {currentStory.adoptedBy}
          </p>
          <p className="mt-3" style={{ lineHeight: "1.8", color: "#666" }}>
            {currentStory.description}
          </p>
        </div>
      </div>

      {/* Adoption Tips */}
      <div className="mt-5 p-4 bg-light rounded-lg shadow">
        <h3 className="text-primary text-center mb-4">Adoption Tips</h3>
        <ul className="list-group">
          {adoptionTips.map((tip, index) => (
            <li key={index} className="list-group-item">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="text-center mt-5">
        <button
          onClick={prevSlide}
          className="btn btn-outline-primary me-3"
          style={{ padding: "10px 20px", borderRadius: "25px" }}
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-primary"
          style={{ padding: "10px 20px", borderRadius: "25px" }}
        >
          Next
        </button>
      </div>

      {/* Related Stories */}
      <div className="mt-5">
        <h3 className="text-primary text-center mb-4">Related Stories</h3>
        <div className="d-flex justify-content-around">
          {stories
            .filter((story) => story.id !== currentStory.id)
            .map((story) => (
              <div key={story.id} className="text-center">
                <img
                  src={story.images[0]}
                  alt={story.name}
                  className="rounded-lg mb-2"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <p className="font-weight-bold">{story.name}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-5">
        <a
          href="/adopt"
          className="btn btn-success"
          style={{ padding: "10px 25px", borderRadius: "25px" }}
        >
          Start Your Adoption Journey
        </a>
      </div>
    </div>
  );
};

export default Story;
