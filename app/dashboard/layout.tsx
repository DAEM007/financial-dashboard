import SideNav from "../ui/dashboard/sidenav";

type Children = {
    children: React.ReactNode,
}

export default function Layout ({ children } : Children) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-none w-full md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">{ children }</div>
        </div>
    );
}
