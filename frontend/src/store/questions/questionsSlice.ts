import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GradeType } from '../../helpers';

export interface QuestionsState {
  fechaInicioProyecto: string;
  fechaFinProyecto: string;
  lineasCodigo: number;
  precio: number;
  paginasDocumento: number;
  erroresPorCada100: number;
  programadores: number;
  tiempoProgramador: number;
  diasTrabajo: number;
  requerimientosCliente: number;
  requerimientosCumplidos: number;
  pruebasRealizadas: number;
  pruebasAprobadas: number;
  tiempoPruebas: number;
  tiempoPruebasRequerido: number;
  diasCapacitacion: number;
  horasPorDiaCapacitacion: number;
  calificacionCliente: number;
  recursosSolicitados: number;
  recursosUtilizados: number;
  modulosPrograma: number;
  modulosReutilizados: number;
  tiposUsuario: number;
  promedioAccesos: number;
  porcentajeAccesosDenegados: number;
  tiempoDetectarError: number;
  tiempoMantenimiento: number;
  personasMantenimiento: number;
  sistemasOperativos: number;
  sistemasOperativosFuncionando: number;

  numeroCambiosModulo: number;
  diasEntregas: number;

  bloquesPrograma: number;
  bloquesAcoplar: number;

  FirstAnswer?: number;
  SecondAnswer?: number;
  ThirdAnswer?: number;
  FourAnswer?: number;
  FifthAnswer?: number;
  SixthAnswer?: number;
  SeventhAnswer?: number;
  EightAnswer?: number;
  NinthAnswer?: number;
  TenthAnswer?: number;
  ElevenAnswer?: number;
  FinalAnswer?: number;

  FirstType?: GradeType;
  SecondType?: GradeType;
  ThirdType?: GradeType;
  FourthType?: GradeType;
  FifthType?: GradeType;
  SixthType?: GradeType;
  SeventhType?: GradeType;
  EightType?: GradeType;
  NinthType?: GradeType;
  TenType?: GradeType;
  ElevenType?: GradeType;
}

