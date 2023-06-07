import { useSelector } from "react-redux"
import { IRootState } from "../../store/store"
import { Historyitem } from "./historyitem";

export function History(){
    const start = useSelector((state:IRootState)=>state.history)
    return(<>
        {start.map((item)=>(<Historyitem key={item.id} id={item.id} name={item.name} time={item.time} />))}
    </>)
}




 