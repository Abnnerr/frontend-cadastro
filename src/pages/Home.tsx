
import { useEffect, useState } from "react";
import { AXIOS } from "../service";

interface Veiculo {
    veiculo_id: number;
    veiculo_placa: string;
}

interface Users {
    user_id: number;
    user_nome: string;
    user_cpf: string;
    users_email?: string;
    veiculos?: Veiculo[];
}

const Home = () => {
    const [motorista, setMotorista] = useState<Users[]>([])
    useEffect(() => {
        async function buscarMotorista() {
            try {
                const response = await AXIOS.get('/users');
                setMotorista(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        buscarMotorista();
        const intervalId = setInterval(buscarMotorista, 5000);
        return () => clearInterval(intervalId);

    }, []);

    return (
        <div className="flex justify-center items-center flex-col p-15 gap-10">
            <a href="/cadastro" className="rounded bg-blue-600 p-2 font-bold">Cadastrar Motorista</a>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {motorista.length > 0 && motorista?.map((item) => (
                    <div
                        key={item.user_id}
                        className="flex flex-col  p-6 rounded-xl shadow-lg "
                    >
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-gray-900">{item.user_nome}</h2>
                            <p className="text-gray-700 font-mono">{item.user_cpf}</p>
                            {item.veiculos && item.veiculos?.length > 0 && (
                                <div className="mt-2">
                                    <h4 className="font-semibold text-gray-800">Veículos:</h4>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {item.veiculos?.map((v) => (
                                            <li key={v.veiculo_id}>{v.veiculo_placa}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;