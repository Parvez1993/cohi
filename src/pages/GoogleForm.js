// import React from "react";
// import { Container } from "react-bootstrap";

// function GoogleForm() {
//   return (
//     <Container>
//       <div className="my-2">
//         <div className="row g-0">
//           <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
//           <div className="col-md-8 col-lg-6">
//             <div className="login d-flex py-md-5 py-sm-1">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-9 col-lg-10 mx-auto">
//                     <form style={{ marginTop: "10%" }}>
//                       <h2 className="login-heading my-4 text-white">
//                         Please Enter the Following Details
//                       </h2>
//                       {msg ? <Alert variant="secondary">{msg}</Alert> : ""}
//                       <div className="form-floating mb-3">
//                         <input
//                           type="number"
//                           className="form-control"
//                           id="age"
//                           name="age"
//                           placeholder="Enter Age"
//                           required
//                           value={age}
//                           onChange={(e) => setAge(e.target.value)}
//                         />
//                         <label htmlFor="age">Enter Age</label>
//                       </div>

//                       <div className="form-floating mb-3 text-white">
//                         <p>Choose Your Gender</p>
//                         <div className="radio d-flex align-items-center">
//                           <input
//                             type="radio"
//                             name="Male"
//                             value="Male"
//                             defaultChecked
//                             onChange={(e) => setGender(e.target.value)}
//                           />
//                           <label className="mx-2 fs-5">Male</label>
//                         </div>
//                         <div className="radio d-flex align-items-center">
//                           <input
//                             type="radio"
//                             name="Female"
//                             value="Female"
//                             onChange={(e) => setGender(e.target.value)}
//                           />
//                           <label className="mx-2 fs-5">Female</label>
//                         </div>
//                       </div>
//                       <div className="d-grid">
//                         <button
//                           className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
//                           onClick={handleSubmit}
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default GoogleForm;
