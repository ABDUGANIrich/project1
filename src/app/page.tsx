import Image from "next/image";

export default function Home(){
    return (
        <div>
            <div>
                <Image src="/fassco.png" width={203} height={200} alt="Fassco logo"></Image>
            </div>
        </div>
    );
}