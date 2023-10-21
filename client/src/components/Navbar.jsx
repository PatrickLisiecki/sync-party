import { useState } from "react";

export default function Navbar() {
  const [link, setLink] = useState("");

  const handleInputChange = (newLink) => {
    setLink(newLink);
  };

  return (
    <>
      <nav className="bg-primary min-h-[80px] w-screen px-14">
        <div className="flex min-h-[80px] w-full items-center justify-center">
          <form className="">
            <input
              type="text"
              name="link"
              id="link"
              placeholder="YouTube Video URL"
              value={link}
              onChange={(e) => handleInputChange(e.target.value)}
              className="bg-secondary min-h-[50px] min-w-[300px] border border-blue-200 px-2 py-3 focus:outline-none"
            ></input>
          </form>
        </div>
      </nav>
    </>
  );
}
