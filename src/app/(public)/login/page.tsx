'use client';
import {Metadata} from "next";
import {useRouter} from "next/navigation";


export default function LoginPage() {

    const router = useRouter();
    return (
        <form onSubmit={() => router.push("/")}>
            <div>
                <label>Email:</label>
                <input type={"email"}/>
            </div>
            <div>
                <label>Senha:</label>
                <input type={"password"}/>
            </div>

            <div>
                <button type={"submit"}>
                    Entrar
                </button>
            </div>
        </form>
    )
}