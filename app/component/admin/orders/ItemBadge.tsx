import { Badge } from "@tremor/react";
import { RiFlag2Line, RiFlagFill, RiFlagLine } from "react-icons/ri"; // Import necessary icons

const getStatusAttributes = (status: string) => {
    switch (status) {
        case "success":
            return { color: "emerald", icon: RiFlag2Line };
        case "reversed":
            return { color: "yellow", icon: RiFlagFill };
        case "failed":
            return { color: "red", icon: RiFlagLine };
        default:
            return { color: "gray", icon: RiFlag2Line }; // default case
    }
};

const ItemBadge = ({ item }) => {
    const { color, icon: Icon } = getStatusAttributes(item.status);
    return (
        <Badge color={color} icon={Icon}>
            {item.status}
        </Badge>
    );
};

export default ItemBadge;