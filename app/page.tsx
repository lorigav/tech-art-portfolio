import ImagePreview from "./components/Modal";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/CMYcover.png" />
        </div>
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/DDDcover.png" />
        </div>
      </div>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/SenProjcover.png" />
        </div>
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/trailercover.png" />
        </div>
      </div>
      {/* <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (5).jpg" />
        </div>
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (6).jpg" />
        </div>
      </div> */}
    </main>
  );
}
