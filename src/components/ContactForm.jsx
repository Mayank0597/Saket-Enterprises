// import React, { useState } from "react";
// import logoIcon1 from "/src/assets/ion_location-outline (1).png";
// import logoIcon2 from "/src/assets/fluent_call-48-regular.png";
// import logoIcon3 from "/src/assets/fluent_call-48-regular (1).png";
// import bgImage from "/src/assets/Optimize Image/Frame18901-ezgif.com-png-to-webp-converter.webp";

// const ContactForm = () => {
//   const [Cname, setCname] = useState("");
//   const [Cphone, setCphone] = useState("");
//   const [Cemail, setCEmail] = useState("");
//   const [Cmessage, setCmessage] = useState("");
//   // const [Cattachments, setCattachments] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleCnameChange = (e) => {
//     setCname(e.target.value);
//   };

//   const handleCphoneChange = (e) => {
//     setCphone(e.target.value);
//   };

//   const handleCemailChange = (e) => {
//     setCEmail(e.target.value);
//   };

//   const handleCmessageChange = (e) => {
//     setCmessage(e.target.value);
//   };

//   // const handleCattachmentsChange = (e) => {
//   //   const files = Array.from(e.target.files);
//   //   setCattachments(files);
//   // };

//   const sendCEmail = async () => {
//     // Clear error message initially
//     setErrorMessage("");

//     if (!Cname) {
//       setErrorMessage("Name is required");
//       return;
//     } else if (!Cphone) {
//       setErrorMessage("Phone is required");
//       return;
//     } else if (!Cemail) {
//       console.log("Email is empty");
//       return;
//     }

//     // else {
//     //   console.log(Cname);
//     //   return;
//     // }

//     return;
//     const transporter = nodemailer.createTransport({
//       host: "smtp.example.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "your-email@example.com",
//         pass: "your-password",
//       },
//     });

//     const mailOptions = {
//       from: "your-email@example.com",
//       to: email,
//       subject: "Hello from ReactJS",
//       text: message,
//       attachments: attachments.map((file) => ({
//         filename: file.name,
//         content: file.data,
//       })),
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully");
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row justify-center items-center pt-[62px] lg:pt-40 pb-[72px] lg:pb-32 lg:mr-32">
//       {/* Grey Background on larger screens */}
//       <div className="hidden lg:block absolute right-0 w-[1005px] h-[836px] bg-[#F3F2F2] z-0 rounded-lg" />

//       {/* Contact Information Section */}
//       <div className="relative w-full lg:w-[579px] h-auto z-10 px-6 lg:px-0 lg:ml-0 mb-8 lg:mb-0 lg:mr-20">
//         {/* Remove bgImage for mobile */}
//         <div className="hidden lg:block">
//           <img
//             src={bgImage}
//             alt="Background Image"
//             className="w-[579px] h-auto rounded-lg"
//           />
//         </div>

//         {/* Contact Information for mobile and larger screens */}
//         <div className="w-full max-w-[407px] mx-auto lg:absolute lg:top-[20%] lg:left-[17%] lg:transform lg:translate-y-1/5 lg:-translate-x-1/5 text-white">
//           <div className="flex flex-col items-start gap-[20px] lg:gap-[61px] lg:px-0 px-7">
//             {/* Section 1: Address */}
//             <div className="flex flex-row items-start">
//               <img
//                 src={logoIcon1}
//                 alt="Address Icon"
//                 className="w-[20px] h-[30px] mr-4 lg:mr-5"
//               />
//               <div className="flex flex-col items-start">
//                 <h3 className="text-[19px] lg:text-3xl font-semibold text-[#E2761B]">
//                   Address
//                 </h3>
//                 <div className="flex flex-col">
//                   <p className="text-base lg:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                     Dhamtari Road, Abhanpur, Chhattisgarh
//                   </p>
//                   <br />
//                   <p className="text-base lg:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                     CGHB Building, Sector 27, Nawagaon Parsatti, Atal Nagar, New
//                     Raipur, Raipur(C.G)
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Section 2: Phone */}
//             <div className="flex flex-row items-start">
//               <img
//                 src={logoIcon2}
//                 alt="Phone Icon"
//                 className="w-[23px] h-[30px] mr-4 lg:mr-5"
//               />
//               <div className="flex flex-col items-start">
//                 <h3 className="text-xl lg:text-3xl font-semibold text-[#E2761B]">
//                   Phone
//                 </h3>
//                 <p className="text-base lg:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                   +91 97523-24111
//                 </p>
//               </div>
//             </div>