const initialState: QuestionsState = {
  fechaInicioProyecto: '',
  fechaFinProyecto: '',
  lineasCodigo: 0,
  precio: 0,
  paginasDocumento: 0,
  erroresPorCada100: 0,
  programadores: 0,
  tiempoProgramador: 0,
  diasTrabajo: 0,
  requerimientosCliente: 0,
  requerimientosCumplidos: 0,
  pruebasRealizadas: 0,
  pruebasAprobadas: 0,
  tiempoPruebas: 0,
  tiempoPruebasRequerido: 0,
  diasCapacitacion: 0,
  horasPorDiaCapacitacion: 0,
  calificacionCliente: 0,
  recursosSolicitados: 0,
  recursosUtilizados: 0,
  modulosPrograma: 0,
  modulosReutilizados: 0,
  tiposUsuario: 0,
  promedioAccesos: 0,
  porcentajeAccesosDenegados: 0,
  tiempoDetectarError: 0,
  tiempoMantenimiento: 0,
  personasMantenimiento: 0,
  sistemasOperativos: 0,
  sistemasOperativosFuncionando: 0,

  numeroCambiosModulo: 0,
  diasEntregas: 0,

  bloquesAcoplar: 0,
  bloquesPrograma: 0,
}

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    onRestartState: (state) => initialState,
    onFirstQuestion: (state, action: PayloadAction<{erroresPorCada100: number, personasMantenimiento: number, tiempoDetectarError: number}>) => {
      state.erroresPorCada100 = action.payload.erroresPorCada100;
      state.tiempoDetectarError = action.payload.tiempoDetectarError;
      state.personasMantenimiento = action.payload.personasMantenimiento;

      state.FirstAnswer = ((state.erroresPorCada100 * state.tiempoDetectarError )/ state.personasMantenimiento) / 100

      if(state.FirstAnswer <= 6) state.FirstType = GradeType.Excelente
      else if(state.FirstAnswer <= 12) state.FirstType = GradeType.Regular
      else state.FirstType = GradeType.Malo
    },
    onSecondQuestion: (state, action: PayloadAction<{programadores: number, numeroCambiosModulo: number, diasEntregas: number}>) => {
      state.programadores = action.payload.programadores;
      state.numeroCambiosModulo = action.payload.numeroCambiosModulo;
      state.diasEntregas = action.payload.diasEntregas;

      state.SecondAnswer = (state.numeroCambiosModulo / state.programadores) + state.diasEntregas;

      if(state.SecondAnswer <= 5) state.SecondType = GradeType.Excelente
      else if(state.SecondAnswer <= 10) state.SecondType = GradeType.Regular
      else state.SecondType = GradeType.Malo
    },
    onThirdQuestion: (state, action: PayloadAction<{pruebasRealizadas: number, pruebasAprobadas: number, tiempoPruebas: number, tiempoPruebasRequerido: number}>) => {
      state.pruebasRealizadas = action.payload.pruebasRealizadas;
      state.pruebasAprobadas = action.payload.pruebasAprobadas;
      state.tiempoPruebas = action.payload.tiempoPruebas;
      state.tiempoPruebasRequerido = action.payload.tiempoPruebasRequerido;

      const pruebasPromedio = state.pruebasAprobadas / state.pruebasRealizadas;
      const tiempoPromedio = state.tiempoPruebas / state.tiempoPruebasRequerido;

      state.ThirdAnswer = (pruebasPromedio + tiempoPromedio ) / 2;

      if(state.ThirdAnswer <= 0.7) state.ThirdType = GradeType.Excelente
      else if(state.ThirdAnswer <= 1) state.ThirdType = GradeType.Regular
      else state.ThirdType = GradeType.Malo
    },
    onFourthQuestion: (state, action: PayloadAction<{requerimientos: number, requerimientosCumplidos: number, calCliente: number}>) => {
      state.requerimientosCliente = action.payload.requerimientos;
      state.requerimientosCumplidos = action.payload.requerimientosCumplidos;
      state.calificacionCliente = action.payload.calCliente;

      state.FourAnswer = (state.requerimientosCumplidos / state.requerimientosCliente) + ( state.calificacionCliente / 100 );

      if(state.FourAnswer > 1.7) state.FourthType = GradeType.Excelente
      else if(state.FourAnswer >= 1.3) state.FourthType = GradeType.Regular
      else state.FourthType = GradeType.Malo
    },
    onFifthQuestion: (state, action: PayloadAction<{erroresPorCada100: number, precio: number}>) => {
      state.erroresPorCada100 = action.payload.erroresPorCada100;
      state.precio = action.payload.precio;

      state.FifthAnswer = (state.precio + state.erroresPorCada100) / 10;

      if(state.FifthAnswer <= 8) state.FifthType = GradeType.Excelente
      else if(state.FifthAnswer <= 10) state.FifthType = GradeType.Regular
      else state.FifthType = GradeType.Malo
    },
    onSixthQuestion: (state, action: PayloadAction<{diasCapacitacion: number, horasPorDiaCapacitacion: number, paginasDocumento: number}>) => {
      state.diasCapacitacion = action.payload.diasCapacitacion;
      state.horasPorDiaCapacitacion = action.payload.horasPorDiaCapacitacion;
      state.paginasDocumento = action.payload.paginasDocumento;

      state.SixthAnswer = (state.diasCapacitacion * state.horasPorDiaCapacitacion) + state.paginasDocumento - state.calificacionCliente

      if(state.SixthAnswer <= 140) state.SixthType = GradeType.Excelente
      else if(state.SixthAnswer <= 200) state.SixthType = GradeType.Regular
      else state.SixthType = GradeType.Malo
    },
    onSeventhQuestion: (state, action: PayloadAction<{porcentajeAccesosDenegados: number, tiposUsuario: number, promedioAccesos: number}>) => {
      state.porcentajeAccesosDenegados = action.payload.porcentajeAccesosDenegados;
      state.tiposUsuario = action.payload.tiposUsuario;
      state.promedioAccesos = action.payload.promedioAccesos;

      state.SeventhAnswer = state.porcentajeAccesosDenegados + ( state.tiposUsuario / 2 )

      if(state.SeventhAnswer <= 8) state.SeventhType = GradeType.Excelente
      else if(state.SeventhAnswer <= 12) state.SeventhType = GradeType.Regular
      else state.SeventhType = GradeType.Malo
    },
    onEightQuestion: (state, action: PayloadAction<{recursosSolicitados: number, recursosUtilizados: number}>) => {
      state.recursosSolicitados = action.payload.recursosSolicitados;
      state.recursosUtilizados = action.payload.recursosUtilizados;

      state.EightAnswer = (state.recursosUtilizados / state.recursosSolicitados) * 10

      if(state.EightAnswer >= 8) state.EightType = GradeType.Excelente
      else if(state.EightAnswer >= 6) state.EightType = GradeType.Regular
      else state.EightType = GradeType.Malo
    },
    onNinthQuestion: (state, action: PayloadAction<{sis: number, sisFunc: number}>) => {
      state.sistemasOperativos = action.payload.sis;
      state.sistemasOperativosFuncionando = action.payload.sisFunc;

      state.NinthAnswer = (state.sistemasOperativosFuncionando / state.sistemasOperativos) * 10

      if(state.NinthAnswer >= 8) state.NinthType = GradeType.Excelente
      else if(state.NinthAnswer >= 6) state.NinthType = GradeType.Regular
      else state.NinthType = GradeType.Malo
    },
    onTenQuestion: (state, action: PayloadAction<{modulos: number, modulosReustilizados: number}>) => {
      state.modulosPrograma = action.payload.modulos;
      state.modulosReutilizados = action.payload.modulosReustilizados;

      state.TenthAnswer = (state.modulosReutilizados / state.modulosPrograma) * 10

      if(state.TenthAnswer >= 8) state.TenType = GradeType.Excelente
      else if(state.TenthAnswer >= 6) state.TenType = GradeType.Regular
      else state.TenType = GradeType.Malo
    },
    onElevenQuestion: (state, action: PayloadAction<{programadores: number, bloquesPrograma: number, bloquesAcoplar: number}>) => {
      state.programadores = action.payload.programadores;
      state.bloquesPrograma = action.payload.bloquesPrograma;
      state.bloquesAcoplar = action.payload.bloquesAcoplar;

      state.ElevenAnswer =  (state.bloquesAcoplar / (state.programadores * state.bloquesPrograma)) * 10

      if(state.ElevenAnswer <= 0.5) state.ElevenType = GradeType.Excelente
      else if(state.ElevenAnswer <= 1.5) state.ElevenType = GradeType.Regular
      else state.ElevenType = GradeType.Malo
    },
    onIncrementarErrores: (state, action: PayloadAction<number>) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  onRestartState, 
  onFirstQuestion,
  onSecondQuestion,
  onThirdQuestion,
  onFourthQuestion,
  onFifthQuestion,
  onSixthQuestion,
  onSeventhQuestion,
  onEightQuestion,
  onNinthQuestion,
  onTenQuestion,
  onElevenQuestion,
  onIncrementarErrores, 
} = questionSlice.actions

export default questionSlice.reducer