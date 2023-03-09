import "./ProjectCardStyles.css"
import EachCard from "./EachCard";
import Data from "./data";

function Work(){

    return (
        <div className="work-container">
            <div className="project-container">

                {
                    Data.map((val,ind)=>{
                        return (
                            <EachCard
                                key={ind}
                                imgsrc={val.imgsrc}
                                alt={val.alt}
                                view={val.view}
                                title={val.title}
                                text={val.text}
                                source={val.source}


                            />

                        )
                    })
                }

            </div>
        </div>

    );

}

export default Work;