//             {/* Section 3: Email */}
//             <div className="flex flex-row items-start">
//               <img
//                 src={logoIcon3}
//                 alt="Email Icon"
//                 className="w-[27px] h-[22px] mr-4 lg:mr-5"
//               />
//               <div className="flex flex-col items-start">
//                 <h3 className="text-xl lg:text-3xl font-semibold text-[#E2761B]">
//                   Email
//                 </h3>
//                 <p className="text-base md:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                   Saketplywood@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div className="w-full lg:w-[536px] h-auto px-8 py-14 lg:px-8 lg:py-8 bg-[#F3F2F2] z-20">
//         <h2 className="text-[33px] lg:text-[46px] font-semibold mb-4 text-[#393939]">
//           <span className="text-[#E2761B]">Get in touch</span> with us!
//         </h2>

//         {/* Error Message */}
//         {errorMessage && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {errorMessage}
//           </div>
//         )}

//         {/* Name Input */}
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full h-[45px] px-4 border-[1.5px] border-gray-300 bg-[#F3F2F2] focus:border-[#E2761B] focus:outline-none mb-4 rounded-lg"
//           value={Cname}
//           onChange={handleCnameChange}
//         />

//         {/* Phone Number Input */}
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="w-full h-[45px] px-4 border border-gray-300 bg-[#F3F2F2] focus:outline-none mb-4 rounded-lg focus:border-[#E2761B]"
//           value={Cphone}
//           onChange={handleCphoneChange}
//         />

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full h-[45px] px-4 border-[1.5px] border-gray-300 bg-[#F3F2F2] focus:outline-none mb-4 rounded-lg focus:border-[#E2761B]"
//           value={Cemail}
//           onChange={handleCemailChange}
//         />

//         {/* Message Textarea */}
//         <textarea
//           placeholder="Write a message"
//           className="w-full h-[195px] px-4 py-2 border-[1.5px] focus:outline-none resize-none mb-4 bg-[#F3F2F2] rounded-lg border-gray-300 focus:border-[#E2761B]"
//           value={Cmessage}
//           onChange={handleCmessageChange}
//         />

//         {/* Submit Button */}
//         <button
//           className="w-full h-[45px] bg-[#E2761B] text-white font-semibold rounded border-[1.5px] border-transparent hover:bg-white hover:text-black hover:border-[#E2761B] transition-all duration-300"
//           onClick={sendCEmail}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import logoIcon1 from "/src/assets/ion_location-outline (1).png";
// import logoIcon2 from "/src/assets/fluent_call-48-regular.png";
// import logoIcon3 from "/src/assets/fluent_call-48-regular (1).png";
// import bgImage from "/src/assets/Optimize Image/Frame18901-ezgif.com-png-to-webp-converter.webp";

// const ContactForm = () => {
//   const [Cname, setCname] = useState("");
//   const [Cphone, setCphone] = useState("");
//   const [Cemail, setCEmail] = useState("");
//   const [Cmessage, setCmessage] = useState("");

//   // Validation states
//   const [errors, setErrors] = useState({
//     Cname: false,
//     Cphone: false,
//     Cemail: false,
//   });

//   const handleCnameChange = (e) => {
//     setCname(e.target.value);
//     if (e.target.value) {
//       setErrors((prevErrors) => ({ ...prevErrors, Cname: false }));
//     }
//   };

//   const handleCphoneChange = (e) => {
//     setCphone(e.target.value);
//     if (e.target.value) {
//       setErrors((prevErrors) => ({ ...prevErrors, Cphone: false }));
//     }
//   };

//   const handleCemailChange = (e) => {
//     setCEmail(e.target.value);
//     if (e.target.value) {
//       setErrors((prevErrors) => ({ ...prevErrors, Cemail: false }));
//     }
//   };

//   const handleCmessageChange = (e) => {
//     setCmessage(e.target.value);
//   };

//   const sendCEmail = async () => {

//     // Phone number should have exactly 10 digits
//     const phoneValid = Cphone.length === 10;

//     // Email should match the regex
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
//     const emailValid = emailPattern.test(Cemail);

//     // Name should not be empty
//     const nameValid = Cname.trim().length > 0;
//     const newErrors = {
//       Cname: !nameValid,
//       Cphone: !phoneValid,
//       Cemail: !emailValid,
//     };

//     setErrors(newErrors);

//     if (!Cname || !Cphone || !Cemail) {
//       return;
//     }

//     // Email sending logic here...
//     const transporter = nodemailer.createTransport({
//       host: "smtp.example.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "your-email@example.com",
//         pass: "your-password",
//       },
//     });

//     const mailOptions = {
//       from: "your-email@example.com",
//       to: email,
//       subject: "Hello from ReactJS",
//       text: message,
//       attachments: attachments.map((file) => ({
//         filename: file.name,
//         content: file.data,
//       })),
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully");
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row justify-center items-center pt-[62px] lg:pt-40 pb-[72px] lg:pb-32 lg:mr-32">
//       {/* Grey Background on larger screens */}
//       <div className="hidden lg:block absolute right-0 w-[1005px] h-[836px] bg-[#F3F2F2] z-0 rounded-lg" />

//       {/* Contact Information Section */}
//       <div className="relative w-full lg:w-[579px] h-auto z-10 px-6 lg:px-0 lg:ml-0 mb-8 lg:mb-0 lg:mr-20">
//         {/* Remove bgImage for mobile */}
//         <div className="hidden lg:block">
//           <img
//             src={bgImage}
//             alt="Background Image"
//             className="w-[579px] h-auto rounded-lg"
//           />
//         </div>

//         {/* Contact Information for mobile and larger screens */}
//         <div className="w-full max-w-[407px] mx-auto lg:absolute lg:top-[20%] lg:left-[17%] lg:transform lg:translate-y-1/5 lg:-translate-x-1/5 text-white">
//           <div className="flex flex-col items-start gap-[20px] lg:gap-[61px] lg:px-0 px-7">
//             {/* Section 1: Address */}
//             <div className="flex flex-row items-start">
//               <img
//                 src={logoIcon1}
//                 alt="Address Icon"
//                 className="w-[20px] h-[30px] mr-4 lg:mr-5"
//               />
//               <div className="flex flex-col items-start">
//                 <h3 className="text-[19px] lg:text-3xl font-semibold text-[#E2761B]">
//                   Address
//                 </h3>
//                 <div className="flex flex-col">
//                   <p className="text-base lg:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                     Dhamtari Road, Abhanpur, Chhattisgarh
//                   </p>
//                   <br />
//                   <p className="text-base lg:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                     CGHB Building, Sector 27, Nawagaon Parsatti, Atal Nagar, New
//                     Raipur, Raipur(C.G)
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Section 2: Phone */}
//             <div className="flex flex-row items-start">
//               <img
//                 src={logoIcon2}
//                 alt="Phone Icon"
//                 className="w-[23px] h-[30px] mr-4 lg:mr-5"
//               />
//               <div className="flex flex-col items-start">
//                 <h3 className="text-xl lg:text-3xl font-semibold text-[#E2761B]">
//                   Phone
//                 </h3>
//                 <p className="text-base lg:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                   +91 97523-24111
//                 </p>
//               </div>
//             </div>

//             {/* Section 3: Email */}
//             <div className="flex flex-row items-start">
//               <img
//                 src={logoIcon3}
//                 alt="Email Icon"
//                 className="w-[27px] h-[22px] mr-4 lg:mr-5"
//               />
//               <div className="flex flex-col items-start">
//                 <h3 className="text-xl lg:text-3xl font-semibold text-[#E2761B]">
//                   Email
//                 </h3>
//                 <p className="text-base md:text-lg font-medium lg:text-[#E3E3E3] text-[#393939] open-sans">
//                   Saketplywood@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div className="w-full lg:w-[536px] h-auto px-8 py-14 lg:px-8 lg:py-8 bg-[#F3F2F2] z-20">
//         <h2 className="text-[33px] lg:text-[46px] font-semibold mb-4 text-[#393939]">
//           <span className="text-[#E2761B]">Get in touch</span> with us!
//         </h2>

//         {/* Name Input */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className={`w-full h-[45px] px-4 border-[1.5px] ${
//               errors.Cname ? "border-red-500" : "border-gray-300"
//             } bg-[#F3F2F2] focus:outline-none rounded-lg focus:border-[#E2761B]`}
//             value={Cname}
//             onChange={handleCnameChange}
//           />
//           {errors.Cname && (
//             <p className="text-red-500 text-sm mt-1">This is mandatory</p>
//           )}
//         </div>

//         {/* Phone Number Input */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Phone Number"
//             className={`w-full h-[45px] px-4 border-[1.5px] ${
//               errors.Cphone ? "border-red-500" : "border-gray-300"
//             } bg-[#F3F2F2] focus:outline-none rounded-lg focus:border-[#E2761B]`}
//             value={Cphone}
//             onChange={handleCphoneChange}
//           />
//           {errors.Cphone && (
//             <p className="text-red-500 text-sm mt-1">This is mandatory</p>
//           )}
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className={`w-full h-[45px] px-4 border-[1.5px] ${
//               errors.Cemail ? "border-red-500" : "border-gray-300"
//             } bg-[#F3F2F2] focus:outline-none rounded-lg focus:border-[#E2761B]`}
//             value={Cemail}
//             onChange={handleCemailChange}
//           />
//           {errors.Cemail && (
//             <p className="text-red-500 text-sm mt-1">This is mandatory</p>
//           )}
//         </div>

//         {/* Message Textarea */}
//         <textarea
//           placeholder="Write a message"
//           className="w-full h-[195px] px-4 py-2 border-[1.5px] focus:outline-none resize-none mb-4 bg-[#F3F2F2] rounded-lg border-gray-300 focus:border-[#E2761B]"
//           value={Cmessage}
//           onChange={handleCmessageChange}
//         />

//         {/* Submit Button */}
//         <button
//           className="w-full h-[45px] bg-[#E2761B] text-white rounded-lg text-lg"
//           onClick={sendCEmail}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import logoIcon1 from "/src/assets/ion_location-outline (1).png";
import logoIcon2 from "/src/assets/fluent_call-48-regular.png";
import logoIcon3 from "/src/assets/fluent_call-48-regular (1).png";
import bgImage from "/src/assets/Optimize Image/Frame18902-ezgif.com-png-to-webp-converter.webp";
// import nodemailer from "nodemailer";

const ContactForm = () => {
  const [Cname, setCname] = useState("");
  const [Cphone, setCphone] = useState("");
  const [Cemail, setCEmail] = useState("");
  const [Cmessage, setCmessage] = useState("");

  // Validation states
  const [errors, setErrors] = useState({
    Cname: false,
    Cphone: false,
    Cemail: false,
  });

  const handleCnameChange = (e) => {
    const nameValue = e.target.value;
    setCname(nameValue);

    if (nameValue.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, Cname: false }));
    }
  };

  const handleCphoneChange = (e) => {
    const phoneValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
    setCphone(phoneValue);

    if (phoneValue && phoneValue.length === 10) {
      setErrors((prevErrors) => ({ ...prevErrors, Cphone: false }));
    }
  };

  const handleCemailChange = (e) => {
    const emailValue = e.target.value;
    setCEmail(emailValue);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValue.match(emailPattern)) {
      setErrors((prevErrors) => ({ ...prevErrors, Cemail: false }));
    }
  };

  const handleCmessageChange = (e) => {
    setCmessage(e.target.value);
  };

  const sendCEmail = async () => {
    // Phone number should have exactly 10 digits
    const phoneValid = Cphone.length === 10;
    // Email should match the regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValid = emailPattern.test(Cemail);
    // Name should not be empty
    const nameValid = Cname.trim().length > 0;

    const newErrors = {
      Cname: !nameValid,
      Cphone: !phoneValid,
      Cemail: !emailValid,
    };

    setErrors(newErrors);

    if (!nameValid || !phoneValid || !emailValid) {
      return;
    }

    // Proceed with email sending logic...
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.google.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: "abc@g.com",
    //     pass: "hngcfmh",
    //   },
    // });

    // const mailOptions = {
    //   from: "abc@g.com",
    //   to: "abc@g.com",
    //   subject: "Hello from ReactJS",
    //   text: Cname,
      // attachments: attachments.map((file) => ({
      //   filename: file.name,
      //   content: file.data,
      // })),
    // };

    // try {
    //   await transporter.sendMail(mailOptions);
    //   console.log("Email sent successfully");
    // } catch (error) {
    //   console.error("Error sending email:", error);
    // }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center lg:pt-24 pb-[120px] lg:pb-24 lg:mr-32">
      {/* Grey Background on larger screens */}
      <div className="hidden lg:block absolute right-0 w-[1005px] h-[706px] bg-[#F3F2F2] z-0 rounded-lg" />

      {/* Contact Information Section */}
      <div className="relative w-full lg:w-[579px] h-auto z-10 px-6 lg:px-0 lg:ml-0 mb-8 lg:mb-0 lg:mr-20">
        {/* Remove bgImage for mobile */}
        <div className="hidden lg:block">
          <img
            src={bgImage}
            alt="Background Image"
            className="w-[633px] h-auto rounded-lg"
          />
        </div>

        {/* Contact Information for mobile and larger screens */}
        {/* <div className="w-full max-w-[407px] mx-auto lg:absolute lg:top-[20%] lg:left-[17%] lg:transform lg:translate-y-1/5 lg:-translate-x-1/5 text-white"></div> */}
      </div>

      {/* Contact Form Section */}
      {/* <div className="w-full lg:w-[536px] h-auto px-8 py-14 lg:px-8 lg:py-8 bg-[#F3F2F2] z-20">
        <h2 className="text-[33px] lg:text-[46px] font-semibold mb-4 text-[#393939]">
          <span className="text-[#E2761B]">Get in touch</span> with us!
        </h2> */}

      {/* Name Input */}
      {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className={`w-full h-[45px] px-4 border-[1.5px] ${
              errors.Cname ? "border-red-500" : "border-gray-300"
            } bg-[#F3F2F2] focus:outline-none rounded-lg focus:border-[#E2761B]`}
            value={Cname}
            onChange={handleCnameChange}
          />
          {errors.Cname && (
            <p className="text-red-500 text-sm mt-1">This is mandatory</p>
          )}
        </div> */}

      {/* Phone Number Input */}
      {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            className={`w-full h-[45px] px-4 border-[1.5px] ${
              errors.Cphone ? "border-red-500" : "border-gray-300"
            } bg-[#F3F2F2] focus:outline-none rounded-lg focus:border-[#E2761B]`}
            value={Cphone}
            onChange={handleCphoneChange}
            maxLength="10"
          />
          {errors.Cphone && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid 10-digit phone number
            </p>
          )}
        </div> */}

      {/* Email Input */}
      {/* <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className={`w-full h-[45px] px-4 border-[1.5px] ${
              errors.Cemail ? "border-red-500" : "border-gray-300"
            } bg-[#F3F2F2] focus:outline-none rounded-lg focus:border-[#E2761B]`}
            value={Cemail}
            onChange={handleCemailChange}
          />
          {errors.Cemail && (
            <p className="text-red-500 text-sm mt-1">Invalid email address</p>
          )}
        </div> */}

      {/* Message Input */}
      {/* <div className="mb-4">
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full h-[195px] px-4 py-2 border-[1.5px] border-gray-300 bg-[#F3F2F2] focus:outline-none rounded-lg focus:border-[#E2761B]"
            value={Cmessage}
            onChange={handleCmessageChange}
          />
        </div>

        <button
          onClick={sendCEmail}
          className="w-full h-[50px] bg-[#E2761B] text-white rounded-lg hover:bg-[#D46417]"
        >
          Send Message
        </button> */}
      {/* </div> */}
      <div className="flex flex-col items-start gap-[20px] lg:gap-[61px] lg:px-0 px-7 z-[9] max-w-[407px]">
        {/* Section 1: Address */}
        <div className="flex flex-row items-start">
          <img
            src={logoIcon1}
            alt="Address Icon"
            className="w-[20px] h-[30px] mr-4 lg:mr-5"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-[19px] lg:text-3xl font-semibold text-[#E2761B]">
              Address
            </h3>
            <div className="flex flex-col">
              <p className="text-base lg:text-lg font-medium lg:text-[#1C1C1C] text-[#393939] open-sans">
                Dhamtari Road, Abhanpur, Chhattisgarh
              </p>
              <br />
              <p className="text-base lg:text-lg font-medium lg:text-[#1C1C1C] text-[#393939] open-sans">
                CGHB Building, Sector 27, Nawagaon Parsatti, Atal Nagar, New
                Raipur, Raipur(C.G)
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Phone */}
        <div className="flex flex-row items-start">
          <img
            src={logoIcon2}
            alt="Phone Icon"
            className="w-[23px] h-[30px] mr-4 lg:mr-5"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-xl lg:text-3xl font-semibold text-[#E2761B]">
              Phone
            </h3>
            <p className="text-base lg:text-lg font-medium lg:text-[#1C1C1C] text-[#393939] open-sans">
              +91 97523-24111
            </p>
          </div>
        </div>

        {/* Section 3: Email */}
        <div className="flex flex-row items-start">
          <img
            src={logoIcon3}
            alt="Email Icon"
            className="w-[27px] h-[22px] mr-4 lg:mr-5"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-xl lg:text-3xl font-semibold text-[#E2761B]">
              Email
            </h3>
            <p className="text-base md:text-lg font-medium lg:text-[#1C1C1C] text-[#393939] open-sans">
              saketplywood@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
