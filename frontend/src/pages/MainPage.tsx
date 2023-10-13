import { Button, Spacer } from "@nextui-org/react";
import MainLayout from "../layouts/MainLayout";
import { useQuestionSlice } from "../hooks";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {

    const navigate = useNavigate();
    const { restartState } = useQuestionSlice();

    return (
        <MainLayout title="Factores de McCall">
            <p className="text-xl ">Bienvenido al programa Factores de McCall, dónde podras medir el nivel de calidad de tu sistema en base a estos factores</p>
            <Spacer y={5} />
            <Button 
            className="w-min bg-gradient-to-r from-[#191654] to-[#43a28f] text-white font-bold shadow-lg"
            onClick={() => {
                restartState();
                navigate('/1');
            }}
            >Comenzar</Button>
        </MainLayout>
    )
}