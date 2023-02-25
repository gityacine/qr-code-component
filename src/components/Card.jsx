
export default function Card() {
    return (
        <div className="flex flex-col p-4 bg-white items-center rounded-3xl shadow-md">
            <img className="rounded-xl w-full sm:w-80" src="/image-qr-code.png" alt="qr-code" />
            <div className="flex flex-col sm:w-80 p-4 space-y-4">
                <h1 className="font-outfit text-[#1f3251] font-bold text-center text-2xl">Improve your front-end skills by building projects</h1>
                <p className="font-outfit text-[#7b879d] text-base font-normal text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    );
}