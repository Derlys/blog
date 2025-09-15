import Image from "next/image";

export default function  Footer(){
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full bg-[var(--header)] text-white p-4">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 "
                href="https://www.instagram.com/nomadaxtwo/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/instagram.png"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Instagram
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.youtube.com/@nomadaxtwo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/youtube.png"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                Youtube
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.twitch.tv/derlysdev"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/twitch.png"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                Twitch
            </a>
        </footer>
    )
}