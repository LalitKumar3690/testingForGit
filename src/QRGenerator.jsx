import React, { useState } from "react";
import QRCode from "qrcode";

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrImage, setQrImage] = useState("");

  const generateQR = async () => {
    if (url.trim() !== "") {
      try {
        const qrDataUrl = await QRCode.toDataURL(url);
        setQrImage(qrDataUrl);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">QR Code Generator</h2>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 border rounded w-80 mb-4"
      />

      <button
        onClick={generateQR}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate QR Code
      </button>

      {qrImage && (
        <div className="mt-4 p-4 bg-white shadow-md rounded">
          <img src={qrImage} alt="Generated QR Code" className="w-40 h-40" />
          <p className="mt-2 break-all">{url}</p>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
