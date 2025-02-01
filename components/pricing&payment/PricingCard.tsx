import Link from "next/link";

export default function PricingCard({
  plan,
  price,
  attempts,
  isLogin,
}: {
  plan: string;
  price: number;
  attempts: number;
  isLogin: boolean;
}) {
  return (
    <>
      <div className="min-w-80 bg-white hover:bg-gray-100 border rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
        <div className="px-6 py-4 rounded-xl bg-background/90 group-hover:bg-gradient-to-r from-background to-background2">
          <h2 className="text-2xl font-semibold text-white group-hover:text-background3 duration-300">
            {plan} Plan
          </h2>
        </div>
        <div className="px-6 py-4">
          <div className="text-4xl font-bold text-primary group-hover:scale-105 group-hover:translate-x-24 group-hover:text-background2  duration-300">
            {price}{" "}
            <span className="text-lg text-gray-600 group-hover:text-background2">
              EGP
            </span>
          </div>
        </div>
        <div className="px-6 py-4">
          <ul className="text-gray-600">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-background2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {attempts} attempts
            </li>
          </ul>
        </div>
        <div className="px-6 pt-4 pb-6">
          <Link
            href={`${isLogin ? `/payment?plan=${plan}` : "/sign-in"}`}
            className="block w-full px-4 py-2 font-semibold text-center text-white bg-background/90 rounded hover:bg-background/95 focus:bg-background focus:outline-none"
          >
            Select Plan
          </Link>
        </div>
      </div>
    </>
  );
}
