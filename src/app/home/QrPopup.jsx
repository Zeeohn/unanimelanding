import React, { useState } from "react";
import Image from "next/image";

const QRCodePopup = ({ qrCodeSrc, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Download App</h2>
        <Image src={qrCodeSrc} alt="QR Code" className="mx-auto w-32 h-32 mb-4" />
        <p className="text-sm text-gray-600 mb-6">
          Scan the QR code with your phone camera to download the app.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// const App = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleOpenPopup = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="p-6">
//       <button
//         onClick={handleOpenPopup}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         Show QR Code
//       </button>

//       {showPopup && (
//         <QRCodePopup
//           qrCodeSrc="https://via.placeholder.com/150"
//           onClose={handleClosePopup}
//         />
//       )}
//     </div>
//   );
// };

export default QRCodePopup;
