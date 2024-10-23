import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";
import Logo from "../assets/img/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Edit = () => {
  const present_name = "midudev";
  const cloudName = "dgarwcmpf";

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [nomImage, setNomImage] = useState("");
  const [error, setError] = useState(null);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleDownload = () => {
    if (image) {
      const link = document.createElement("a");
      link.href = image; // Usa el URL de la image

      
      link.download = `${nomImage}halloween.png`; // Nombre del archivo
      document.body.appendChild(link);
      link.click(); // Simula un clic en el enlace
      document.body.removeChild(link); // Limpia el DOM
    }
  };

  const notifyError = () =>
    toast.error("Error, try again", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleDataPromp = async (prompt, prompt_costume) => {
    setLoading(true); // Inicia el loading
    setError(null); 
    const baseUrl = "https://res.cloudinary.com/dgarwcmpf/image/upload/";
    try {
      if (prompt_costume != "" && prompt != "") {
        const url = `${baseUrl}e_gen_background_replace:prompt_${encodeURIComponent(
          prompt
        )}/e_gen_replace:from_Current%20outfit;to_${encodeURIComponent(
          prompt_costume
        )}/${nomImage}.jpg`;

        let response = await axios.get(url, {
          responseType: "blob",
        });

        const imageUrl = URL.createObjectURL(response.data);
        setImage(imageUrl);
      } else if (prompt_costume != "") {
        const url = `${baseUrl}e_gen_replace:from_Current%20outfit;to_${encodeURIComponent(
          prompt_costume
        )}/${nomImage}.jpg`;

        let response = await axios.get(url, {
          responseType: "blob",
        });
        const imageUrl = URL.createObjectURL(response.data);
        setImage(imageUrl);
      } else if (prompt != "") {
        const url = `${baseUrl}e_gen_background_replace:prompt_${encodeURIComponent(
          prompt
        )}/${nomImage}.jpg`;

        let response = await axios.get(url, {
          responseType: "blob",
        });
        const imageUrl = URL.createObjectURL(response.data);
        setImage(imageUrl);
      }
    } catch (error) {
      notifyError
      setError("Ocurrió un error al generar la imagen. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", present_name);
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      setNomImage(result.public_id);
      setImage(result.secure_url);
      setShowDownloadButton(true);
    } catch (error) {
      notifyError()
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-purple-800 text-[#f0e6d6]">
      {/* Header */}
      <header className="flex justify-between  items-center p-4 bg-purple-800">
        <div className="flex items-center space-x-3">
          <a href="#">
            <img src={Logo} alt="Logo" className="w-40" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            className="cursor-pointer bg-[#ff7518] rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-[#ff944d] hover:ring-2 hover:ring-[#ff7518] hover:shadow-xl hover:shadow-[#ff944d] focus:ring-[#ff944d] focus:shadow-[#ff7518] px-5 py-2"
            href="/"
          >
            Home
          </a>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-col md:flex-row h-screen overflow-y-auto">
        <Sidebar sendPrompt={handleDataPromp} imageEnv={image}></Sidebar>

        {/* Image Workspace */}
        <main className="flex-1 flex flex-col bg-[#1c1b1b] p-[50px] pl-20 h-full relative">
          {/* Image Upload Area */}
          <div className="md:absolute md:top-20 md:right-20 flex justify-end mt-5 md:mt-0">
          {showDownloadButton && (
        <button
          className="md:absolute md:top-20 md:right-20 cursor-pointer bg-[#ff7518] px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none mt-5 md:mt-0"
          onClick={handleDownload}
        >
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      )}
          </div>
          <div
            className="flex-grow flex items-center justify-center border-4 border-orange-600 rounded-lg p-10 cursor-pointer hover:border-orange-500 transition-colors"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {loading ? (
              <div className="flex flex-col">
                <div className="loader">
                  <div className="head"></div>
                  <div className="flames">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  <div className="eye"></div>
                </div>
                <div className="loader">
                  <div className="scanner">
                    <span>Loading...</span>
                  </div>
                </div>
              </div>
            ) : image ? (
              <img
                src={image}
                alt="Imagen subida"
                className="w-full h-auto max-w-[350px] max-h-[350px] min-w-[300px] min-h-[300px] object-contain rounded-lg shadow-md"
              />
            ) : (
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center space-y-3 text-orange-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-16 h-16 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 16l6-6m0 0l6 6m-6-6v12"
                  />
                </svg>
                <span className="text-white text-xl">
                  Arrastra una imagen aquí
                </span>
                <span className="text-white">o haz clic para seleccionar</span>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Edit;
