
export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="absolute font-bold px-6 py-3 rounded-xl  text-black bg-white flex justify-start align-middle overflow-hidden mr-12 ">
      {/* Moving Gradient Border */}
      <span className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-pink-300  to-blue-300 text-black animate-spin z-0 "></span>

      {/* Inner Background to block center area */}
      <span className=" inset-0 rounded-xl bg-black z-10"></span>

      {/* Text */}
      <span className="relative z-20">{children}</span>
    </button>
  );
};