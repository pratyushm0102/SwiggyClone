import { useSelector } from "react-redux"

export default function Chekout(){
    const items = useSelector(state=>state.cartslice.items);

    return(
        <div>
            {
                items.map(value=> <div key={value.id} className="text-5xl">{value.name}</div>)
            }
        </div>
    )
}
