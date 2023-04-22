import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Nav(vehicles: any) {
  useEffect(() => {
    console.log("vehiclessss...", vehicles);
  }, []);
  return (
    <>
      <ul>
        {vehicles.vehicles.map((vehicle: any) => (
          <li key={vehicle.id}>
            <Link href={`/vehicle/${encodeURIComponent(vehicle.id)}`}>
              {vehicle.id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
