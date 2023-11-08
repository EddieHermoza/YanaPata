import NavDashboard from "@/app/Dashboard/Components/NavDashboard"

export default function layout({children}) {
  return (
    <main className="w-full min-h-screen flex">
        <NavDashboard/>
        {children}
    </main>
  )
}
