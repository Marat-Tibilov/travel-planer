import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-screen p-4">
            <div className="text-center space-y-6 max-w-md mx-auto">
                <h1 className="text-6xl font-bold text-gray-800">404 | Страница не найдена</h1>
                <Link href="/">
                    <button className="cursor-pointer px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                        Вернуться домой
                    </button>
                </Link>
            </div>
        </div>
    );
}