import GridBackground from "./ui/grid-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative">
      <GridBackground>
        <div className="flex justify-center relative my-20 z-10 transition-colors ease-in-out duration-200">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
            <TextGenerateEffect
              words="Connect Instantly, Chat Seamlessly – Welcome to MeetPookie."
              className="text-[40px] md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg transition-all duration-500"
            />
            <motion.div
              animate={{
                y: 0,
                opacity: 1
              }}
              initial={{
                y: 100,
                opacity: 0
              }}
              transition={{ delay: 3, duration: 0.5 }}
              className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed transition-colors ease-in-out duration-200">
              <p>
                MeetPookie is a next-generation chat platform designed for seamless and secure conversations. Whether for personal or professional use, enjoy real-time messaging with advanced features and a sleek UI.
              </p>
            </motion.div>
          </div>
        </div>
      </GridBackground>
    </div>
  )
}

