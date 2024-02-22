const Hero = () => {
  return (
    <div className="hero classcontainer">
      <div className="hero-contant">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="btn">Catagory</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>

          <div className="hero-logo">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/shoe_image.png" alt="img" />
      </div>
    </div>
  );
};

export default Hero;
