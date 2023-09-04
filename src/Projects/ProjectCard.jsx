function ProjectCard(props) {
    return (
        <div className="w-[570px] h-[192px] text-white bg-CardBackGround rounded-2xl shadow-CardBoxShadow flex justify-around items-center pl-4 pr-[6rem]">
            <img src={props.image} />
           <div className="flex flex-col gap-1 justify-center items-start ml-10">
           <p className="font-Poppins text-2xl font-semibold">{props.title}</p>
            <p className="font-Poppins text-xs">{props.briefing}</p>
            <button className="border-ButtonColor border-solid border-[1px] rounded-[10px] box-border p-1 w-24 text-center text-[10px]">LEARN MORE</button>
           </div>
        </div>
    );
}

export default ProjectCard;