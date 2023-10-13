import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { onEightQuestion, onElevenQuestion, onFifthQuestion, onFirstQuestion, onFourthQuestion, onIncrementarErrores, onNinthQuestion, onRestartState, onSecondQuestion, onSeventhQuestion, onSixthQuestion, onTenQuestion, onThirdQuestion } from '../store/questions/questionsSlice'

const useQuestionSlice = () => {
  
    const questionProperties = useSelector((state: RootState) => state.question)
    const dispatch = useDispatch()

    const restartState = () => {
        dispatch(onRestartState());
    }

    const setFirstQuestion = (erroresPorCada100: number, personasMantenimiento: number, tiempoDetectarError: number) => {
        dispatch(onFirstQuestion({erroresPorCada100, personasMantenimiento, tiempoDetectarError}))
    }

    const setSecondQuestion = (programadores: number, numeroCambiosModulo: number, diasEntregas: number) => {
        dispatch(onSecondQuestion({ programadores, numeroCambiosModulo, diasEntregas }));
    }

    const setThirdQuestion = (pruebasRealizadas: number, pruebasAprobadas: number, tiempoPruebas: number, tiempoPruebasRequerido: number) => {
        dispatch(onThirdQuestion({ pruebasRealizadas, pruebasAprobadas, tiempoPruebas, tiempoPruebasRequerido }));
    }

    const setFourthQuestion = (requerimientosCliente: number, requerimientos: number, calificacion: number) => {
        dispatch(onFourthQuestion({ calCliente: calificacion, requerimientos: requerimientosCliente, requerimientosCumplidos: requerimientos }))
    }

    const setFifthQuestion = (erroresPorCada100: number, precio: number) => {
        dispatch(onFifthQuestion({ erroresPorCada100, precio }))
    }

    const setSixthQuestion = (diasCapacitacion: number, horasPorDiaCapacitacion: number, paginasDocumento: number) => {
        dispatch(onSixthQuestion({diasCapacitacion, horasPorDiaCapacitacion, paginasDocumento}));
    }

    const setSeventhQuestion = (porcentajeAccesosDenegados: number, tiposUsuario: number, promedioAccesos: number) => {
        dispatch(onSeventhQuestion({porcentajeAccesosDenegados, tiposUsuario, promedioAccesos}));
    }

    const setEightQuestion = ( recursosSolicitados: number, recursosUtilizados: number ) => {
        dispatch(onEightQuestion({ recursosSolicitados, recursosUtilizados }));
    }

    const setNinthQuestion = ( sis: number, sisFunc: number) => {
        dispatch(onNinthQuestion({ sis, sisFunc }));
    }

    const setTenQuestion = ( modulos: number, modulosReustilizados: number) => {
        dispatch(onTenQuestion({ modulos, modulosReustilizados }));
    }

    const setElevenQuestion = (programadores: number, bloquesPrograma: number, bloquesAcoplar: number) => {
        dispatch(onElevenQuestion({programadores, bloquesPrograma, bloquesAcoplar}))
    }

    const incrementarErrores = (errores: number) => {
        dispatch(onIncrementarErrores(errores));
    }

    return {
        //Props
        questionProperties,
        //Funciones
        restartState,
        setFirstQuestion,
        setSecondQuestion,
        setThirdQuestion,
        setFourthQuestion,
        setFifthQuestion,
        setSixthQuestion,
        setSeventhQuestion,
        setEightQuestion,
        setNinthQuestion,
        setTenQuestion,
        setElevenQuestion,
        incrementarErrores,
    }

}

export default useQuestionSlice