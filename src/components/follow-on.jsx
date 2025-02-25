import {FaLinkedin, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.youtube.com/@oshimpathan8">
          <FaYoutube size={20} />
        </a>
        <a href="https://www.linkedin.com/in/oshim7786/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://x.com/beginosem98333">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
