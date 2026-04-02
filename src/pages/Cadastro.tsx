import { useState } from "react";
import { AXIOS } from "../service";
import { useNavigate } from "react-router";

interface CadastroForm {
    name: string;
    cpf: string;
    placa: string;
}

export default function Cadastro() {
    const navigate = useNavigate()
    const [form, setForm] = useState<CadastroForm>({
        name: "",
        cpf: "",
        placa: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    async function cadastrar(e: React.FormEvent) {
        e.preventDefault();

        console.log(form)
        
        try {
            const response = await AXIOS.post("/cadastrar", form);
            console.log(response.data);
            alert("Motorista cadastrado com sucesso!");
            setForm({ name: "", cpf: "", placa: "" });
            // navigate('/')
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar motorista!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Cadastro de Motorista
                </h2>

                <form onSubmit={cadastrar} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={form.name}
                        onChange={handleChange}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={form.cpf}
                        onChange={handleChange}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <h3 className="text-lg font-semibold mt-4">Dados do Veículo</h3>

                    <input
                        type="text"
                        name="placa"
                        placeholder="Placa"
                        value={form.placa}
                        onChange={handleChange}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}