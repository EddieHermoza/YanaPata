import NavDashboard from "@/app/Dashboard/Components/NavDashboard"
import NavMobileDash from "./Components/NavMobileDash"
import Stack from 'react-stackai';
export default function layout({children}) {
  return (
    <main className="w-full min-h-screen flex">
        <NavDashboard/>
        <NavMobileDash/>
        {children}
    </main>
  )
}
