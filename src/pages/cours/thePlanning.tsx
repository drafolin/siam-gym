import { useState } from "react";
import DropDown from "~/components/DropDown";

export const Component = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const planning = [
    {
      day: "Lundi",
      courses: [
        {
          name: "Muay thaï",
          timeStart: "19:00",
          timeEnd: "20:45",
          teacher: "Patrick",
        },
      ],
    },
    {
      day: "Mardi",
      courses: [],
    },
    {
      day: "Mercredi",
      courses: [
        {
          name: "Muay thaï Kids",
          timeStart: "18:00",
          timeEnd: "19:00",
          teacher: "Patrick",
        },
        {
          name: "Muay thaï",
          timeStart: "19:00",
          timeEnd: "20:45",
          teacher: "Patrick",
        },
      ],
    },
    {
      day: "Jeudi",
      courses: [
        {
          name: "Punch 'n' fit",
          timeStart: "18:00",
          timeEnd: "19:00",
          teacher: "Guillaume",
        },
        {
          name: "Muay thaï Light",
          timeStart: "19:00",
          timeEnd: "20:00",
          teacher: "Guillaume",
        },
      ],
    },
    {
      day: "Vendredi",
      courses: [
        {
          name: "Punch 'n' fit",
          note: ["Sur demande"],
          timeStart: "18:00",
          timeEnd: "19:00",
          teacher: "Guillaume",
        },
        {
          name: "Muay thaï",
          timeStart: "19:00",
          timeEnd: "20:45",
          teacher: "Guillaume",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="custom-select">
        <select onChange={(v) => setCurrentDay(parseInt(v.target.value))}>
          {planning.map((day, index) => (
            <option
              key={index}
              value={index}
              disabled={day.courses.length === 0}
            >
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <div>
        {planning[currentDay].courses.map((course, index) => (
          <DropDown
            title={
              <>
                <p>
                  {course.timeStart} - {course.timeEnd}
                </p>
                <h3>{course.name}</h3>
              </>
            }
            key={index}
          >
            <ul>
              <li>
                <strong>Coach</strong>: {course.teacher}
              </li>
              {course.note?.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
          </DropDown>
        ))}
      </div>
    </div>
  );
};

export default Component;
