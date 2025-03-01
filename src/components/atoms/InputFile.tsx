import { useState } from "react";

const InputFile = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="mb-4 flex items-center gap-4">
      <label
        htmlFor="fileInput"
        className="w-[90px] h-[90px] rounded-full border border-[#EAECEE] flex justify-center items-center cursor-pointer text-center font-bold overflow-hidden"
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="text-gray-500">
            Add <br /> Photo
          </span>
        )}
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {image && (
        <button
          onClick={removeImage}
          className="mt-2 px-4 py-1 bg-[#FFE3E1] text-[#EF372B] text-sm rounded-full font-bold"
        >
          DELETE PHOTO
        </button>
      )}
    </div>
  );
};

export default InputFile;
