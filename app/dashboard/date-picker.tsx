import React from 'react'

import { DatePicker } from "@nextui-org/date-picker";
import { now, parseAbsoluteToLocal } from "@internationalized/date";

const CustomDatePicker = props => {
  let [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));


  return (
    <div>
      Hey
      <DatePicker
        showMonthAndYearPickers
        variant="bordered"
        className="max-w-md"
        label="Appointment date"
        value={date}
        onChange={setDate}
      />
    </div>
  )
}
export default CustomDatePicker
