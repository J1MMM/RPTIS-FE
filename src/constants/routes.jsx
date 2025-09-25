import { Landmark, Layers, LayoutGrid, MessageCircleQuestion, Settings, Wallet } from "lucide-react";

export const MAIN_LINKS = [
    { to: "/", icon: <LayoutGrid size={24} />, label: "Overview" },
    { to: "/assessor", icon: <Landmark size={24} />, label: "Assessor Office" },
    { to: "/landtax", icon: <Layers size={24} />, label: "Landtax Division" },
    { to: "/cash-division", icon: <Wallet size={24} />, label: "Cash Division" },
];

export const FOOTER_LINKS = [
    { to: "/docs", icon: <Settings size={24} />, label: "Settings" },
    {
        to: "/docs",
        icon: <MessageCircleQuestion size={24} />,
        label: "Help and docs",
    },
];

export const ASSESSOR_TAB_LINKS = [
    {
        to: "/assessor/active",
        label: "Active Records",
    },
    {
        to: "/assessor/archived",
        label: "Archived Records",
    },
    {
        to: "/assessor/pending",
        label: "Pending",
    },
];
