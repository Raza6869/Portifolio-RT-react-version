import Link from "next/link"

export default function Links({name, href, custom}){
    return(
        <>
            <Link href={href} className={custom}>{name}</Link>
        </>
    )
}