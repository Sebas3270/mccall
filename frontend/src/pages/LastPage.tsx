import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useNavigate } from 'react-router-dom';
import { useQuestionSlice } from '../hooks';
import { GradeComponent, LastGradeComponent } from '../components';
import { Button, Spacer } from '@nextui-org/react';

const LastPage = () => {

    const navigate = useNavigate();

    const { questionProperties } = useQuestionSlice();
    const {
        FirstAnswer,
        FirstType,
        SecondAnswer,
        SecondType,
        ThirdAnswer,
        ThirdType,
        FourAnswer,
        FourthType,
        FifthAnswer,
        FifthType,
        SixthAnswer,
        SixthType,
        SeventhAnswer,
        SeventhType,
        EightAnswer,
        EightType,
        NinthAnswer,
        NinthType,
        TenthAnswer,
        TenType,
        ElevenAnswer,
        ElevenType,
    } = questionProperties;

    return (
        <MainLayout title='Resultados'>
            <div className='grid grid-cols-2 gap-4'>
                <GradeComponent
                    title='1. Facilidad de recibir mantenimiento'
                    grade={FirstAnswer!}
                    type={FirstType!}
                    excelentMessage='Menos de 6'
                    regularMessage='De 6 a 12'
                    badMessage='Mas de 12'
                />
                <GradeComponent
                    title='2. Flexibilidad'
                    grade={SecondAnswer!}
                    type={SecondType!}
                    excelentMessage='Menos de 5'
                    regularMessage='De 5 a 10'
                    badMessage='Mas de 10'
                />
                <GradeComponent
                    title='3. Susceptabilidad de soometerse a pruebas'
                    grade={ThirdAnswer!}
                    type={ThirdType!}
                    excelentMessage='Menos de 0.8'
                    regularMessage='De 0.8 a 1'
                    badMessage='Mas de 1'
                />
                <GradeComponent
                    title='4. Corrección'
                    grade={FourAnswer!}
                    type={FourthType!}
                    excelentMessage='Mayor a 1.7'
                    regularMessage='De 1.7 a 1.3'
                    badMessage='Menos de 1.3'
                />
                <GradeComponent
                    title='5. Confiabilidad'
                    grade={FifthAnswer!}
                    type={FifthType!}
                    excelentMessage='Menos de 8'
                    regularMessage='De 8 a 12'
                    badMessage='Mas de 12'
                />
                <GradeComponent
                    title='6. Usabilidad'
                    grade={SixthAnswer!}
                    type={SixthType!}
                    excelentMessage='Menos de 140'
                    regularMessage='De 200 a 140'
                    badMessage='Mas de 200'
                />
                <GradeComponent
                    title='7. Integridad'
                    grade={SeventhAnswer!}
                    type={SeventhType!}
                    excelentMessage='Menos de 8'
                    regularMessage='De 8 a 12'
                    badMessage='Mas de 12'
                />
                <GradeComponent
                    title='8. Eficiencia'
                    grade={EightAnswer!}
                    type={EightType!}
                    excelentMessage='De 8 a 10'
                    regularMessage='De 6 a 8'
                    badMessage='Menos de 6'
                />
                <GradeComponent
                    title='9. Portabilidad'
                    grade={NinthAnswer!}
                    type={NinthType!}
                    excelentMessage='De 8 a 10'
                    regularMessage='De 6 a 8'
                    badMessage='Menos de 6'
                />
                <GradeComponent
                    title='10. Reusabilidad'
                    grade={TenthAnswer!}
                    type={TenType!}
                    excelentMessage='De 8 a 10'
                    regularMessage='De 6 a 8'
                    badMessage='Menos de 6'
                />
                <GradeComponent
                    title='11. Interoperabilidad'
                    grade={ElevenAnswer!}
                    type={ElevenType!}
                    excelentMessage='Menor de 0.5'
                    regularMessage='De 0.5 a 1.5'
                    badMessage='Mayor a 1.5'
                />
            </div>

            <Spacer y={8} />
            <LastGradeComponent
                grades={[
                    FirstType!,
                    SecondType!,
                    ThirdType!,
                    FourthType!,
                    FifthType!,
                    SixthType!,
                    SeventhType!,
                    EightType!,
                    NinthType!,
                    TenType!,
                ]}
            />

            <Spacer y={8} />
            <div className='flex flex-row justify-between items-center'>
                <Button onClick={() => {
                    navigate('/11');
                }}>Atrás</Button>

                <Button onClick={() => {
                    navigate('/');
                }}>Reiniciar</Button>
            </div>
        </MainLayout>
    )
}

export default LastPage