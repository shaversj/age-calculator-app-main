function Form({onSubmitHandler}) {

    return (
        <form className={"pt-10"} onSubmit={onSubmitHandler}>
            <div className={"flex"}>
                <div className={"pl-5 lg:pl-14"}>
                    <label htmlFor="day"><span
                        className={"uppercase font-bold text-[13px] lg:text-[15px] text-gray-500 tracking-[.2em]"}>Day</span></label>
                    <input
                        className={"placeholder-gray-400 invalid:border-red-500  block border-smokey grey font-bold text-xl lg:text-4xl pl-4 focus:outline focus:outline-1 focus:outline-purple rounded-lg border w-[88px] h-[54px] lg:w-[160px] lg:h-[72px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"}
                        id="day" type="number" min={"1"} max={"31"} placeholder={"DD"}/>
                    <p className={"pt-1 invisible peer-invalid:visible font-poppins text-red-500 text-[8px] lg:text-[12px]"}>Must
                        be a valid day</p>
                </div>
                <div className={"pl-4 "}>
                    <label htmlFor="month"><span
                        className={"uppercase font-bold text-[13px] lg:text-[15px] text-gray-500 tracking-[.2em]"}>Month</span></label>
                    <input
                        className={"peer placeholder-gray-400 focus:text-black block border-smokey grey font-bold text-xl lg:text-4xl pl-4 focus:outline focus:outline-1 focus:outline-purple rounded-lg border w-[88px] h-[54px] lg:w-[160px] lg:h-[72px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"}
                        id="month" type="number" placeholder={"MM"} min={"1"} max={"12"}/>
                    <p className={"pt-1 invisible peer-invalid:visible font-poppins text-red-500 text-[8px] lg:text-[12px]"}>Must
                        be a valid month</p>
                </div>
                <div className={"pl-4 pr-5"}>
                    <label htmlFor="year"><span
                        className={"uppercase font-bold text-[13px] lg:text-[15px] text-gray-500 tracking-[.2em]"}>Year</span></label>
                    <input
                        className={"peer placeholder-gray-400 focus:text-black block border-smokey grey font-bold text-xl lg:text-4xl pl-4 focus:outline focus:outline-1 focus:outline-purple rounded-lg border w-[88px] h-[54px] lg:w-[160px] lg:h-[72px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"}
                        id="year" type="number" placeholder={"YYYY"} min={"1"} max={"2023"}/>
                    <p className={"pt-1 invisible peer-invalid:visible font-poppins text-red-500 text-[8px] lg:text-[12px]"}>Must
                        be in the past</p>
                </div>
            </div>

            <div className="pt-8 inline-flex items-center justify-center lg:justify-start lg:pl-14  w-full">
                <hr className="w-[300px] lg:w-[650px] lg:max-w-[650px] h-px my-8 border-[1.25px] dark:bg-smokey-grey"/>
                <button
                    className={"absolute lg:relative px-3 font-medium -translate-x-1/2 left-1/2 lg:left-[5%] dark:text-white  bg-purple min-w-[65px] min-h-[65px] lg:min-w-[96px] lg:min-h-[96px] rounded-full grid place-items-center"}
                    type={"submit"} title={"Form Submit Button"}>
                    <svg className={"w-[25px] h-[25px] lg:w-[47px] lg:h-[47px] stroke-[4] lg:stroke-2"}
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 44">
                        <g fill="none" stroke="#FFF">
                            <path
                                d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                        </g>
                    </svg>
                </button>
            </div>


        </form>

    );
}

export default Form;