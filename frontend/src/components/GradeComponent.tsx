import React, { FC } from 'react'
import { GradeType } from '../helpers';

interface Props {
    title: string;
    grade: number;
    type: GradeType;
    excelentMessage: string;
    regularMessage: string;
    badMessage: string;
}

interface LastProps {
    grades: GradeType[];
}

export const GradeComponent:FC<Props> = (props) => {
  return (
    <div className='w-full'>
        <p className='font-monts font-bold'>{props.title}</p>
        <p>La calificación fue {props.grade}</p>
        <p>Clasificación: {getClasification(props.type)}</p>
        <div className='grid grid-cols-3 w-full rounded-md overflow-hidden'>
            <div className='bg-red-700 text-white flex justify-center items-center px-2'>{props.badMessage}</div>
            <div className='bg-yellow-600 text-white flex justify-center items-center px-2'>{props.regularMessage}</div>
            <div className='bg-green-600 text-white flex justify-center items-center px-2'>{props.excelentMessage}</div>
        </div>
    </div>
  )
}

const getClasification = (type: GradeType) => {
    switch (type) {
        case GradeType.Excelente:
            return 'Excelente'
        case GradeType.Regular:
            return 'Regular'
        case GradeType.Malo:
            return 'Malo'
        default:
            return 'Regular'
    }
}

const getClasificationByNumber = (finalGrade: number) => {
   if(finalGrade <= 7) return 'Malo'
   if(finalGrade <= 14) return 'Regular'
   return 'Excelente'
}

export const LastGradeComponent:FC<LastProps> = ({ grades }) => {

    const initialValue = 0;
    const finalGrade = grades.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    const textGrade = getClasificationByNumber(finalGrade);

    const finalScore = (finalGrade * 10) / 22
    console.log(finalScore)

    return (
      <div className='w-full'>
          <p className='font-monts font-bold text-2xl'>Clasificación general: {textGrade}</p>
          <p>Se obtuvo {finalScore} / 10</p>
      </div>
    )
  }
