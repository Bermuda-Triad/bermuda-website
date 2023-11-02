interface CtaButtonProps {
  title: string;
  image: string;
}

function CtaButton(props: CtaButtonProps) {
  return (
    <div className="flex gap-2 items-center py-2 px-4 bg-[#A259FF] hover:bg-purple-500 text-white rounded-full font-bold">
      <p className="text-xs lg:text-base">{props.title}</p>
      <img src={props.image} alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
    </div>
  );
}

export default CtaButton;
