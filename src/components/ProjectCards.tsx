interface ProjectCardsProps {
  image: string;
  title: string;
}

function ProjectCards(props: ProjectCardsProps) {
  return (
    <div>
      <div>
        <img src={props.image} alt="" className="w-full" />
        <div className="lg:flex justify-between mt-4">
          <p className="font-bold text-[24px] leading-none ">{props.title}</p>
          <p className="underline text-[#A86FF4] mt-2 lg:mt-0 text-sm cursor-pointer">
            Case Study (Coming Soon)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
