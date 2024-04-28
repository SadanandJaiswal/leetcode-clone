import {problems} from "@/mockProblems/problems";

type ProblemsTableProps = {
    
};

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    return(
        <tbody className="text-white">
            {problems.map((problem, idx) =>{
                return (
                    <tr className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`} key={problem.id}>
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            
                        </th>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default ProblemsTable;