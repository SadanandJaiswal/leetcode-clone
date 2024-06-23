import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import { Problem } from "@/utils/types/problem";

type WorkspaceProps = {
	problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({problem}) => {

    return (
        <Split className='split' minSize={0}>
            <ProblemDescription
            problem={problem} 
            // _solved={solved}
            />
            <div className='bg-dark-fill-2'>
                <Playground
                    problem={problem} 
                    // setSuccess={setSuccess} setSolved={setSolved}
                />
                {/* {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />} */}
            </div>
        </Split>
    );
}
export default Workspace;