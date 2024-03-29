import React, { useState } from 'react';
import '../styles/ImageUpload.css';
import { Button } from '@material-ui/core';
import { db, storage } from '../firebase';
import Progress from '../components/Progress';

function ImageUpload({ username }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log("db stuff", db);

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes * 100)
        );

        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function 
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // post image inside DB
            db.collection("posts").add({
              timestamp: "test",
              caption: caption,
              imageUrl: url,
              username: username

            })

            setProgress('0');
            setCaption("")
            setImage(null);

          })
      }

    )


  }

  return (
    <div className="imageupload">
      <Progress progress={progress} className="imageupload__progress" value={progress} max="100" />
      <input type="text" />
      <input type="file" placeholder='Enter a caption...' value={caption} onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>

    </div>
  )
}

export default ImageUpload;
