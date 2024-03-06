import { useState } from "react";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const UploadButton = styled(IconButton)(() => ({
  border: "3px solid #ebeef1",
}));

const SmallUploadButton = styled(IconButton)(() => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "#75b6f7",
}));

const ImageLoader = ({ onLoad, base64Image }) => {
  const [previewSource, setPreviewSource] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLoad(reader.result);
      };
      reader.readAsDataURL(file);
    }

    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {previewSource || base64Image ? (
        <figure style={{ position: "relative" }}>
          <img
            src={previewSource ?? base64Image}
            alt="chosen"
            style={{
              height: "102px",
              width: "102px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <SmallUploadButton component="label" htmlFor="fileInput">
            <EditIcon />
          </SmallUploadButton>
        </figure>
      ) : (
        <UploadButton component="label" htmlFor="fileInput">
          <FaceIcon style={{ fontSize: "5rem" }} />
        </UploadButton>
      )}
    </div>
  );
};

export default ImageLoader;
