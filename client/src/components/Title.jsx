const Title = ({title,subtitle, align, font}) => {
    return (
        <div className={`flex flex-col ${align=== "left"&& "md:items-start md:text-left"} justify-center text-center  py-4`}>
            <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>{title}</h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-172">{subtitle}</p>
        </div>
    );
};

export default Title;
