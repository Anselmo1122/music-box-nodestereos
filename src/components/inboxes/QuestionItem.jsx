import React, { useState } from 'react'

const QuestionItem = ({ option, completed }) => {

  const [isSelected, setIsSelected] = useState(false)

  const correctResponse = option.val && isSelected;

  const handleClick = () => {
    if (correctResponse) {
      completed.setCompleted(true);
    }
    setIsSelected(true);
  }

  return (
    <li
      className="option"
      id={ correctResponse ? "success" : "failed" }
      onClick={ handleClick }
    >
      {option.res}
    </li>
  )
}

export default QuestionItem