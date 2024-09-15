import React from "react";
import { IApproachStep } from "src/lib/types";
import Box from "src/sharedComponents/Box";


const Step = ({stepNo, title, description}: IApproachStep) => {
  return (
    <Box className="flex gap-x-5 ms-1">
      <Box className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
        <Box className="relative z-10 size-8 flex justify-center items-center">
          <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
            {stepNo}
          </span>
        </Box>
      </Box>

      <Box className="grow pt-0.5 pb-8 sm:pb-12">
        <p className="text-sm md:text-base text-customTurquoiseGreen">
          <span className="text-gray-800">{title} : </span>
          {description}
        </p>
      </Box>
    </Box>
  )
}

export default React.memo(Step);