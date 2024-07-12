import { FC, ReactNode } from "react";

interface PeopleListProps {
  title: string;
  children: ReactNode;
}
const PeopleList: FC<PeopleListProps> = ({ title, children }) => {
  return <div className="p-2 mb-3">
           <h4 className="text-blue-400 border-t-2 border-gray-500 font-bold text-lg">{title}</h4>
           <p className="p-2">
            {children}
           </p>
         </div>
}

export default PeopleList;