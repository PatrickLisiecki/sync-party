/* eslint-disable react/prop-types */
export default function Navbar({ link, handleLinkChange }) {
  return (
    <>
      <nav className="min-h-[80px] w-full bg-primary px-14">
        <div className="flex min-h-[80px] w-full items-center justify-center">
          <form className="flex flex-row gap-x-2">
            <input
              type="text"
              name="link"
              id="link"
              placeholder="YouTube Video URL"
              value={link}
              onChange={(e) => handleLinkChange(e.target.value)}
              className="min-h-[50px] min-w-[300px] border border-blue-200 bg-secondary px-2 py-3 focus:outline-none"
            ></input>
            <button
              type="submit"
              className="border border-blue-200 bg-secondary px-4 py-3 hover:bg-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
