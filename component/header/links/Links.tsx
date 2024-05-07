import Link from "next/link";

export default function Links() {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Shop Spices",
            path: "/shop-spices"
        },
        {
            title: "Recipes",
            path: "/recipes"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]

    return (
        <div>
            {links.map(link => <Link href={link.path} key={link.title}>{link.title}</Link>)}
        </div>
    );
};