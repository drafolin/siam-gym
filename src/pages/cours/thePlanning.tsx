import { useState } from "react";
import DropDown from "~/components/DropDown";

export const Component = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const planning = [
    {
      day: "Lundi",
      courses: [
        {
          name: "Muay thaï Adultes",
          timeStart: "19:00",
          timeEnd: "20:30",
          teacher: "Patrick",
        }
      ]
    },
    {
      day: "Mardi",
      courses: [
        {
          name: "Circuit",
          timeStart: "18:00",
          timeEnd: "19:00",
          teacher: "Guillaume",
        },
        {
          name: "Muay thaï",
          timeStart: "19:15",
          timeEnd: "20:15",
          teacher: "Guillaume",
        }
      ]
    },
    {
      day: "Mercredi",
      courses: [
        {
          name: "Muay thaï Enfants",
          timeStart: "18:00",
          timeEnd: "19:00",
          teacher: "Patrick",
        },
        {
          name: "Muay thaï Adultes",
          timeStart: "19:00",
          timeEnd: "20:30",
          teacher: "Patrick",
        }
      ]
    },
    {
      day: "Jeudi",
      courses: []
    },
    {
      day: "Vendredi",
      courses: [
        {
          name: "Circuit",
          timeStart: "18:00",
          timeEnd: "19:00",
          teacher: "Guillaume",
        },
        {
          name: "Muay thaï Adultes",
          timeStart: "19:00",
          timeEnd: "20:30",
          teacher: "Guillaume",
        }
      ]
    },
    {
      day: "Samedi",
      courses: [
        {
          name: "Free",
          timeStart: "9:00",
          timeEnd: "11:00",
          teacher: "Guillaume/Patrick",
        }
      ]
    },
  ]

  return <div>
    <div className="custom-select">
      <select onChange={v => setCurrentDay(parseInt(v.target.value))}>
        {
          planning.map((day, index) =>
            <option
              key={index}
              value={index}
              disabled={day.courses.length === 0}>
              {day.day}
            </option>
          )
        }
      </select>
    </div>
    <div>
      {
        planning[ currentDay ].courses.map((course, index) =>
          <DropDown title={<>
            <p>{course.timeStart} - {course.timeEnd}</p>
            <h3>{course.name}</h3>
          </>}
                    key={index}
          >
            <ul>
              <li><strong>Coach</strong>: {course.teacher}</li>
            </ul>
          </DropDown>
        )
      }
    </div>
  </div>;
}

export default Component;
