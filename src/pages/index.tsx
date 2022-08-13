import { motion } from "framer-motion";

export default function Index() {
  return (
    <div
      className={
        "flex flex-col overflow-hidden justify-center items-center bg-background-darker w-screen h-screen"
      }
    >
      <motion.h1
        drag
        className={
          "w-4/5 md:w-1/2 font-bold text-center text-text-primary text-2xl"
        }
      >
        Upon navigating to an invalid slug you will be redirected to this page
        which will contain the home page for the links app.
      </motion.h1>
    </div>
  );
}
