import Image from "next/image";

export default function Home(){
    return (
        <div className="w-screen h-screen flex justify-center items-center gap-8">
            <div>
                <Image src="/fassco.png" width={406} height={400} alt="Fassco logo"></Image>
                <p>FASSCO</p>
                <p>Панель управления складом</p>
            </div>
            <div>
                <form action="">
                    <p>имя</p>
                    <input type="text" />
                    <p>парол</p>
                    <input type="password" />
                    <button>Войти</button>
                </form>
            </div>
        </div>
    );
}