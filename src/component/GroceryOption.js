import { GrocerGridCard } from "../utils/Grocery"
import GorceryCard from "./GorceryCard"
export default function GroceryOption(){
    return(
            <div className="w-[80%] mx-auto mt-20">

                <h1 className=" text-2xl font-bold">ShopGroceries on Instamart</h1>

                <div className="flex flex-nowrap overflow-x-auto mt-10 gap-3">

                    {GrocerGridCard.map((foodData) => (

                    <div key={foodData.id} className=" flex-shrink-0">
                      
                        <GorceryCard foodData={foodData} />
                        
                    </div>

                    ))}

                </div>
            </div>

    )
}