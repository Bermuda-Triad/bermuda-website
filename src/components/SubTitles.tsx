interface SubTitlesProps {
  sub: string;
  heading: string;
  colored: string;
  last: string;
}

function SubTitles(props: SubTitlesProps) {
  return (
    <div>
      <div>
        <p className="text-[#FF5E3A] text-base font-semibold">{props.sub}</p>
        <p className="leading-none text-[36px] mt-3 hero">
          {props.heading}{" "}
          <span className="text-[#A86FF4] hero">{props.colored}</span> {props.last}
        </p>
      </div>
    </div>
  );
}

export default SubTitles;
