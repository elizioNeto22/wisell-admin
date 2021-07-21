import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import br from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'
registerLocale('br', br)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  return <DatePicker dateFormat="dd/MM/yyyy" locale="br" selected={startDate} onChange={(date) => setStartDate(date)} />
}

export default Datepicker
