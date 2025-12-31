export default function DineCard({RestData}){
    return(
        <div className="max-w-sm flex-none">

            <a href={RestData?.cta?.link} target="_blank">
                <div className="relative">
                        <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url}></img>
                    

                        <p className="absolute bottom-2 left-4 font-semibold text-xl text-white z-20 ">{RestData?.info?.name}</p>

                        <p className="absolute bottom-2 right-4 font-semibold text-xl text-white z-20">{RestData?.info?.rating?.value}</p>
                        
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
            
                </div>
            </a>

        </div>
    )

}