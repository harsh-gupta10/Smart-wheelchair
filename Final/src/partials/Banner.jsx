import React, { useState } from "react";

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const basePath = import.meta.env.BASE_URL;
  const location = useLocation();

  // initial check for page
  useEffect(() => {
    if (location.pathname !== basePath || location.pathname==basePath) {
      setBannerOpen(false);
    }
  }, [])

  return (
    <>
    </>
  );
}

export default Banner;
