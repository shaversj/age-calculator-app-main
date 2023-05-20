import {useState} from 'react'
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration'
import './App.css'

import Form from "./Form.jsx";
import Results from "./Results.jsx";

function App() {

    let defaultAge = [
        {
            days: "- -",
            months: "- -",
            years: "- -",
        }]

    const [ageList, setAgeList] = useState(defaultAge)

    function onSubmitHandler(event) {
        event.preventDefault()
        const age = calculateAge(event.target.elements.day.value, event.target.elements.month.value, event.target.elements.year.value)
        setAgeList([age["$d"]])
    }

    function calculateAge(day, month, year) {
        const date2 = dayjs(new Date(year + '-' + month + '-' + day))
        const date1 = dayjs(new Date())
        dayjs.extend(duration)

        return dayjs.duration(date1.diff(date2))
    }

    return (
        <>
            <div className={"grid place-items-center bg-off-black min-h-screen"}>
                <div
                    className={"bg-off-white min-h-screen min-w-[375px] lg:min-w-[1440px] lg:min-h-[960px] flex justify-center pt-[89px] lg:items-center"}>
                    <div
                        className={"-mt-10 lg:-mt-20 bg-white sm:min-w-[336px] sm:max-w-[336px] sm:min-h-[475px] sm:max-h-[475px] lg:min-w-[846px] lg:min-h-[649px] lg:max-w-[846px] lg:max-h-[649px] rounded-3xl flex-wrap"}>
                        <Form onSubmitHandler={onSubmitHandler}/>
                        <div className={"pt-8 pl-6 lg:pl-14 lg:pt-2 lg:-mt-8"}>
                            <Results day={ageList[0].days} year={ageList[0].years} month={ageList[0].months}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
