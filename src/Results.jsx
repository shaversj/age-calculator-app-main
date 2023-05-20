function Results({day, year, month}) {
    return (
        <>
            <div>
                <span
                    className={"font-poppins text-purple text-[3.25rem] lg:text-[6.5rem] leading-[50px] lg:leading-[100px] font-bold"}>{year} </span><span
                className={"font-poppins text-black text-[3.25rem] lg:text-[6.5rem] leading-[50px] lg:leading-[150px] font-extrabold"}>years</span>
            </div>
            <div>
                <span
                    className={"font-poppins text-purple text-[3.25rem] lg:text-[6.5rem] leading-[70px] lg:leading-[100px] font-bold"}>{month} </span><span
                className={"font-poppins text-black text-[3.25rem] lg:text-[6.5rem] leading-[70px] lg:leading-[100px] font-extrabold"}>months</span>
            </div>
            <div>
                <span
                    className={"font-poppins text-purple text-[3.25rem] lg:text-[6.5rem] leading-[40px] lg:leading-[120px] font-bold"}>{day} </span><span
                className={"font-poppins text-black text-[3.25rem] lg:text-[6.5rem] leading-[50px] lg:leading-[100px] font-extrabold"}>days</span>
            </div>
        </>
    );
}

export default Results;